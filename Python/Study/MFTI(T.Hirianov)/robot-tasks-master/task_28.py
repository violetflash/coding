#!/usr/bin/python3

from pyrob.api import *

# число_закрашенных := 0
# цикл пока справа_нет_стены выполнять
#     если клетка_закрашена то
#         число_закрашенных.увеличить на 1
#     конец если
#     если число_закрашенных = 5 то
#         выход из цикла
#     конец если
# конец цикла


@task
def task_7_6():
    n = 0
    while not wall_is_on_the_right():
        move_right()
        if cell_is_filled():
            n += 1
        if n == 5:
            break


    # n = 0
    # while n != 5:
    #     move_right()
    #     if cell_is_filled():
    #         n += 1


if __name__ == '__main__':
    run_tasks()
