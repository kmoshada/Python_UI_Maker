from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Dict

router = APIRouter()

projects_db = {}  # In-memory demo

class Component(BaseModel):
    type: str
    props: dict

class Project(BaseModel):
    id: str
    name: str
    components: List[Component]

@router.post("/save")
def save_project(project: Project):
    projects_db[project.id] = project
    return {"status": "saved"}

@router.get("/load/{project_id}")
def load_project(project_id: str):
    return projects_db.get(project_id, {})