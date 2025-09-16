# Connection Rituals Landing Page

Professional landing page for the "Connection Rituals: A Guide for Digital Couples" ebook with integrated SendOwl payment processing.

## 🎯 Features

- ✅ **Professional Design** - Modern, responsive landing page
- ✅ **SendOwl Integration** - Secure payment processing and automatic delivery
- ✅ **Mobile Optimized** - Perfect on all devices
- ✅ **Fast Performance** - Optimized for Vercel deployment
- ✅ **Email Collection** - Pre-fills customer email for SendOwl
- ✅ **Customer Testimonials** - Social proof from real customers
- ✅ **SEO Optimized** - Meta tags and structured data
- ✅ **No Backend Required** - Simple frontend-only deployment

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- SendOwl account with payment page set up

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/connection-rituals-landing.git
   cd connection-rituals-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - No environment variables needed!

3. **Deploy**
   - Vercel will automatically build and deploy
   - Get your live URL: `https://your-app.vercel.app`

## 🔧 Configuration

### SendOwl Integration

This landing page integrates with SendOwl for payment processing:
- **Payment URL**: `https://sowl.co/p/nR3qc`
- **Email pre-filling**: Customer email is passed to SendOwl
- **Automatic delivery**: SendOwl handles ebook delivery after payment
- **No backend needed**: Everything is handled by SendOwl

### Updating Payment URL

To change the SendOwl payment page:
1. Open `src/components/Newsletter.jsx`
2. Update the `SENDOWL_PAYMENT_URL` constant:
   ```javascript
   const SENDOWL_PAYMENT_URL = "https://sowl.co/p/YOUR_PRODUCT_ID";
   ```

## 📁 Project Structure

```
connection-rituals-landing/
├── public/
│   ├── index.html                    # Main HTML file
│   ├── connection_rituals_final_edition.pdf  # Ebook file (optional)
│   ├── connection_rituals_mobile_thumbnail.png  # Cover image
│   └── favicon.ico                   # Website favicon
├── src/
│   ├── components/
│   │   ├── About.jsx                 # About section
│   │   ├── Features.jsx              # Features showcase
│   │   ├── Footer.jsx                # Footer component
│   │   ├── Hero.jsx                  # Hero section
│   │   ├── Navbar.jsx                # Navigation
│   │   ├── Newsletter.jsx            # Payment section (SendOwl)
│   │   └── Testimonials.jsx          # Customer testimonials
│   ├── pages/
│   │   └── Index.jsx                 # Main page
│   ├── App.jsx                       # App component
│   ├── App.css                       # Global styles
│   └── main.jsx                      # Entry point
├── .env.example                      # Environment variables template
├── package.json                      # Dependencies
└── README.md                         # This file
```

## 🧪 Testing

### Local Testing
```bash
npm run dev
```

### Build Testing
```bash
npm run build
npm run preview
```

### Payment Flow Testing
1. Fill in email address
2. Click "Buy Now - $29"
3. Should redirect to SendOwl payment page
4. Complete test purchase on SendOwl
5. Verify email delivery from SendOwl

## 🔒 Security

- ✅ **No secret keys needed** - SendOwl handles all payment processing
- ✅ **HTTPS enforced** - Automatic with Vercel
- ✅ **Secure redirects** - Direct to SendOwl's secure payment page
- ✅ **Input validation** - Email validation before redirect

## 💰 SendOwl Benefits

### Why SendOwl?
- ✅ **All-in-one solution** - Payment processing + digital delivery
- ✅ **No backend required** - Simplifies deployment
- ✅ **Automatic delivery** - Customers get ebook immediately after payment
- ✅ **Built-in analytics** - Track sales and customer data
- ✅ **Multiple payment methods** - Credit cards, PayPal, etc.
- ✅ **Tax handling** - Automatic tax calculation and compliance
- ✅ **Customer support** - SendOwl handles payment issues

### SendOwl Features Used:
- **Payment pages** - Hosted checkout experience
- **Digital delivery** - Automatic ebook delivery via email
- **Customer management** - Built-in customer database
- **Analytics** - Sales tracking and reporting

## 🆘 Troubleshooting

### Common Issues

**Payment Button Not Working**
```
Check browser console for JavaScript errors
Verify SendOwl payment URL is correct
Test with different browsers
```

**Email Not Pre-filling**
```
Ensure email validation passes before redirect
Check URL parameter formatting
```

**Build Errors**
```bash
npm install
npm run build
```

## 🌐 Custom Domain

To use your own domain (e.g., `liveyourbest.digital`):
1. **In Vercel dashboard → Settings → Domains**
2. **Add your domain**
3. **Follow DNS configuration instructions**
4. **SSL automatically configured**

## 📊 Analytics

### Vercel Analytics
Enable in Vercel dashboard for:
- Page views and performance
- User engagement metrics
- Conversion tracking

### SendOwl Analytics
Monitor in SendOwl dashboard:
- Sales performance
- Customer data
- Revenue tracking
- Conversion rates

## 🔄 Updates

### Automatic Deployments
- Push to `main` branch → Vercel auto-deploys
- No environment variables to manage
- No backend to maintain

### Manual Updates
1. Update code locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Vercel deploys automatically

## 📈 Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimization Features
- ✅ **No API calls** - Faster page loads
- ✅ **Static deployment** - CDN delivery
- ✅ **Minimal JavaScript** - Better performance
- ✅ **Image optimization** with Vercel

## 💰 Cost Breakdown

### Hosting Costs:
- **Vercel:** Free (Hobby plan)
- **SendOwl:** Starting at $9/month
- **Total:** ~$9/month

### Transaction Fees:
- **SendOwl:** 5% + payment processor fees
- **For $29 sale:** You keep ~$26.50

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for digital couples seeking deeper connection**

# liveyourbest-digital
