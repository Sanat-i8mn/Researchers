@echo off
echo ========================================
echo   Researchers Platform - Git Push
echo ========================================
echo.

REM Check if git is initialized
if not exist .git (
    echo Initializing Git repository...
    git init
    echo.
)

REM Add remote if not exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo Adding remote repository...
    git remote add origin https://github.com/Sanat-i8mn/Researchers.git
    echo.
)

REM Show current branch
echo Current branch:
git branch --show-current
echo.

REM Add all files
echo Adding all files...
git add .
echo.

REM Commit
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Updated code with new features

echo Committing changes...
git commit -m "%commit_msg%"
echo.

REM Ask for branch
set /p branch="Enter branch name (default: r98): "
if "%branch%"=="" set branch=r98

REM Push to GitHub
echo Pushing to GitHub branch: %branch%
git push -u origin %branch%

if errorlevel 1 (
    echo.
    echo Push failed! Trying force push...
    set /p force="Do you want to force push? (y/n): "
    if /i "%force%"=="y" (
        git push -u origin %branch% --force
    )
)

echo.
echo ========================================
echo   Push Complete!
echo ========================================
echo.
echo Next Steps:
echo 1. Go to https://dashboard.render.com
echo 2. Follow DEPLOYMENT_GUIDE.md for deployment
echo.
pause
