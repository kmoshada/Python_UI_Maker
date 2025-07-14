from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import projects, export

app = FastAPI()
app.add_middleware(
    CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"]
)

app.include_router(projects.router)
app.include_router(export.router)

@app.get("/")
def root():
    return {"message": "Backend is running!"}