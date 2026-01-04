from sqlalchemy.orm import Session
import models

def get_all_snakes(db: Session):
    return db.query(models.Snake).all()

def get_snake_by_id(db: Session, snake_id: str):
    return (
        db.query(models.Snake, models.SnakeDetails)
        .join(models.SnakeDetails)
        .filter(models.Snake.id == snake_id)
        .first()
    )