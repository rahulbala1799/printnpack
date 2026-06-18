#!/usr/bin/env python3
"""
Generate a proper B&W booklet pricelist: Cover → Index → Content → Back.
Portrait A4, KeepTogether per category, two-pass build for accurate page numbers.

Usage:
  .venv-pdf/bin/python scripts/generate-print-pricelist-pdf.py --segment restaurants
  .venv-pdf/bin/python scripts/generate-print-pricelist-pdf.py --segment full
"""

from __future__ import annotations

import argparse
import io
import json
import re
from collections import defaultdict
from datetime import date
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import cm, mm
from reportlab.platypus import (
    BaseDocTemplate,
    Flowable,
    Frame,
    KeepTogether,
    NextPageTemplate,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)

# ── B&W palette ───────────────────────────────────────────────────────────────
BLACK      = colors.black
WHITE      = colors.white
MID_GRAY   = colors.HexColor("#666666")
LIGHT_GRAY = colors.HexColor("#EEEEEE")
RULE_GRAY  = colors.HexColor("#CCCCCC")

PAGE_W, PAGE_H = A4
L_MARGIN = R_MARGIN = 1.5 * cm
T_MARGIN = 1.2 * cm
B_MARGIN = 1.6 * cm

COMPANY_NAME  = "Print N Pack Ireland"
COMPANY_URL   = "www.printnpack.ie"
COMPANY_EMAIL = "info@printnpack.ie"
COMPANY_PHONE = "+353 89 440 0155"
COMPANY_ADDR  = "Unit 14 Ashbourne Business Centre, Ashbourne, Co. Meath"

RESTAURANT_ORDER = [
    "Pizza Boxes", "Bagasse Meal Box", "Corrugated Meal Box", "Biobox",
    "Soup Containers", "Noodle Containers", "Fish & Chip Boxes",
    "Paper Meal Container", "Kids Meal Boxes", "Nested Boxes", "Food Trays",
    "Containersandtaway", "Sandwich & Wraps", "Round Kraft Bowls",
    "Portion Pots", "Plates & Bowls", "Foil Containers",
    "Hot Cups & Lids", "Cold Cups & Lids", "Hot Cup Extras", "Straws",
    "Napkins & Tableware", "Cutlery & Stirrers", "Condiments",
    "Handled Carrier Bags", "SOS Bags", "Flat Kraft Food Bags",
    "Greaseproof Food Bag", "Foil Bags", "Food Wrap",
    "Foil,Film, Parchment", "Food Cones",
]


# ── Zero-height marker flowable ───────────────────────────────────────────────

class CategoryMarker(Flowable):
    """Records the page number when rendered. Used for index building."""
    def __init__(self, category: str):
        Flowable.__init__(self)
        self.category = category
        self.width = 0
        self.height = 0

    def draw(self):
        pass


# ── Helpers ───────────────────────────────────────────────────────────────────

def parse_price(value) -> float | None:
    if value is None:
        return None
    if isinstance(value, (int, float)):
        return float(value)
    s = str(value).strip()
    if not s or s.upper() == "NO CHANGE":
        return None
    try:
        return float(s)
    except ValueError:
        return None


def euro(amount: float) -> str:
    return f"€{amount:.2f}"


def trunc(name: str, n: int = 65) -> str:
    return name if len(name) <= n else name[:n - 1] + "…"


def load_segment_config(config_path: Path, segment_id: str) -> dict:
    data = json.loads(config_path.read_text(encoding="utf-8"))
    if segment_id not in data["segments"]:
        raise SystemExit(f"Unknown segment '{segment_id}'. Available: {', '.join(data['segments'])}")
    seg = data["segments"][segment_id]
    seg["markup_percent"] = data.get("markup_percent", 30)
    seg["id"] = segment_id
    return seg


def load_products(cost_path: Path, markup: float, seg: dict) -> dict[str, list[dict]]:
    import openpyxl
    wb = openpyxl.load_workbook(cost_path, read_only=True, data_only=True)
    ws = wb["Non-Branded Cost List"]
    by_cat: dict[str, list[dict]] = defaultdict(list)
    mul = 1 + markup / 100
    allowed = seg.get("categories")
    all_cats = allowed == "*"
    excludes = [re.compile(p, re.I) for p in seg.get("exclude_name_patterns", [])]
    exclude_codes = set(seg.get("exclude_codes", []))

    for row in ws.iter_rows(min_row=2, values_only=True):
        if not row or not row[0]:
            continue
        cat  = str(row[1]).strip() if row[1] else "Other"
        if not all_cats and cat not in allowed:
            continue
        cost = parse_price(row[3])
        if cost is None:
            continue
        code = str(row[0]).strip()
        name = str(row[2]).strip() if row[2] else ""
        if code in exclude_codes or any(rx.search(name) for rx in excludes):
            continue
        by_cat[cat].append({"code": code, "name": name, "sale": round(cost * mul, 2)})
    wb.close()

    for cat in by_cat:
        by_cat[cat].sort(key=lambda p: p["code"])

    if seg.get("id") == "restaurants":
        order = {c: i for i, c in enumerate(RESTAURANT_ORDER)}
        items = sorted(by_cat.items(), key=lambda x: (order.get(x[0], 999), x[0].lower()))
    else:
        items = sorted(by_cat.items(), key=lambda x: x[0].lower())

    return {k: v for k, v in items if v}


# ── Document class ────────────────────────────────────────────────────────────

class BookletDoc(BaseDocTemplate):
    def __init__(self, filename, seg_title: str, total: int, markup: float,
                 content_page_offset: int = 1):
        """
        content_page_offset: how many pages before content starts (cover=1, cover+index=2)
        Used to display correct page numbers in footer.
        """
        super().__init__(
            filename,
            pagesize=A4,
            leftMargin=L_MARGIN, rightMargin=R_MARGIN,
            topMargin=T_MARGIN,  bottomMargin=B_MARGIN,
            title=f"Print N Pack — {seg_title} Pricelist",
            author=COMPANY_NAME,
        )
        self.seg_title = seg_title
        self.total = total
        self.markup = markup
        self.content_page_offset = content_page_offset
        self._cat_pages: dict[str, int] = {}

        def _frame(id_):
            return Frame(L_MARGIN, B_MARGIN, self.width, self.height,
                         id=id_, leftPadding=0, rightPadding=0,
                         topPadding=0, bottomPadding=0)

        self.addPageTemplates([
            PageTemplate(id="CoverTemplate", frames=[_frame("cover")],   onPage=self._on_cover),
            PageTemplate(id="IndexTemplate", frames=[_frame("index")],   onPage=self._on_index),
            PageTemplate(id="ContentTemplate", frames=[_frame("content")], onPage=self._on_content),
            PageTemplate(id="BackTemplate",  frames=[_frame("back")],    onPage=self._on_back),
        ])

    def afterFlowable(self, flowable):
        if isinstance(flowable, CategoryMarker):
            if flowable.category not in self._cat_pages:
                self._cat_pages[flowable.category] = self.page

    # ── Page callbacks ────────────────────────────────────────────────────────

    def _on_cover(self, canvas, doc):
        canvas.saveState()
        # Black top band (60% of page height)
        canvas.setFillColor(BLACK)
        canvas.rect(0, PAGE_H * 0.60, PAGE_W, PAGE_H * 0.40, fill=1, stroke=0)
        # Company name
        canvas.setFillColor(WHITE)
        canvas.setFont("Helvetica-Bold", 28)
        canvas.drawString(L_MARGIN, PAGE_H * 0.60 + 5.5 * cm, COMPANY_NAME)
        canvas.setFont("Helvetica", 18)
        canvas.drawString(L_MARGIN, PAGE_H * 0.60 + 3.5 * cm, f"{self.seg_title} Pricelist")
        canvas.setFont("Helvetica", 10)
        canvas.setFillColor(RULE_GRAY)
        canvas.drawString(L_MARGIN, PAGE_H * 0.60 + 2.0 * cm,
                          f"Effective {date.today().strftime('%d %B %Y')}")
        canvas.drawString(L_MARGIN, PAGE_H * 0.60 + 1.2 * cm,
                          f"{self.total} products  ·  {self.markup:.0f}% markup  ·  prices per case, ex VAT")
        # Lower section
        canvas.setFillColor(BLACK)
        canvas.setFont("Helvetica-Bold", 13)
        canvas.drawString(L_MARGIN, PAGE_H * 0.55, "Wholesale Packaging for Irish Businesses")
        canvas.setFont("Helvetica", 10)
        canvas.setFillColor(MID_GRAY)
        for i, line in enumerate([COMPANY_URL, COMPANY_EMAIL, COMPANY_PHONE]):
            canvas.drawString(L_MARGIN, PAGE_H * 0.55 - (i + 1) * 7 * mm, line)
        # Bottom black bar
        canvas.setFillColor(BLACK)
        canvas.rect(0, 0, PAGE_W, 1.2 * cm, fill=1, stroke=0)
        canvas.setFillColor(WHITE)
        canvas.setFont("Helvetica", 8)
        canvas.drawCentredString(PAGE_W / 2, 0.42 * cm, COMPANY_ADDR)
        canvas.restoreState()

    def _on_index(self, canvas, doc):
        """Same header/footer as content pages but no page number — this is the index page."""
        self._draw_content_chrome(canvas, show_page_num=False)

    def _on_content(self, canvas, doc):
        self._draw_content_chrome(canvas, show_page_num=True)

    def _draw_content_chrome(self, canvas, show_page_num: bool):
        canvas.saveState()
        # Top rule
        canvas.setStrokeColor(RULE_GRAY)
        canvas.setLineWidth(0.5)
        canvas.line(L_MARGIN, PAGE_H - T_MARGIN + 3 * mm,
                    PAGE_W - R_MARGIN, PAGE_H - T_MARGIN + 3 * mm)
        canvas.setFont("Helvetica-Bold", 7.5)
        canvas.setFillColor(BLACK)
        canvas.drawString(L_MARGIN, PAGE_H - T_MARGIN + 5 * mm,
                          f"Print N Pack — {self.seg_title} Pricelist")
        canvas.setFont("Helvetica", 7.5)
        canvas.setFillColor(MID_GRAY)
        canvas.drawRightString(PAGE_W - R_MARGIN, PAGE_H - T_MARGIN + 5 * mm,
                               f"All prices per case  ·  ex VAT  ·  {self.markup:.0f}% markup")
        # Bottom rule
        canvas.setStrokeColor(RULE_GRAY)
        canvas.line(L_MARGIN, B_MARGIN - 5 * mm,
                    PAGE_W - R_MARGIN, B_MARGIN - 5 * mm)
        canvas.setFont("Helvetica", 7.5)
        canvas.setFillColor(MID_GRAY)
        canvas.drawString(L_MARGIN, B_MARGIN - 9 * mm, COMPANY_URL)
        if show_page_num:
            displayed = canvas.getPageNumber() - self.content_page_offset
            canvas.drawRightString(PAGE_W - R_MARGIN, B_MARGIN - 9 * mm,
                                   f"Page {displayed}")
        canvas.restoreState()

    def _on_back(self, canvas, doc):
        canvas.saveState()
        # Black footer band
        canvas.setFillColor(BLACK)
        canvas.rect(0, 0, PAGE_W, PAGE_H * 0.35, fill=1, stroke=0)
        # Heading
        canvas.setFillColor(BLACK)
        canvas.setFont("Helvetica-Bold", 16)
        canvas.drawString(L_MARGIN, PAGE_H * 0.35 + 4.5 * cm, "Order Today")
        canvas.setFont("Helvetica", 10)
        canvas.setFillColor(MID_GRAY)
        canvas.drawString(L_MARGIN, PAGE_H * 0.35 + 3.5 * cm,
                          "Fast nationwide delivery across Ireland.")
        canvas.drawString(L_MARGIN, PAGE_H * 0.35 + 2.8 * cm,
                          "No hidden fees. Competitive wholesale pricing.")
        # Contact in black band
        canvas.setFillColor(WHITE)
        canvas.setFont("Helvetica-Bold", 13)
        canvas.drawString(L_MARGIN, PAGE_H * 0.35 - 1.0 * cm, COMPANY_NAME)
        canvas.setFont("Helvetica", 10)
        canvas.setFillColor(RULE_GRAY)
        for i, line in enumerate([COMPANY_ADDR,
                                   f"Web: {COMPANY_URL}",
                                   f"Email: {COMPANY_EMAIL}",
                                   f"Phone: {COMPANY_PHONE}"]):
            canvas.drawString(L_MARGIN, PAGE_H * 0.35 - 2.0 * cm - i * 6 * mm, line)
        # Top stripe
        canvas.setFillColor(BLACK)
        canvas.rect(0, PAGE_H - 0.9 * cm, PAGE_W, 0.9 * cm, fill=1, stroke=0)
        canvas.setFillColor(WHITE)
        canvas.setFont("Helvetica-Bold", 9)
        canvas.drawString(L_MARGIN, PAGE_H - 0.6 * cm, COMPANY_NAME)
        canvas.setFont("Helvetica", 9)
        canvas.drawRightString(PAGE_W - R_MARGIN, PAGE_H - 0.6 * cm, COMPANY_URL)
        canvas.restoreState()


# ── Category block ────────────────────────────────────────────────────────────

def category_block(category: str, products: list[dict], content_width: float) -> list:
    CODE_W  = 1.8 * cm
    PRICE_W = 1.5 * cm
    NAME_W  = content_width - CODE_W - PRICE_W

    cat_para = Paragraph(
        f"  {category}  ({len(products)} items)",
        ParagraphStyle("CatHead", fontName="Helvetica-Bold", fontSize=8.5,
                       textColor=WHITE, leading=11),
    )
    cat_header = Table([[cat_para]], colWidths=[content_width])
    cat_header.setStyle(TableStyle([
        ("BACKGROUND",    (0, 0), (-1, -1), BLACK),
        ("TOPPADDING",    (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("LEFTPADDING",   (0, 0), (-1, -1), 0),
        ("RIGHTPADDING",  (0, 0), (-1, -1), 0),
    ]))

    tdata = [["Code", "Product", "€ / case"]]
    for p in products:
        tdata.append([p["code"], trunc(p["name"]), euro(p["sale"])])

    prod_table = Table(tdata, colWidths=[CODE_W, NAME_W, PRICE_W], repeatRows=1)
    tstyle = TableStyle([
        ("FONTNAME",      (0, 0), (-1, 0),  "Helvetica-Bold"),
        ("FONTSIZE",      (0, 0), (-1, 0),  7),
        ("TEXTCOLOR",     (0, 0), (-1, 0),  MID_GRAY),
        ("TOPPADDING",    (0, 0), (-1, 0),  2),
        ("BOTTOMPADDING", (0, 0), (-1, 0),  2),
        ("LINEBELOW",     (0, 0), (-1, 0),  0.5, RULE_GRAY),
        ("FONTNAME",      (0, 1), (-1, -1), "Helvetica"),
        ("FONTSIZE",      (0, 1), (-1, -1), 7),
        ("TEXTCOLOR",     (0, 1), (-1, -1), BLACK),
        ("TOPPADDING",    (0, 1), (-1, -1), 1),
        ("BOTTOMPADDING", (0, 1), (-1, -1), 1),
        ("VALIGN",        (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN",         (2, 0), (2,  -1), "RIGHT"),
        ("LINEBELOW",     (0, 1), (-1, -1), 0.2, RULE_GRAY),
    ])
    for i in range(1, len(tdata)):
        if i % 2 == 0:
            tstyle.add("BACKGROUND", (0, i), (-1, i), LIGHT_GRAY)
    prod_table.setStyle(tstyle)

    marker = CategoryMarker(category)
    spacer_before = Spacer(1, 2 * mm)
    spacer_after  = Spacer(1, 1 * mm)
    block = [spacer_before, marker, cat_header, prod_table, spacer_after]

    if len(products) <= 40:
        return [KeepTogether(block)]
    else:
        return [KeepTogether([spacer_before, marker, cat_header]), prod_table, spacer_after]


# ── Index page builder ────────────────────────────────────────────────────────

def build_index_page(categories: list[str], cat_pages: dict[str, int],
                     content_width: float) -> list:
    """
    Returns flowables for the index page.
    cat_pages maps category → displayed page number (already adjusted).
    """
    # Title
    title = Paragraph(
        "Contents",
        ParagraphStyle("IdxTitle", fontName="Helvetica-Bold", fontSize=18,
                       textColor=BLACK, spaceAfter=6 * mm),
    )
    subtitle = Paragraph(
        f"{len(categories)} categories  ·  page numbers refer to content pages",
        ParagraphStyle("IdxSub", fontName="Helvetica", fontSize=8,
                       textColor=MID_GRAY, spaceAfter=6 * mm),
    )

    # Two-column table of categories + page numbers
    # Split categories into left and right columns
    mid = (len(categories) + 1) // 2
    left_cats  = categories[:mid]
    right_cats = categories[mid:]

    # Pad right column to same length
    while len(right_cats) < len(left_cats):
        right_cats.append(None)

    col_w = (content_width - 6 * mm) / 2  # gap between columns

    def row_cells(cat):
        if cat is None:
            return ["", ""]
        pg = cat_pages.get(cat, "—")
        return [cat, str(pg)]

    tdata = [row_cells(l) + row_cells(r) for l, r in zip(left_cats, right_cats)]

    col_widths = [col_w * 0.78, col_w * 0.22, col_w * 0.78, col_w * 0.22]
    idx_table = Table(tdata, colWidths=col_widths)

    tstyle = TableStyle([
        ("FONTNAME",      (0, 0), (-1, -1), "Helvetica"),
        ("FONTSIZE",      (0, 0), (-1, -1), 8.5),
        ("TEXTCOLOR",     (0, 0), (-1, -1), BLACK),
        ("TOPPADDING",    (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("LEFTPADDING",   (0, 0), (-1, -1), 4),
        ("RIGHTPADDING",  (0, 0), (-1, -1), 4),
        ("VALIGN",        (0, 0), (-1, -1), "MIDDLE"),
        # Right-align page number columns
        ("ALIGN",         (1, 0), (1, -1), "RIGHT"),
        ("ALIGN",         (3, 0), (3, -1), "RIGHT"),
        ("FONTNAME",      (1, 0), (1, -1), "Helvetica-Bold"),
        ("FONTNAME",      (3, 0), (3, -1), "Helvetica-Bold"),
        # Divider between left and right columns
        ("LINEBEFORE",    (2, 0), (2, -1), 0.5, RULE_GRAY),
        ("LEFTPADDING",   (2, 0), (2, -1), 8),
    ])
    # Alternate row shading
    for i in range(len(tdata)):
        if i % 2 == 1:
            tstyle.add("BACKGROUND", (0, i), (-1, i), LIGHT_GRAY)
        # Bottom rule
        tstyle.add("LINEBELOW", (0, i), (-1, i), 0.2, RULE_GRAY)
    idx_table.setStyle(tstyle)

    note = Paragraph(
        f"All prices are per case and exclude VAT.  "
        f"{date.today().strftime('%d %B %Y')}.",
        ParagraphStyle("IdxNote", fontName="Helvetica", fontSize=7.5,
                       textColor=MID_GRAY, spaceBefore=6 * mm),
    )

    return [title, subtitle, idx_table, note]


# ── Content story builder ─────────────────────────────────────────────────────

def build_content_story(by_category: dict[str, list[dict]],
                        content_width: float,
                        index_page: list | None) -> list:
    story: list = []
    # Cover is the first page template
    story.append(NextPageTemplate("IndexTemplate" if index_page else "ContentTemplate"))
    story.append(PageBreak())  # advance past cover

    if index_page:
        story.extend(index_page)
        story.append(NextPageTemplate("ContentTemplate"))
        story.append(PageBreak())  # advance past index

    for category, products in by_category.items():
        story.extend(category_block(category, products, content_width))

    story.append(NextPageTemplate("BackTemplate"))
    story.append(PageBreak())
    return story


# ── Main generator ────────────────────────────────────────────────────────────

def generate_pdf(cost_path: Path, output_path: Path, seg: dict, markup: float) -> None:
    by_category = load_products(cost_path, markup, seg)
    total       = sum(len(v) for v in by_category.values())
    categories  = list(by_category.keys())
    content_w   = PAGE_W - L_MARGIN - R_MARGIN

    if total == 0:
        raise SystemExit(f"No products found for segment '{seg['id']}'")

    # ── PASS 1: collect category page numbers (no index page) ─────────────────
    pass1_buf = io.BytesIO()
    doc1 = BookletDoc(pass1_buf, seg["title"], total, markup, content_page_offset=1)
    doc1.build(build_content_story(by_category, content_w, index_page=None))
    # doc1._cat_pages: {category: absolute_page_in_pass1}
    # In pass 1, content starts at absolute page 2.
    # In pass 2, index adds 1 page, so content starts at absolute page 3.
    # Displayed page = absolute_page - content_page_offset
    # Pass1 content_page_offset = 1  → pass1 displayed = abs - 1
    # Pass2 content_page_offset = 2  → pass2 displayed = abs - 2
    # For index, we want to show pass2 displayed = pass1_abs - 1
    #   i.e.  pass1_displayed + 0  (same number the reader sees in pass2)
    # Check: pass1 abs=2 → pass1 displayed=1; pass2 abs=3 → pass2 displayed=1 ✓
    raw_pages  = doc1._cat_pages
    cat_pages_for_index = {cat: (raw_pages[cat] - 1) for cat in raw_pages}

    # ── PASS 2: build real PDF with index page ────────────────────────────────
    index_flowables = build_index_page(categories, cat_pages_for_index, content_w)
    doc2 = BookletDoc(str(output_path), seg["title"], total, markup, content_page_offset=2)
    doc2.build(build_content_story(by_category, content_w, index_page=index_flowables))

    try:
        from pypdf import PdfReader
        n = len(PdfReader(str(output_path)).pages)
        print(f"Wrote {output_path.name}  —  {n} pages  ({total} products)")
    except ImportError:
        print(f"Wrote {output_path.name}  —  {total} products")


def main():
    repo        = Path(__file__).resolve().parent.parent
    config_path = repo / "scripts" / "pricelist-business-segments.json"

    parser = argparse.ArgumentParser()
    parser.add_argument("--segment", default="restaurants")
    parser.add_argument("cost_list", nargs="?", default=str(repo / "New Cost list.xlsx"))
    parser.add_argument("output",    nargs="?", default=None)
    parser.add_argument("--markup",  type=float, default=None)
    parser.add_argument("--config",  default=str(config_path))
    args = parser.parse_args()

    seg       = load_segment_config(Path(args.config), args.segment)
    markup    = args.markup if args.markup is not None else seg["markup_percent"]
    cost_path = Path(args.cost_list)
    out_path  = Path(args.output) if args.output else repo / seg["output_filename"]

    if not cost_path.exists():
        raise SystemExit(f"Cost list not found: {cost_path}")

    out_path.parent.mkdir(parents=True, exist_ok=True)
    generate_pdf(cost_path, out_path, seg, markup)


if __name__ == "__main__":
    main()
