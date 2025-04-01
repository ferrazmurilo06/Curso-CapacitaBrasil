pi = 3.14
raio = float(input("digite um raio: "))

base = float(input('digite uma base: '))
altura = float(input('digite uma altura: '))

#calcular área do círculo
def área_círculo(pi, raio):
    return pi*raio*2

def área_triângulo(base, altura):
    return (base*altura)/2

print('Área do círculo: ', {área_círculo(pi, raio)})
print("Área do triângulo: ", {área_triângulo(base, altura)})