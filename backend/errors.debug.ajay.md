# 🛡️ Backend Debug & Setup Report: Maintain Sustain

![Python Version](https://img.shields.io/badge/python-3.11%20%7C%203.12-blue?style=for-the-badge&logo=python)
![Framework](https://img.shields.io/badge/FastAPI-0.116.1-05998b?style=for-the-badge&logo=fastapi)
![Package Manager](https://img.shields.io/badge/uv-Package%20Manager-ff69b4?style=for-the-badge&logo=python)

This document provides a detailed log of the technical hurdles encountered during the backend setup and the solutions implemented to resolve them.

---

## 🚀 How to Run the Backend

Follow these steps precisely to ensure a clean execution environment:

### 1. Prerequisite: Install Python 3.12
If you haven't already, install a compatible Python version using `uv`:
```bash
uv python install 3.12
```

### 2. Synchronize Dependencies
This will create a virtual environment (`.venv`) and install all required packages:
```bash
uv sync --python 3.12
```

### 3. Initialize Database
Ensure your Supabase connection strings are in `backend/.env`, then run:
```bash
uv run python init_supabase.py
```

### 4. Start the Server
Launch the FastAPI development server:
```bash
uv run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

---

## 🛠️ Technical Debug Log

### 1. Dependency Conflict: TensorFlow vs Python 3.14
> [!IMPORTANT]
> **Issue**: You were running Python 3.14 (`cp314`), but `tensorflow 2.16.1` only provides wheels for `cp311` and `cp312`.
> **Symptom**: `uv sync` failed with: `doesn't have a source distribution or wheel for the current platform`.

**Solution**:
- Modified `pyproject.toml` to restrict the Python version requirement:
  ```toml
  requires-python = ">=3.11,<3.13"
  ```
- Guided the use of `uv python install 3.12` to provide a compatible runtime.

- Updated `pyproject.toml` to mark this as a standalone **application**, not a redistributable package:
  ```toml
  [tool.uv]
  package = false
  ```
- Removed the unnecessary `build-system` section to simplify the configuration.

### 3. Script Error: Missing Environment Variables
> [!CAUTION]
> **Issue**: `init_supabase.py` was trying to read `SUPABASE_DB_URL` directly from the OS environment, but it wasn't loading the `.env` file first.
> **Symptom**: `RuntimeError: Missing SUPABASE_DB_URL environment variable`.

**Solution**:
- Integral `python-dotenv` into `init_supabase.py`.
- Added `from dotenv import load_dotenv` and `load_dotenv()` at the top of the script to ensure all configurations are loaded before execution.

### 4. FastAPI Startup: Environment Isolation
> [!IMPORTANT]
> **Issue**: Similar to the script issue, the FastAPI application was failing to load the service role key during its startup sequence.
> **Symptom**: `fastapi.exceptions.HTTPException: 500: Missing SUPABASE_SERVICE_ROLE_KEY environment variable`.

**Solution**:
- Added `load_dotenv()` to `app/main.py`. This ensures that whenever the server is started via `uvicorn`, the environment is correctly populated before the application's startup events fire.

### 5. Authentication: "Invalid email or password"
> [!NOTE]
> **Issue**: Attempting to log in with new test credentials before creating the account.
> **Symptom**: `{"detail":"Invalid email or password"}` even with standard placeholders.

**Solution**:
- Standardized the testing flow in the documentation to emphasize that `POST /api/auth/register` is a mandatory first step for any new email address.


---

## 5. 📡 Testing API Endpoints

Use these `curl` commands to test your backend directly from your terminal once the server is running.

### 🟢 5.1. Health & Discovery
```bash
# Check API Status
curl -X GET http://localhost:8000/health | jq .

# View Swagger Documentation (Browser)
http://localhost:8000/docs
```

### 🔐 5.2. Authentication
```bash
# Register a New Account
curl -X POST http://localhost:8000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Ajay Test",
       "email": "ajay@example.com",
       "password": "password123",
       "role": "donor"
     }' | jq .

# Login (Returns the TOKEN needed for protected routes)
curl -X POST http://localhost:8000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{
       "email": "ajay@example.com",
       "password": "password123"
     }' | jq .
```

### 🍎 5.3. Food Donations
```bash
# List Nearby Food (Public)
curl -X GET "http://localhost:8000/api/foods?lat=13.0475&lng=80.2086&radiusKm=10" | jq .

# Add a New Food Listing (Protected)
# Replace <YOUR_TOKEN> with the token from the Login step
curl -X POST http://localhost:8000/api/foods \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer <YOUR_TOKEN>" \
     -d '{
       "food_name": "Organic Tomatoes",
       "quantity": 5,
       "lat": 13.0475,
       "lng": 80.2086,
       "description": "Fresh from the garden",
       "category": "vegetables"
     }' | jq .
```

---

## 📁 Files Modified/Added

- **[NEW] [pyproject.toml](file:///home/prince/ProjectsMain/sustain_SEPM_projecet/sameer%20Final%20/Sustain-Food-Donation-App-master/backend/pyproject.toml)**: Added modern `uv` project configuration.
- **[MOD] [backend/.env](file:///home/prince/ProjectsMain/sustain_SEPM_projecet/sameer%20Final%20/Sustain-Food-Donation-App-master/backend/.env)**: Verified connection strings (Supabase & Gemini API).

---

> [!TIP]
> **Observation**: I noticed you encountered an error trying to `source` the activation script because of the space in the folder name `/sameer Final /`. Always wrap paths in double quotes when navigating or sourcing files in this workspace!

---
