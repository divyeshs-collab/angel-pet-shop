Write-Host "Initializing Git and pushing Angel Pet Shop to GitHub..." -ForegroundColor Cyan

# Set Git user identity if not configured
git config user.name "ghshiva"
git config user.email "ghshiva@example.com"

# Stage all files
git add -A

# Commit
git commit -m "Build minimalist authentic fullstack website for Angel Pet Shop Ghatkopar with WhatsApp cart and light e-commerce layout"

# Push to origin main
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nSuccessfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "`nDeploying to Vercel..." -ForegroundColor Cyan
    npx vercel --prod --yes
} else {
    Write-Host "`nPush encountered an issue. Check your git credentials and network connection." -ForegroundColor Yellow
    Write-Host "`nIf 'gh' is not installed or not logged in, you can create a repo on https://github.com/new and run:" -ForegroundColor Yellow
    Write-Host "git remote add origin https://github.com/<your-username>/angel-pet-shop.git"
    Write-Host "git push -u origin main"
}
pause
