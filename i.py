

def salama_status(location):
    location = location.strip().lower()

    if location != "egypt":
        return "⚠️ سلامة خرج من مصر يا جدعان! الواد سابنا وسافر، بعتوله: 'يا عم فين الغيبة؟ نسيت العِشرة ولا بتدور على عروسة برّه؟' 🤠✈️"
    else:
        return "😂😂 سلامة في مصر، متقلقوش... غالبًا بيأكل كشري أو قرفان من نفسه. 🇪🇬" 
print(salama_status("moscow"))



