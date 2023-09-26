# Una empresa constructora ofrece departamentos, bajo las siguientes condiciones:

# - Si los ingresos del comprador son menores o iguales a $5000 mensuales el iniciar será 10% del costo de la casa y el resto se ditrubuira en pagos mensuales a pagar en 10 años.

# - Si los ingrsos del comprador es mayor a $5000 entonces el inicial será el 25% del costo de la casa y el resto se distribuirá en pagos mensuales a pagar en 7 años.

# La empresa quiere saber cuanto debe pagar un compreador por concepto de Inicial y cuanto será el pago mensual.

def calcularPagos (precioDepartamento, ingresosComprador):
  pagoInicial = 0
  resto = 0
  pagoMensual = 0
  
  if (ingresosComprador <= 5000):
    pagoInicial = round(precioDepartamento * (10 / 100), 2)
    resto = precioDepartamento - pagoInicial
    pagoMensual = round(resto / 10, 2)

  else:
    pagoInicial = round(precioDepartamento * (25 / 100), 2)
    resto = precioDepartamento - pagoInicial
    pagoMensual = round(resto / 7, 2)

  print(f'PAGO INICAIL: {pagoInicial}')
  print(f'PAGO MENSUAL: {pagoMensual}')

precioDepartamento = int(input('Introduce el presio del departamento: '))
ingresosComprador = int(input('Introduce los ingresos del comprador: ')
)
calcularPagos(precioDepartamento, ingresosComprador)