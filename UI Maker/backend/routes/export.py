from fastapi import APIRouter
from generators.kivy_gen import generate_kivy_code
from pydantic import BaseModel
from typing import List

router = APIRouter()

class Component(BaseModel):
    type: str
    props: dict

def hex_to_rgba(hex_color):
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) / 255.0 for i in (0, 2, 4)) + (1.0,)

@router.post("/generate/kivy")
def export_kivy(components: List[Component]):
    for component in components:
        if component.type == "Rectangle" and "color" in component.props:
            component.props["color"] = hex_to_rgba(component.props["color"])
    code = generate_kivy_code(components)
    return {"code": code}