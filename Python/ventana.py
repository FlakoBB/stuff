import tkinter

ventana = tkinter.Tk()

ventana.geometry('400x300')

label1 = tkinter.Label(ventana, text="Mercado", bg="red", fg="white")
label1.pack()


ventana.mainloop()