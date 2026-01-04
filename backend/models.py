from sqlalchemy import Column, Text, ForeignKey
from sqlalchemy.dialects.postgresql import JSONB
from database import Base

class Snake(Base):
    __tablename__ = "snakes"

    id = Column(Text, primary_key=True, index=True)
    common_name = Column(Text, nullable=False)
    scientific_name = Column(Text, nullable=False)
    venom_status = Column(Text, nullable=False)
    danger_level = Column(Text, nullable=False)
    image = Column(Text)
    header_image = Column(Text)


class SnakeDetails(Base):
    __tablename__ = "snake_details"

    snake_id = Column(
        Text,
        ForeignKey("snakes.id", ondelete="CASCADE"),
        primary_key=True,
    )

    data = Column(JSONB, nullable=False)