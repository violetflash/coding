"""
Напишите программу, которая считывает целое число и выводит текст, аналогичный приведенному
в примере (пробелы важны!).
The next number for the number 1534 is 1535.
The previous number for the number 1534 is 1533.
"""
n = int(input())
print("The next number for the number ", n, " is ", n + 1, ".", sep="")
print("The previous number for the number ", n, " is ", n - 1, ".", sep="")

