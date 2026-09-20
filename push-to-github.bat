@echo off
echo ====================================================
echo Pushing Angel Pet Shop to GitHub and Deploying to Vercel
echo ====================================================
cd /d "%~dp0"

git init
git branch -M main
git add .
git commit -m "Initial commit: Angel Pet Shop modern landing website"

echo Creating public GitHub repository 'angel-pet-shop' via GitHub CLI...
gh repo create angel-pet-shop --public --source=. --remote=origin --push

echo.
echo Deploying to Vercel...
call npx vercel --prod --yes

pause
