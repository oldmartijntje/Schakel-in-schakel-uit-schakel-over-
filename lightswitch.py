import tkinter as tk
def aanUit():
    global lichtAanOfUit
    if lichtAanOfUit == True:
        lichtAanOfUit = False
        print("light is off")
        button["text"] = "Switch Light On"
    elif lichtAanOfUit == False:
        lichtAanOfUit = True
        print("light is on")
        button["text"] = "Switch Light Off"
    

window = tk.Tk()
button = tk.Button(text='Switch Light Off', bg="white", fg="black", command=aanUit)
button.pack(pady = 20, padx = 20)

# schijf hier tussen je code
lichtAanOfUit = True
# schijf hier tussen je code

window.mainloop()