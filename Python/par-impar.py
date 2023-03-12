# Dado un número entero, realiza las siguientes acciones condicionales:

# Si N es impar, imprima Weird
# Si N es par y está en el rango inclusivo de 2 a 5, imprima No raro
# Si N es par y está en el rango inclusivo de 6 a 20, imprime Raro
# Si N es par y mayor que 20, imprima No extraño

n = int(input("Ingresa un numero entero: "))

if (n % 2 != 0) or (n % 2 == 0 and (n >= 6 and n <= 20)):
    print("Weird")
elif (n % 2 == 0 and (n >= 2 and n <= 5)) or (n % 2 == 0 and n > 20):
    print("No Weird")