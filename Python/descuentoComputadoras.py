# Un proveedo de computadoras ofrese un descuento del 15% sobre el precio con IGV, de alguna computadora si esta cuesta $2000 o más, además, ofrece un 5% de descuento si la marca es 'Lenovo'. Determina cuanto pagará con IGV incluido un cliente cualquiera por la compra de su aparato.
# ? IGV impuesto del 18%

precio = 1000
igv = round(precio * (18 / 100), 2)
precioIGV = precio + igv
marca = 'lenovo'
descuento = 0
totalPagar = 0

if precio > 2000 and marca.lower() == 'lenovo':
  print(f'Total inicial: {precioIGV}')
  descuento = round(precioIGV * (20 / 100), 2)
  print(f'Tienes un descuento del 20%: ${descuento}')
  totalPagar = precioIGV - descuento
  print(f'Total a pagar: ${totalPagar}')

elif precio > 2000 and marca.lower() != 'lenovo':
  print(f'Total inicial: {precioIGV}')
  descuento = round(precioIGV * (15 / 100), 2)
  print(f'Tienes un descuento del 15%: ${descuento}')
  totalPagar = precioIGV - descuento
  print(f'Total a pagar: ${totalPagar}')

elif precio <= 2000 and marca.lower() == 'lenovo':
  print(f'Total inicial: {precioIGV}')
  descuento = round(precioIGV * (5 / 100), 2)
  print(f'Tienes un descuento del 5%: ${descuento}')
  totalPagar = precioIGV - descuento
  print(f'Total a pagar: ${totalPagar}')

else:
  print('No tienes descuento')
  print(f'Total a pagar: {precioIGV}')