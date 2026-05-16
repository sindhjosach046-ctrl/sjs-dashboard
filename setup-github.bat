@echo off
title SJS Dashboard — GitHub Setup (Fixed)
cd /d "C:\Users\HP\Documents\Claude\Projects\Sinsh Jo Sach\sjs-dashboard"

echo.
echo ============================================================
echo  Step 1: Removing old broken .git folder...
echo ============================================================
if exist ".git" (
    rmdir /s /q ".git"
    echo  Cleaned old .git folder.
) else (
    echo  No old .git found — good.
)

echo.
echo ============================================================
echo  Step 2: Fresh git init...
echo ============================================================
git init
git branch -M main

echo.
echo ============================================================
echo  Step 3: Adding GitHub remote...
echo ============================================================
git remote add origin https://github.com/sindhjosach046-ctrl/sjs-dashboard.git

echo.
echo ============================================================
echo  Step 4: Staging all files...
echo ============================================================
git add .
git status --short

echo.
echo ============================================================
echo  Step 5: First commit...
echo ============================================================
git commit -m "Initial SJS dashboard — carousels, cost analytics, platform info"

echo.
echo ============================================================
echo  Step 6: Pushing to GitHub...
echo  (A browser login window may appear — sign in to GitHub)
echo ============================================================
git push -u origin main

echo.
echo ============================================================
if %ERRORLEVEL% EQU 0 (
    echo  SUCCESS! Dashboard pushed to GitHub.
    echo.
    echo  NOW: Go to this URL and enable GitHub Pages:
    echo  https://github.com/sindhjosach046-ctrl/sjs-dashboard/settings/pages
    echo.
    echo  Set Branch: main / root  then click Save.
    echo.
    echo  Your live dashboard URL will be:
    echo  https://sindhjosach046-ctrl.github.io/sjs-dashboard/
) else (
    echo  Push failed. Check if the repo exists on GitHub:
    echo  https://github.com/sindhjosach046-ctrl/sjs-dashboard
    echo  Make sure it is PUBLIC and EMPTY (no README).
)
echo ============================================================
pause
