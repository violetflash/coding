"""
Дано трехзначное число. Найдите сумму его цифр.
"""
x = int(input())
summ = x // 100 + x // 10 % 10 + x % 10
print(summ)
