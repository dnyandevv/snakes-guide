from pydantic import BaseModel
from typing import Any

class SnakeBase(BaseModel):

    id: str
    commonName: str
    scientificName: str
    venomStatus: str
    dangerLevel: str
    image: str | None = None
    headerImage: str | None = None

    class Config:
        from_attributes = True

class SnakeDetailsBase(BaseModel):
    data: dict