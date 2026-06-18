const fs = require('fs');
const envFile = process.env.SEED_ENV === 'live' ? '.env.live' : '.env.local';
if (fs.existsSync(envFile)) {
  require('dotenv').config({ path: envFile });
} else {
  require('dotenv').config({ path: '.env.local' });
}

const { Pool } = require('pg');

const RULES = [
  { family: 'global', rule_key: 'labour', label: 'Labour rate', rule_data: { hourly_eur: 12 } },
  { family: 'global', rule_key: 'markup', label: 'Default markup', rule_data: { percent: 30, multiplier: 1.3 } },
  { family: 'pizza_box_printed', rule_key: 'ink', label: 'CMYK ink', rule_data: { cartridge_eur: 120, cost_per_unit: 0.045 } },
  { family: 'pizza_box_printed', rule_key: 'print_speed', label: 'Print speed', rule_data: { '7': 1000, '9': 1000, '12': 800, '14': 500, operators: 1 } },
  { family: 'paper_bags_printed', rule_key: 'bags', label: 'Bag costs', rule_data: { flat_large: 0.10, flat_medium: 0.08, twisted_large: 0.125 } },
  { family: 'paper_bags_printed', rule_key: 'ink', label: 'Ink', rule_data: { cost_per_unit_min: 0.045, cost_per_unit_max: 0.06 } },
  { family: 'paper_bags_printed', rule_key: 'print_speed', label: 'Speed', rule_data: { per_hour: 800, operators: 2 } },
  { family: 'sos_grab_bags_printed', rule_key: 'bags', label: 'SOS bags', rule_data: { cost_per_500: 20 } },
  { family: 'sos_grab_bags_printed', rule_key: 'ink', label: 'Ink', rule_data: { cost_per_unit: 0.045 } },
  { family: 'napkins_printed', rule_key: 'stock', label: 'Napkins', rule_data: { cost_per_500: 30, ink_per_unit: 0.01 } },
  { family: 'vinyl_banner', rule_key: 'vinyl_roll', label: 'Banner vinyl', rule_data: { cost: 80, length_m: 50, width_m: 1 } },
  { family: 'vinyl_banner', rule_key: 'ink', label: 'Ink', rule_data: { cost: 70, ml_per_cartridge: 440, colours: 4, ml_per_2sqm: 13 } },
  { family: 'vinyl_banner', rule_key: 'eyelets', label: 'Eyelets', rule_data: { cost_per_500: 19, default_count: 8 } },
  { family: 'vinyl_banner', rule_key: 'print', label: 'Print speed', rule_data: { metres_per_hour: 10 } },
  { family: 'vinyl_banner', rule_key: 'finish', label: 'Finishing', rule_data: { mins_per_2m: 20 } },
  { family: 'vinyl_stickers', rule_key: 'vinyl_roll', label: 'Vinyl roll', rule_data: { cost: 90, length_m: 50, width_m: 1.3 } },
  { family: 'vinyl_stickers', rule_key: 'laminate_roll', label: 'Laminate', rule_data: { cost: 90, length_m: 50, width_m: 1.3, extra_mins: 10 } },
  { family: 'correx_boards', rule_key: 'board_prices', label: 'Correx sheets', rule_data: { '2': 13, '3': 15, '5': 19, sheet_cm: '240x120' } },
  { family: 'correx_boards', rule_key: 'vinyl_roll', label: 'Print vinyl', rule_data: { cost: 90, length_m: 50, width_m: 1.3 } },
  { family: 'correx_boards', rule_key: 'print', label: 'Print', rule_data: { mins_per_piece: 12 } },
  { family: 'correx_boards', rule_key: 'apply', label: 'Apply vinyl', rule_data: { mins_per_piece: 15 } },
  { family: 'foamex_boards', rule_key: 'board_prices', label: 'Foamex sheets', rule_data: { '2': 18, '3': 22, '5': 28, sheet_cm: '240x120' } },
  { family: 'foamex_boards', rule_key: 'vinyl_roll', label: 'Print vinyl', rule_data: { cost: 90, length_m: 50, width_m: 1.3 } },
  { family: 'foamex_boards', rule_key: 'print', label: 'Print', rule_data: { mins_per_piece: 12 } },
  { family: 'foamex_boards', rule_key: 'apply', label: 'Apply vinyl', rule_data: { mins_per_piece: 15 } },
  { family: 'corrugated_meal_box_printed', rule_key: 'ink', label: 'CMYK ink', rule_data: { cost_per_unit: 0.045 } },
  { family: 'corrugated_meal_box_printed', rule_key: 'print_speed', label: 'Print speed', rule_data: { per_hour: 700, operators: 2 } },
  { family: 'bagasse_meal_box_printed', rule_key: 'ink', label: 'CMYK ink', rule_data: { cost_per_unit: 0.045 } },
  { family: 'bagasse_meal_box_printed', rule_key: 'print_speed', label: 'Print speed', rule_data: { per_hour: 700, operators: 2 } },
  { family: 'roll_up_banner', rule_key: 'cassette_roll', label: 'Cassette', rule_data: { cost: 130, length_m: 30, use_m_per_unit: 2 } },
  { family: 'roll_up_banner', rule_key: 'hardware', label: 'Stand', rule_data: { cost: 21 } },
  { family: 'posters', rule_key: 'paper_roll', label: 'Poster paper', rule_data: { cost: 75, length_m: 50, width_m: 1.3, gsm: 170 } },
  { family: 'leaflets', rule_key: 'paper', label: 'SRA3 paper', rule_data: { '130': { per: 500, cost: 18 }, '170': { per: 500, cost: 22 }, '200': { per: 250, cost: 18 }, '300': { per: 125, cost: 18 } } },
  { family: 'leaflets', rule_key: 'print', label: 'Print', rule_data: { ppm: 80, toner_per_page: 0.01, process_mins_per_500: 15 } },
  { family: 'clothing_dtf', rule_key: 'film', label: 'DTF film', rule_data: { cost_per_m: 14, width_m: 0.5 } },
  { family: 'rubber_stamps', rule_key: 'unit', label: 'Stamp cost', rule_data: { cost: 3 } },
  { family: 'burger_boxes_printed', rule_key: 'print_speed', label: 'Speed', rule_data: { per_hour: 700, operators: 2 } },
];

async function seed() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
  const client = await pool.connect();
  try {
    for (const rule of RULES) {
      await client.query(
        `INSERT INTO pricing_rules (family, rule_key, label, rule_data)
         VALUES ($1, $2, $3, $4)
         ON CONFLICT (family, rule_key) DO UPDATE SET
           label = EXCLUDED.label,
           rule_data = EXCLUDED.rule_data,
           updated_at = now()`,
        [rule.family, rule.rule_key, rule.label, JSON.stringify(rule.rule_data)]
      );
    }
    console.log(`✅ Seeded ${RULES.length} pricing rules`);
  } finally {
    client.release();
    await pool.end();
  }
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
