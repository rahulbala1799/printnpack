# 📊 printNpack Analytics System

A comprehensive website analytics system that provides daily reports at 6 AM and 6 PM, tracking visitor behavior, page performance, and user engagement metrics.

## 🚀 Features

- **🕐 Dual Daily Reports**: 6:00 AM and 6:00 PM (Irish time)
- **📊 Comprehensive Tracking**: Page visits, time on page, bounce rate, device types
- **🔒 Privacy Compliant**: IP addresses anonymized, GDPR ready
- **📧 Email Reports**: Beautiful HTML reports sent automatically
- **⚡ Performance Metrics**: Page load times, user experience data
- **🌍 Geographic Data**: Country-level visitor information
- **📱 Device Analytics**: Mobile, desktop, and tablet breakdown
- **🔗 Referrer Tracking**: Traffic source analysis
- **🧪 Testing Tools**: Built-in system testing and validation

## 🏗️ Architecture

```
Frontend (analytics.js) → API (/api/analytics/track) → Database (Neon PostgreSQL)
                                    ↓
                            Scheduled Reports (6 AM/6 PM)
                                    ↓
                            Email Service (Gmail SMTP)
```

## 📋 Prerequisites

- **Node.js 18+** and npm
- **Neon PostgreSQL** database (already configured)
- **Gmail account** with app-specific password
- **Vercel deployment** (for production)

## 🛠️ Installation

### 1. Install Dependencies
```bash
npm install pg @types/pg nodemailer @types/nodemailer node-cron @types/node-cron
```

### 2. Set Up Environment Variables
Create a `.env.local` file in your project root:

```bash
# Database Configuration
DATABASE_URL=postgresql://neondb_owner:npg_pIHmnLP3ys0N@ep-nameless-salad-abvm2olo-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
ANALYTICS_RECIPIENT_EMAIL=your-email@gmail.com

# System Settings
NODE_ENV=production
ANALYTICS_ENABLED=true
REPORT_TIMEZONE=Europe/Dublin
```

### 3. Set Up Gmail App Password
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to Security → 2-Step Verification
3. Generate an "App Password" for "Mail"
4. Use this password in `EMAIL_PASSWORD`

### 4. Initialize Database
Run the SQL setup script in your Neon database:

```bash
# Copy the contents of scripts/setup-analytics-db.sql
# and run it in your Neon PostgreSQL database
```

## 🔧 Configuration

### Database Setup
The system automatically creates:
- `analytics.page_visits` - Page visit tracking
- `analytics.user_sessions` - User session management
- `analytics.daily_summaries` - Daily aggregated data
- `analytics.performance_metrics` - Performance tracking

### Email Configuration
- **Gmail**: Recommended, uses OAuth2 app passwords
- **Custom SMTP**: Uncomment and configure in `lib/email-service.js`

### Timezone Settings
Reports are generated in **Europe/Dublin** timezone:
- **Morning Report**: 6:00 AM
- **Evening Report**: 6:00 PM

## 📱 Frontend Integration

### 1. Include Analytics Script
Add this to your `_document.js` or main layout:

```html
<script src="/analytics.js" async></script>
```

### 2. Auto-Tracking Features
The script automatically tracks:
- ✅ Page visits and navigation
- ✅ Time spent on pages
- ✅ Form submissions
- ✅ Button clicks
- ✅ External link clicks
- ✅ Scroll depth
- ✅ Page load performance

### 3. Custom Event Tracking
```javascript
// Track custom events
window.printNpackAnalytics.trackEvent('purchase_completed', {
  product: 'Foamex Boards',
  value: 150.00
});

// Track form submissions
window.printNpackAnalytics.trackFormSubmission('#quote-form', {
  formType: 'product_quote'
});
```

## 🧪 Testing the System

### 1. Test API Endpoints
```bash
# Test the entire system
curl -X POST http://localhost:3000/api/analytics/test \
  -H "Content-Type: application/json" \
  -d '{"testType": "full"}'

# Test only email service
curl -X POST http://localhost:3000/api/analytics/test \
  -H "Content-Type: application/json" \
  -d '{"testType": "email"}'

# Test only database
curl -X POST http://localhost:3000/api/analytics/test \
  -H "Content-Type: application/json" \
  -d '{"testType": "database"}'
```

### 2. Manual Report Generation
```bash
# Generate a daily report
curl -X POST http://localhost:3000/api/analytics/report \
  -H "Content-Type: application/json" \
  -d '{"reportType": "daily"}'

# Generate morning/evening report
curl -X POST http://localhost:3000/api/analytics/report \
  -H "Content-Type: application/json" \
  -d '{"reportType": "morning"}'
```

### 3. Analytics Dashboard
Access the dashboard component to test and monitor the system:
```jsx
import AnalyticsDashboard from '../components/AnalyticsDashboard';

// Use in your admin area
<AnalyticsDashboard />
```

## 📊 Report Content

### Morning Report (6:00 AM)
- 📈 Previous day's visitor summary
- 📊 Overnight traffic analysis
- 🔄 Comparison with previous day
- 📱 Device and referrer breakdown

### Evening Report (6:00 PM)
- 📈 Today's visitor summary
- 📊 Peak hours and traffic patterns
- 🔄 Day-over-day comparison
- 📱 Real-time performance metrics

### Metrics Included
- **Visitors**: Unique visitors count
- **Page Views**: Total page views
- **Time on Page**: Average engagement time
- **Bounce Rate**: Single-page visits percentage
- **Device Types**: Mobile, desktop, tablet breakdown
- **Top Pages**: Most visited pages
- **Referrers**: Traffic sources
- **Performance**: Page load times

## 🔒 Privacy & Compliance

### GDPR Compliance
- ✅ IP addresses are hashed (SHA256)
- ✅ No personally identifiable information stored
- ✅ User consent can be implemented
- ✅ Data retention policies configurable

### Data Anonymization
- IP addresses converted to SHA256 hashes
- User agents stored but not linked to individuals
- Session IDs are randomly generated
- No cross-site tracking

## 🚀 Deployment

### Vercel Deployment
1. **Environment Variables**: Set in Vercel dashboard
2. **Database**: Ensure Neon database is accessible
3. **Cron Jobs**: Vercel Cron handles scheduled reports
4. **Build**: Analytics system included in build

### Environment Variables in Vercel
```bash
DATABASE_URL=your-neon-connection-string
EMAIL_USER=your-gmail-address
EMAIL_PASSWORD=your-app-password
ANALYTICS_RECIPIENT_EMAIL=your-email
```

## 📈 Monitoring & Maintenance

### System Health Checks
- Database connection monitoring
- Email service validation
- Report generation success tracking
- Error notification system

### Performance Optimization
- Database indexes for fast queries
- Connection pooling
- Cached daily summaries
- Efficient data aggregation

### Troubleshooting
1. **Check logs** for error messages
2. **Test database connection** via API
3. **Verify email configuration** with test endpoint
4. **Monitor scheduled reports** execution

## 🔧 Customization

### Adding New Metrics
1. Extend database schema in `scripts/setup-analytics-db.sql`
2. Update tracking in `public/analytics.js`
3. Modify report generation in `lib/analytics-reports.js`
4. Update email templates in `lib/email-service.js`

### Custom Report Schedules
Modify `lib/scheduled-reports.js`:
```javascript
// Custom schedule (e.g., weekly reports)
const WEEKLY_REPORT_TIME = '0 9 * * 1'; // Monday 9 AM

cron.schedule(WEEKLY_REPORT_TIME, async () => {
  await generateWeeklyReport();
}, { timezone: 'Europe/Dublin' });
```

### Enhanced Geolocation
Integrate with IP geolocation services:
```javascript
// In lib/analytics-reports.js
const country = await getCountryFromIP(ipAddress);
```

## 📚 API Reference

### POST `/api/analytics/track`
Track page visits and user behavior.

**Request Body:**
```json
{
  "pageUrl": "https://example.com/page",
  "pageTitle": "Page Title",
  "referrer": "https://google.com",
  "userAgent": "Mozilla/5.0...",
  "ipAddress": "192.168.1.1",
  "sessionId": "sess_123456",
  "loadTime": 1500,
  "timeOnPage": 45,
  "isBounce": false
}
```

### POST `/api/analytics/test`
Test system components.

**Request Body:**
```json
{
  "testType": "full|email|database",
  "recipientEmail": "test@example.com"
}
```

### POST `/api/analytics/report`
Generate manual reports.

**Request Body:**
```json
{
  "reportType": "daily|morning|evening",
  "date": "2024-01-15",
  "recipientEmail": "user@example.com"
}
```

## 🆘 Support & Issues

### Common Issues
1. **Database Connection Failed**
   - Check `DATABASE_URL` in environment variables
   - Verify Neon database is running
   - Check SSL configuration

2. **Email Not Sending**
   - Verify Gmail app password
   - Check `EMAIL_USER` and `EMAIL_PASSWORD`
   - Test with `/api/analytics/test` endpoint

3. **Reports Not Generating**
   - Check cron job configuration
   - Verify timezone settings
   - Monitor server logs

### Getting Help
- Check console logs for error messages
- Use the test endpoints to isolate issues
- Verify environment variable configuration
- Test individual components separately

## 📝 License

This analytics system is part of the printNpack website project.

---

**🎉 Your analytics system is now ready to track visitors and send beautiful daily reports!**
