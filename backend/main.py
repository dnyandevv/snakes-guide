from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import snakes

app = FastAPI(title="Snake Info API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],  # Vite's default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(snakes.router)
