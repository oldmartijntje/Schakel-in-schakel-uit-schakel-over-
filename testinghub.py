
# import everything from tkinter module
import tkinter as tk  
# create a tkinter window
root = tk.Tk()             
 
# Open window having dimension 100x100
root.geometry('100x100')

# Create a Button
btn = tk.Button(root, text = 'Click me !', bd = '5',
                          command = root.destroy)
 
# Set the position of button on the top of window.  
btn.pack(side = 'top')   
 
root.mainloop()