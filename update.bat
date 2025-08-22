@echo off
set /p msg=Enter commit message: 

git add .
git commit -m "%msg%"
git push origin main

echo 🔨 Building and deploying site...
npm run build
npm run deploy

echo ✅ Site updated and deployed successfully!
pause
