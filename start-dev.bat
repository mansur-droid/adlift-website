@echo off
echo Checking package.json...
if not exist package.json (
  echo ERROR: package.json is missing. You are in the wrong folder.
  echo Open the folder that contains package.json, app, and components.
  pause
  exit /b 1
)
echo package.json found.
echo Available npm scripts:
npm run
echo Installing dependencies...
npm install
echo Starting Next.js...
npm run dev
pause
