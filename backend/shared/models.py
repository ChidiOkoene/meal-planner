from sqlalchemy import Column, String, JSON
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Recipe(Base):
    __tablename__ = 'recipes'
    id = Column(String, primary_key=True)
    name = Column(String(100), nullable=False)
    ingredients = Column(JSON)
    nutrients = Column(JSON)
    country = Column(String(50))