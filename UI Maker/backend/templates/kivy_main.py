from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivymd.uix.button import MDRaisedButton
from kivymd.uix.textfield import MDTextField
from kivymd.uix.label import MDLabel
from kivy.graphics import Color, Rectangle

class MainApp(App):
    def build(self):
        layout = BoxLayout(orientation='vertical')
        {% for comp in components %}
        {% if comp.type == "TextField" %}
        layout.add_widget(MDTextField(hint_text="{{ comp.props.label }}"))
        {% elif comp.type == "Button" %}
        layout.add_widget(MDRaisedButton(text="{{ comp.props.label }}"))
        {% elif comp.type == "Label" %}
        layout.add_widget(MDLabel(text="{{ comp.props.text }}"))
        {% elif comp.type == "Rectangle" %}
        BoxLayout:
            size_hint: None, None
            size: {{ comp.props.width }}, {{ comp.props.height }}
            canvas:
                Color:
                    rgba: {{ comp.props.color }}
                Rectangle:
                    size: self.size
                    pos: self.pos
        {% endif %}
        {% endfor %}
        return layout

MainApp().run()