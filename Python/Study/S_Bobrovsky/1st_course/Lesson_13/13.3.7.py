"""
13.3.7. Напишите программу, которая выделяет из строки подстроку -- начиная с заданной позиции и
заданной длины, и формирует из неё отдельную строку.
"""
s = input("Введите строку: ")
x = int(input("Введите позицию начала выделения подстроки: "))
y = int(input("Введите длину выделенной подстроки: "))
print(f"Результат: {s[x-1:x+y-1]}")



