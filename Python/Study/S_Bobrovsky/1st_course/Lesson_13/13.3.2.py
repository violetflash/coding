"""
13.3.2. Введите с клавиатуры две строки, сравните их и выведите либо индекс первого символа,
с которого начинается неравенство (с учётом того, что длины строк могут различаться), либо EQUALS.
"""

s1 = input('Введите первую строку: ')
s2 = input('Введите вторую строку: ')

if s1 == s2:
    print('EQUALS')
# Дополняем меньшую строку пробелами
elif len(s1) > len(s2):
    s2 += (len(s1) - len(s2)) * " "
else:
    s1 += (len(s2) - len(s1)) * " "
# Сравниваем поиндексно
for i in range(len(s1)):
    if s1[i] != s2[i]:
        print(f'{i} - индекс, с которого начинается неравенство этих строк.')
        break












