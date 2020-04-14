"""
Оксана отмечает время, прошедшее с начала поездки, и скорость, с которой они едут в это время
требуется получить общее преодолённое расстояние.
например:
odometer(20,2,30,6,10,7) = 170
"""
r = [20, 2, 30, 6, 10, 7]


def odometer(x):
    # инициализация нужных переменных
    dist = 0
    speed = []
    temp_hours = []
    # сохраняем первую запись времени
    hours = [r[1]]
    # кидаем время в отдельный список
    for i in range(1, len(x), 2):
        temp_hours.append(x[i])
    # Получаем разницу каждого следующего элемента и предыдущего и делаем из этого новый список.
    for i in range(1, len(temp_hours)):
        hours.append(temp_hours[i] - temp_hours[i-1])
    # кидаем скорость в отдельный список
    for i in range(0, len(x), 2):
        speed.append(x[i])
    # Поэлементно перемножаем два списка, получаем итоговое расстояние
    for i in range(len(speed)):
        dist += hours[i] * speed[i]
    return dist


print(odometer(r))
