# GitHub Pages Not Opening - Fix Guide

## Issue: Build Success but Site Not Accessible

If the build is successful but https://nvnsit.github.io/nvns/ is not opening, follow these steps:

## Step 1: Enable GitHub Pages

1. Go to: https://github.com/nvnsit/nvns/settings/pages

2. Under **Source**, select one of these options:

   **Option A: GitHub Actions (Recommended)**
   - Source: `GitHub Actions`
   - This uses the workflow we created
   - Click **Save**

   **Option B: Deploy from a branch**
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)` or `/dist`
   - Click **Save**

## Step 2: Wait for Deployment

- After enabling, wait 2-5 minutes
- GitHub needs to process the deployment
- Check the **Actions** tab to see deployment status

## Step 3: Verify Deployment

1. Go to: https://github.com/nvnsit/nvns/actions
2. Look for "Deploy to GitHub Pages" workflow
3. Check if it shows "Success" with a green checkmark
4. Click on it to see the deployment URL

## Step 4: Check the URL

Your site should be at:
- **https://nvnsit.github.io/nvns/**

Note: The trailing slash `/` is important!

## Common Issues & Solutions

### Issue 1: "404 Not Found"
**Solution**: 
- Make sure GitHub Pages is enabled in Settings
- Wait 5-10 minutes for DNS propagation
- Try accessing: https://nvnsit.github.io/nvns/ (with trailing slash)

### Issue 2: "Page Not Found" or Blank Page
**Solution**:
- Check if the `dist` folder was created in the build
- Verify the base path in `vite.config.js` is `/nvns/`
- Make sure `index.html` exists in the dist folder

### Issue 3: Routes Not Working
**Solution**:
- The `404.html` file handles SPA routing
- Make sure it's in the repository root
- Verify `pathSegmentsToKeep = 1` in `404.html`

### Issue 4: Assets Not Loading
**Solution**:
- Check browser console for 404 errors
- Verify base path is correct in `vite.config.js`
- All assets should be relative to `/nvns/`

## Quick Check List

- [ ] GitHub Pages enabled in Settings
- [ ] Source set to "GitHub Actions" or "Deploy from a branch"
- [ ] Build workflow completed successfully
- [ ] Deployment workflow completed successfully
- [ ] Waited 5-10 minutes after enabling
- [ ] Using correct URL: https://nvnsit.github.io/nvns/

## Alternative: Check Deployment Status

1. Go to: https://github.com/nvnsit/nvns/deployments
2. You should see a deployment entry
3. Click on it to see the status and URL

## Still Not Working?

If it's still not working after 10 minutes:
1. Check the Actions tab for any errors
2. Verify the repository is public (GitHub Pages requires public repos for free accounts)
3. Try accessing the site in an incognito/private window
4. Clear browser cache

---

**Next Step**: Enable GitHub Pages in repository Settings → Pages



