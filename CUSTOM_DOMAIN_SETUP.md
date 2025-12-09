# Custom Domain Setup Guide
## pulsefeed.software → GitHub Pages

---

## ✅ Step 1: CNAME File Created

The `CNAME` file has been created with your domain: `pulsefeed.software`

---

## 🌐 Step 2: Configure DNS Settings

Go to your domain registrar where you bought `pulsefeed.software` and add these DNS records:

### Option A: Using Apex Domain (Recommended)
Add these **A records** pointing to GitHub Pages:

```
Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.108.153

Type: A
Name: @ 
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### Option B: Using WWW Subdomain
Add this **CNAME record**:

```
Type: CNAME
Name: www
Value: oatswrldwide.github.io
```

### Recommended: Add Both
For best results, add **both A records AND www CNAME** so both `pulsefeed.software` and `www.pulsefeed.software` work.

---

## ⚙️ Step 3: Configure GitHub Pages

1. **Push the CNAME file** (I'll do this in a moment)

2. **Go to GitHub Settings**:
   ```
   https://github.com/oatswrldwide/pulsefeed/settings/pages
   ```

3. **Custom domain section**:
   - Enter: `pulsefeed.software`
   - Click **Save**
   
4. **Wait for DNS check** (may take a few minutes)

5. **Enable HTTPS**:
   - Check ✅ "Enforce HTTPS" (after DNS propagates)

---

## 📋 Domain Registrar-Specific Instructions

### If using Namecheap:
1. Log in to Namecheap
2. Click "Manage" next to pulsefeed.software
3. Go to "Advanced DNS" tab
4. Add the A records and CNAME record above
5. TTL: Set to "Automatic" or "1 min" for faster propagation

### If using GoDaddy:
1. Log in to GoDaddy
2. Go to "My Products" → "DNS"
3. Click "Manage" for pulsefeed.software
4. Add the A records and CNAME record
5. Save changes

### If using Cloudflare:
1. Log in to Cloudflare
2. Select pulsefeed.software
3. Go to "DNS" tab
4. Add the A records and CNAME record
5. Set Proxy status to "Proxied" (orange cloud) for CDN benefits
6. Enable "Always Use HTTPS" in SSL/TLS settings

### If using Google Domains:
1. Log in to Google Domains
2. Click on pulsefeed.software
3. Go to "DNS" section
4. Add "Custom resource records"
5. Add the A records and CNAME record
6. Save

---

## ⏱️ Step 4: Wait for DNS Propagation

**Typical Times:**
- 5-30 minutes: Usually propagates
- Up to 48 hours: Maximum time (rare)

**Check DNS propagation**:
```bash
# Check if DNS is resolving
nslookup pulsefeed.software

# Or use online tool
https://www.whatsmydns.net/#A/pulsefeed.software
```

---

## 🔒 Step 5: Enable HTTPS (After DNS Propagates)

1. Go back to GitHub Pages settings
2. Once DNS is verified, check:
   - ✅ **Enforce HTTPS**
3. GitHub will automatically provision SSL certificate (takes a few minutes)

---

## ✅ Verification Checklist

After setup, verify these URLs work:

- [ ] `http://pulsefeed.software` → Redirects to HTTPS
- [ ] `https://pulsefeed.software` → Loads your site ✅
- [ ] `https://www.pulsefeed.software` → Loads your site ✅
- [ ] `https://pulsefeed.software/pages/employee.html` → Works ✅
- [ ] `https://pulsefeed.software/pages/admin.html` → Works ✅

---

## 🐛 Troubleshooting

### "Domain is improperly configured"
- **Cause**: DNS not propagated yet
- **Solution**: Wait 10-30 minutes, try again

### "DNS check was unsuccessful"
- **Cause**: A records not added or incorrect
- **Solution**: Double-check A record IP addresses

### HTTPS not available
- **Cause**: SSL certificate not provisioned yet
- **Solution**: Wait up to 24 hours for GitHub to provision

### Site showing 404 error
- **Cause**: CNAME file missing or incorrect
- **Solution**: Verify CNAME file contains only `pulsefeed.software` (no http://, no trailing slash)

### Old oatswrldwide.github.io still showing
- **Cause**: Browser cache or DNS cache
- **Solution**: Clear browser cache, use incognito mode, or wait for DNS to fully propagate

---

## 📝 Quick DNS Configuration Template

Copy and paste this into your DNS settings:

```
# A Records (Root domain)
@ → 185.199.108.153
@ → 185.199.109.153
@ → 185.199.110.153
@ → 185.199.111.153

# CNAME Record (WWW subdomain)
www → oatswrldwide.github.io
```

---

## 🎯 Next Steps After Domain is Live

1. **Update SEO files** with new domain
2. **Update sitemap.xml** with new URLs
3. **Submit to Google Search Console** with new domain
4. **Update analytics** to track new domain
5. **Set up 301 redirects** from old GitHub Pages URL (automatic)
6. **Update social media links** to new domain
7. **Email signature** with new domain

---

## 💡 Pro Tips

1. **Use Cloudflare** (free):
   - Free SSL
   - CDN for faster loading
   - DDoS protection
   - Analytics

2. **Set up email forwarding**:
   - hello@pulsefeed.software
   - support@pulsefeed.software
   - sales@pulsefeed.software

3. **Create subdomains** (future):
   - blog.pulsefeed.software
   - app.pulsefeed.software
   - docs.pulsefeed.software

---

## 📞 Need Help?

If you run into issues:
1. Check GitHub Pages documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
2. Check DNS propagation: https://www.whatsmydns.net
3. Test DNS records: https://mxtoolbox.com/SuperTool.aspx

---

**Ready to go live! Just configure your DNS settings and push this CNAME file.** 🚀
