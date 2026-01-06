from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
import crud

router = APIRouter(prefix="/snakes", tags=["Snakes"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/")
def list_snakes(db: Session = Depends(get_db)):
    return crud.get_all_snakes(db)


@router.get("/{snake_id}")
def get_snake(snake_id: str, db: Session = Depends(get_db)):
    result = crud.get_snake_by_id(db, snake_id)
    if not result:
        raise HTTPException(status_code=404, detail="Snake not found")

    snake, details = result
    return {
        "id": snake.id,
        "common_name": snake.common_name,
        "scientific_name": snake.scientific_name,
        "venom_status": snake.venom_status,
        "danger_level": snake.danger_level,
        "image": snake.image,
        "header_image": snake.header_image,
        "data": details.data
    }
