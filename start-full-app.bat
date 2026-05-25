@echo off
echo Starting VelocTech Inc Full Application...
echo.
echo Starting Backend (Python FastAPI) on port 8000...
start "Villi AI Backend" cmd /k "cd /d "%~dp0\..\backend" && python -m venv venv && call venv\Scripts\activate && pip install -r requirements.txt && python main.py"

timeout /t 5

echo.
echo Starting Frontend (Next.js) on port 3050...
start "VelocTech Portfolio" cmd /k "cd /d "%~dp0" && npm run dev"

echo.
echo ========================================
echo VelocTech Inc is starting up!
echo ========================================
echo Backend (Villi AI): http://localhost:8000
echo Frontend (Portfolio): http://localhost:3050
echo ========================================
echo.
echo Press any key to exit this window (servers will continue running in separate windows)
pause >nul



