"""
13.3.6. Напишите программу, которая вводит с клавиатуры две строки, и проверяет,
содержится ли в первой строке вторая строка.
Использовать только циклы и посимвольное сравнение. Без срезов
-----------------------------------------------------------------------------
Самый распространённый (но не самый эффективный), когда сканируете исходную строку,
для каждого её символа стартуете второй цикл — посимвольное сравнение последующих символов
исходной строки с соответствующими символами второй строки.
Если до конца вторая строка проверилась нормально, значит ок, она входит как подстрока,
и дальше можно не искать.
Сразу после завершения второго цикла вам нужно как-то понимать, было ли найдено полное совпадение
прерываете сразу и второй цикл, и потом заканчиваете и основной цикл.
------------------
Ошибка индекса у вас была скорее всего во втором цикле, когда вы выходили за предел размера
основной строки при сравнении соответствующих символов. Надо просто первый цикл сокращать
на длину подстроки.
"""

s1 = input('Введите первую строку: ')
s2 = input('Введите вторую строку: ')
n = 0

for i in range(len(s1)):
    if s1[i] == s2[0]:
        counter = 0
        for k in s2:
            if k == s1[i+counter]:
                counter += 1
                if counter == len(s2):
                    print("Есть совпадение!")
        break

