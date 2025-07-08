from sqlalchemy import create_engine
from shared.models import Base

DATABASE_URL = "postgresql://mealapp:secret@localhost:5432/mealapp"
engine = create_engine(DATABASE_URL)

def initialize_db():
    print("Creating database schema...")
    Base.metadata.create_all(bind=engine)
    print("Database initialized successfully!")

if __name__ == "__main__":
    initialize_db()