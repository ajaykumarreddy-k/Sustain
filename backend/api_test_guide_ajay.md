# 📡 Sustain API Testing Guide (cURL)

Use these commands to test your backend directly from the terminal. Ensure your server is running at `http://localhost:8000`.

---

## 🟢 1. Health & Discovery

### Check API Status
```bash
curl -X GET http://localhost:8000/health | jq .
```

### View Swagger Documentation
Open this in your browser: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🔐 2. Authentication

> [!WARNING]
> **Registration Required**: You must run the **Register** command at least once before you can **Login**. If you try to login with a non-existent email, the API will return `{"detail":"Invalid email or password"}`.

### Register a New Account
```bash
curl -X POST http://localhost:8000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Ajay Test",
       "email": "ajay@example.com",
       "password": "password123",
       "role": "donor"
     }' | jq .
```

### Login (Get Access Token)
> [!TIP]
> **Save the Token**: After running this, copy the `"access_token"` from the response to use in protected requests.
```bash
curl -X POST http://localhost:8000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{
       "email": "ajay@example.com",
       "password": "password123"
     }' | jq .
```

---

## 🍎 3. Food Donations

### List Nearby Food (Public)
```bash
curl -X GET "http://localhost:8000/api/foods?lat=13.0475&lng=80.2086&radiusKm=10" | jq .
```

### Add a New Food Listing (Protected)
> [!IMPORTANT]
> Replace `<YOUR_TOKEN>` with the token received from the Login step.
```bash
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

## 📍 4. Geocoding

### Search for a Location
```bash
curl -X GET "http://localhost:8000/api/geocoding/search?q=Adyar&limit=5" | jq .
```

---

## 🛠️ Testing Tip
If you have `jq` installed, pipe the output to it (as shown above) to see beautifully formatted JSON. If not, just remove `| jq .` from the commands.
