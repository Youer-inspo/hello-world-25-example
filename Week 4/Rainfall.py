import tkinter as tk
import random
from PIL import Image, ImageDraw, ImageTk

if not hasattr(Image, "Resampling"):  # Pillow<9.0
    Image.Resampling = Image

# Create a tkinter window
app = tk.Tk()
app.geometry("600x600")
app.title("Rainfall")

# Create a canvas
canvas = tk.Canvas(app, bg="white")
canvas.pack(fill=tk.BOTH, expand=1)
myImage = Image.new(
    "RGB",
    (600, 600),
    color="white",
)
# next create a drawing context
drawingContext = ImageDraw.Draw(
    myImage, "RGBA"
)  # specify that you will use the alpha channel

# decorative line pattern
def drawDecorativePattern():
    for i in range(50):
        x1 = i * 15
        y1 = 0
        x2 = i * 15
        y2 = random.randint(0,600)
        canvas.create_line(x1, y1, x2, y2, fill="blue")
        
        # Add circles as embellishments
        radius = random.randint(5, 20)
        x = x1 + random.randint(0, 10)
        y = random.randint(50, 600)
        canvas.create_oval(
            x - radius, y - radius, x + radius, y + radius,
            outline="red", width=2
        )

# Call the function to draw the decorative pattern
drawDecorativePattern()

# Resize the image using LANCZOS resampling
myImage = myImage.resize((600, 600), Image.LANCZOS)

# Option to save your image to a file
myImage.save("Rainfall.png", bitmap_format="png")

# Convert the image to a Tkinter PhotoImage
myImage = ImageTk.PhotoImage(myImage)
canvas.create_image(600, 600, image=myImage, anchor="nw")

app.mainloop()