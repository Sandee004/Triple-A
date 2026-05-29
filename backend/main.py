import json
import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()
FILE_PATH = "data/reviews.json"

class Review(BaseModel):
    name: str
    location: str
    text: str
    rating: int

def load_reviews():
    if not os.path.exists(FILE_PATH):
        return []
    with open(FILE_PATH, "r") as f:
        return json.load(f)

@app.get("/api/reviews")
def get_reviews():
    return load_reviews()

@app.post("/api/reviews")
def save_review(review: Review):
    reviews = load_reviews()
    reviews.insert(0, review.dict()) # Put latest review first
    
    with open(FILE_PATH, "w") as f:
        json.dump(reviews, f, indent=4)
        
    return {"status": "success", "data": reviews}