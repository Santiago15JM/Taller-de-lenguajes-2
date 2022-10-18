# Ej
print("Hello World")

# Ej
x = 35e3
y = 12E4
z = -87.7e100

print(type(x))
print(type(y))
print(type(z))

# Formatear un texto
age = 36
txt = "My name is John, and I am {}"
print(txt.format(age))

# EJ
tuple1 = ("abc", 34, True, 40, "male")

# Desempacar una tupla
fruits = ("apple", "banana", "cherry")

(green, yellow, red) = fruits

print(green)
print(yellow)
print(red)

# Unir dos sets de tipos distintos
set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}

set3 = set1.union(set2)
print(set3)

# Diccionario de varios tipos
thisdict = {
  "brand": "Ford",
  "electric": False,
  "year": 1964,
  "colors": ["red", "white", "blue"]
}
# Cambiar un valor en el diccionario
thisdict["year"] = 2018 # ó
thisdict.update({"year": 2020})

# Loop en un diccionario
for x, y in thisdict.items():
  print(x, y)

# If
a = 200
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
else:
  print("a is greater than b")

# If corto
print("A") if a > b else print("B")

# Funcion
def my_function(fname, lname):
  print(fname + " " + lname)

my_function("Emil", "Refsnes")

# Funcion con argumentos arbitrarios
def my_function(*kids):
  print("The youngest child is " + kids[2])

my_function("Emil", "Tobias", "Linus")

# Lambda
x = lambda a, b : a * b
print(x(5, 6))

# Clases
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("John", 36)

print(p1.name)
print(p1.age)

# Herencia
class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

class Student(Person):
  pass # Para no agregar nada nuevo a la clase

# Iterables
mytuple = ("apple", "banana", "cherry")
myit = iter(mytuple)

print(next(myit))
print(next(myit))
print(next(myit))

# Fechas
import datetime

x = datetime.datetime.now()

print(x.year)
print(x.strftime("%A"))

# Cargar JSON
import json

x =  '{ "name":"John", "age":30, "city":"New York"}'
y = json.loads(x)

print(y["age"]) # the result is a Python dictionary:

# Convertir a JSON
import json

x = {
  "name": "John",
  "age": 30,
  "city": "New York"
}

y = json.dumps(x)
print(y) # the result is a JSON string:

# Regex
import re

txt = "The rain in Spain"
x = re.search("^The.*Spain$", txt)
print(x)

# Entrada 
username = input("Ingresa usuario:")
print("Usuario: " + username)

# Texto con formato
price = 49
txt = "The price is {} dollars"
print(txt.format(price))