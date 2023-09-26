# Una empresa debe depositar a una cuenta bancaria un porcentaje del salario de los trabajadores, CTS.

# Un trabajador que ha decidido aportar a su cuenta desea saber la cantidad que recibirá, se sabe que:

# - Aporta un 9% de su sueldo a su pago mensual.

# - Aporta el 11% de su pago mensual por concepto de seguro.

# Obtener, el monto de cada aporte y el salario que recibirá dicho trabajador.

def obtenerMontos(salario):
  pagoMensual = round(salario * (9 /100), 2)
  pagoSeguro = round(salario * (11 / 100), 2)
  salarioFinal = salario - (pagoMensual + pagoSeguro)

  print(f'Salario Inicial: ${salario}')
  print(f'Pago mensual (9%): ${pagoMensual}')
  print(f'Pago de seguro (11%): ${pagoSeguro}')
  print(f'Salario final: ${salarioFinal}')


salario = int(input('Introdusca su salario inicial: '))

obtenerMontos(salario)