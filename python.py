# Ej1
print("Hello World")

# Ej2 
x = 35e3
y = 12E4
z = -87.7e100

print(type(x))
print(type(y))
print(type(z))

# EJ3 Formatear un texto
age = 36
txt = "My name is John, and I am {}"
print(txt.format(age))

# EJ4
tuple1 = ("abc", 34, True, 40, "male")

# EJ5 Desempacar una tupla
fruits = ("apple", "banana", "cherry")

(green, yellow, red) = fruits

print(green)
print(yellow)
print(red)

# EJ6 Unir dos sets de tipos distintos
set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}

set3 = set1.union(set2)
print(set3)

# EJ7 Diccionario de varios tipos
thisdict = {
  "brand": "Ford",
  "electric": False,
  "year": 1964,
  "colors": ["red", "white", "blue"]
}
# Cambiar un valor en el diccionario
thisdict["year"] = 2018 # ó
thisdict.update({"year": 2020})

# EJ8 Loop en un diccionario
for x, y in thisdict.items():
  print(x, y)
