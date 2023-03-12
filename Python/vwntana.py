import tkinter
from tkinter import ttk
window = tkinter.Tk()
window.geometry('400x300')

etiqueta1 = tkinter.Label(window, text='Lista de Mercado', background='white')
etiqueta1.grid(column=1, row=0, pady=5, padx=5)

                          #Variables de deposito
s1 = tkinter.StringVar()
s2 = tkinter.StringVar()
s3 = tkinter.StringVar()
s4 = tkinter.StringVar()
s5 = tkinter.StringVar()
s6 = tkinter.StringVar()
s7 = tkinter.StringVar()
s8 = tkinter.StringVar()
s9 = tkinter.StringVar()
s10 = tkinter.StringVar()
s11 = tkinter.StringVar()
s12 = tkinter.StringVar()


b1 = tkinter.Radiobutton(window, text='Queso', value=1, variable=s1)
b2 = tkinter.Radiobutton(window, text='Carne', value=2, variable=s2)
b3 = tkinter.Radiobutton(window, text='Leche', value=3, variable=s3)
b4 = tkinter.Radiobutton(window, text='Huevos', value=4, variable=s4)
b5 = tkinter.Radiobutton(window, text='Aguacate', value=5, variable=s5)
b6 = tkinter.Radiobutton(window, text='Arroz', value=6, variable=s6)
b7 = tkinter.Radiobutton(window, text='Mantequilla', value=7, variable=s7)
b8 = tkinter.Radiobutton(window, text='salsa', value=8, variable=s8)
b9 = tkinter.Radiobutton(window, text='Te verde', value=9, variable=s9)
b10 = tkinter.Radiobutton(window, text='Tomate', value=10, variable=s10)
b11 = tkinter.Radiobutton(window, text='Pimenton', value=11, variable=s11)
b12 = tkinter.Radiobutton(window, text='Cebolla', value=12, variable=s12)
                           #Los Grid

b1.grid(column=0, row=1, pady=5, padx=5)
b2.grid(column=0, row=2, pady=5, padx=5)
b3.grid(column=0, row=3, pady=5, padx=5)
b4.grid(column=0, row=4, pady=5, padx=5)
b5.grid(column=1, row=1, pady=5, padx=5)
b6.grid(column=1, row=2, pady=5, padx=5)
b7.grid(column=1, row=3, pady=5, padx=5)
b8.grid(column=1, row=4, pady=5, padx=5)
b9.grid(column=2, row=1, pady=5, padx=5)
b10.grid(column=2, row=2, pady=5, padx=5)
b11.grid(column=2, row=3, pady=5, padx=5)
b12.grid(column=2, row=4, pady=5, padx=5)

window.mainloop()