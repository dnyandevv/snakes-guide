from fastapi import FastAPI
from routers import snakes

app = FastAPI(title="Snake Info API")

app.include_router(snakes.router)
