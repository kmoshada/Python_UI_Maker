from jinja2 import Template

def generate_kivy_code(components):
    template_str = open("templates/kivy_main.py", "r").read()
    template = Template(template_str)
    return template.render(components=components)