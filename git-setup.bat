@echo off
echo ========================================
echo   RESEARCHHUB - GIT SETUP
echo ========================================
echo.

echo Step 1: Initializing Git...
git init

echo.
echo Step 2: Adding all files...
git add .

echo.
echo Step 3: Creating first commit...
git commit -m "Production ready - ResearchHub 2.0"

echo.
echo ========================================
echo   GIT SETUP COMPLETE!
echo ========================================
echo.
echo NEXT STEPS:
echo.
echo 1. Create a new repo on GitHub
echo 2. Copy the repo URL
echo 3. Run: git remote add origin YOUR_GITHUB_URL
echo 4. Run: git push -u origin main
echo.
echo OR use git-push-to-github.bat after creating repo
echo.
pause
