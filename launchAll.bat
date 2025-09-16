@echo off
echo Starting app servers.
:: backend

start "backend" cmd /k "cd ./backend/webshop.api && dotnet run"

:: frontend 
start "frontend" cmd /k "cd ./frontend && npm install && npm run dev"

:: database on docker
start "database" cmd /k "docker compose up"

echo All servers launched.

pause