import tkinter as tk
def aanUit():
    global lichtAanOfUit
    if lichtAanOfUit == True:
        lichtAanOfUit = False
    elif lichtAanOfUit == False:
        lichtAanOfUit = True
    print(lichtAanOfUit)

window = tk.Tk()
button = tk.Button(text='lichtknopje', bg="white", fg="black", command=aanUit)
button.pack(pady = 20, padx = 20)

# schijf hier tussen je code
lichtAanOfUit = True
greeting = tk.Label(text="text")
greeting.pack()
print("no")
# schijf hier tussen je code

window.mainloop()