# Un bazar ofrece prendas de vestir con descuentos según lo siguiente:

# - 1 a 2 prendas 0% de descuento.

# - Mayor a 2 y <= 5 prendas 10% de descuento.

# - Mayor a 5 y <= 10 prendas 15% de descuento.

# - Mayor a 10 prendas 20% de descuento.

# Determina cuanto es el monto del descuento y cuanto pagará el total.

def calcularDescuento (total, cantidadPrendas):
  if cantidadPrendas <= 2:
    print('No tienes descuento:')
    print(f'Tu total a pagar es: {total}')
  
  elif cantidadPrendas > 2 and cantidadPrendas <= 5:
    descuento = round(total * (10 / 100), 2)
    totalPagar = total - descuento
    print('Tienes un 10% de descuento:')
    print(f'Descuento: {descuento}')
    print(f'Total a pagar: {totalPagar}')
  
  elif cantidadPrendas > 5 and cantidadPrendas <= 10:
    descuento = round(total * (15 / 100), 2)
    totalPagar = total - descuento
    print('Tienes un 15% de descuento:')
    print(f'Descuento: {descuento}')
    print(f'Total a pagar: {totalPagar}')
  
  elif cantidadPrendas > 10:
    descuento = round(total * (20 / 100), 2)
    totalPagar = total - descuento
    print('Tienes un 20% de descuento:')
    print(f'Descuento: {descuento}')
    print(f'Total a pagar: {totalPagar}')

total = int(input('Introduce el total actual: '))
prendas = int(input('Introduce el numero de prendas: '))

calcularDescuento(total, prendas)