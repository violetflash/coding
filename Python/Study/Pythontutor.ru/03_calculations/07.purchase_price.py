"""
Пирожок в столовой стоит a рублей и b копеек. Определите, сколько рублей и копеек нужно
заплатить за n пирожков. Программа получает на вход три числа: a, b, n, и должна вывести
два числа: стоимость покупки в рублях и копейках.
"""
a = int(input())
b = int(input())
n = int(input())
penny_price = a * 100 + b
final_penny_sum = n * penny_price
print(final_penny_sum // 100)
print(final_penny_sum % 100)