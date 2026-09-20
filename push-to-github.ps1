Write-Host "🐾 Initializing Git and pushing Angel Pet Shop to GitHub..." -ForegroundColor Cyan

git init
git branch -M main
git add .
git commit -m "Initial commit: Angel Pet Shop modern landing website"

Write-Host "Creating public GitHub repository 'angel-pet-shop' via GitHub CLI..." -ForegroundColor Yellow
gh repo create angel-pet-shop --public --source=. --remote=origin --push

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "`nDeploying to Vercel..." -ForegroundColor Cyan
    npx vercel --prod --yes
} else {
    Write-Host "`nIf 'gh' is not installed or not logged in, you can create a repo on https://github.com/new and run:" -ForegroundColor Yellow
    Write-Host "git remote add origin https://github.com/<your-username>/angel-pet-shop.git"
    Write-Host "git push -u origin main"
}
pause
