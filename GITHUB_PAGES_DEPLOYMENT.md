# GitHub Pages Deployment Guide

## ✅ Code is Ready!

Your code has been configured for GitHub Pages deployment. Follow these steps to enable it:

## Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/nvnsit/nvns
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Source**: `GitHub Actions` (recommended - automatic deployment)
   - OR **Source**: `Deploy from a branch`
     - **Branch**: `main`
     - **Folder**: `/ (root)`

## Step 2: Wait for Deployment

- If you selected **GitHub Actions**: 
  - Go to **Actions** tab in your repository
  - You'll see a workflow running: "Deploy to GitHub Pages"
  - Wait for it to complete (usually 2-3 minutes)
  - Once complete, your site will be live!

- If you selected **Deploy from a branch**:
  - GitHub will automatically build and deploy
  - Wait a few minutes for the first deployment

## Step 3: Access Your Site

Your website will be available at:
**https://nvnsit.github.io/nvns/**

## Important Notes:

### Base Path Configuration
- The site is configured with base path `/nvns/`
- All routes will work correctly: 
  - https://nvnsit.github.io/nvns/
  - https://nvnsit.github.io/nvns/about
  - https://nvnsit.github.io/nvns/contact
  - etc.

### If You Want to Use Custom Domain:

1. In repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain: `nvnssoftwaresolutions.com`
3. Add a `CNAME` file in the repository root with your domain
4. Update DNS records as instructed by GitHub

### Automatic Deployments

Every time you push to the `main` branch:
- GitHub Actions will automatically build your site
- Deploy it to GitHub Pages
- Your site will be updated within 2-3 minutes

## Troubleshooting

### Site Not Loading?
1. Check **Actions** tab - is the workflow running successfully?
2. Check **Settings** → **Pages** - is it enabled?
3. Wait 5-10 minutes for DNS propagation

### Routes Not Working?
- Make sure `404.html` is in the repository root
- Check that `vite.config.js` has `base: '/nvns/'`
- Verify `pathSegmentsToKeep = 1` in `404.html`

### Build Errors?
- Check the **Actions** tab for error messages
- Make sure all dependencies are in `package.json`
- Verify Node.js version (should be 18+)

## Current Configuration:

✅ Base path: `/nvns/`  
✅ GitHub Actions workflow: `.github/workflows/deploy.yml`  
✅ SPA routing: `404.html` configured  
✅ Build script: `npm run build`  
✅ Output directory: `dist/`

## Next Steps:

1. ✅ Code is pushed to GitHub
2. ⏳ Enable GitHub Pages in Settings
3. ⏳ Wait for deployment
4. ✅ Your site will be live!

---

**Your website URL:** https://nvnsit.github.io/nvns/

