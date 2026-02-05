@echo off
echo ========================================
echo   PUSH TO GITHUB
echo ========================================
echo.

set /p repo_url="Enter your GitHub repo URL: "

echo.
echo Adding remote...
git remote add origin %repo_url%

echo.
echo Pushing to GitHub...
git branch -M main
git push -u origin main

echo.
echo ========================================
echo   PUSHED TO GITHUB!
echo ========================================
echo.
echo Now go to Render.com and deploy!
echo.
pause
