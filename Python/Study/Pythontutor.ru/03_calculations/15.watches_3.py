"""
С начала суток часовая стрелка повернулась на угол в α градусов. Определите сколько полных часов,
минут и секунд прошло с начала суток, то есть решите задачу, обратную задаче «Часы - 1».
Запишите ответ в три переменные и выведите их на экран.
"""
a = float(input())
hours = (12 * a) / 360
print(int(hours))
minutes = (hours - int(hours)) * 60
print(int(minutes))
sec = (minutes - int(minutes)) * 60
print(int(sec))

