#!/usr/bin/python3

from pyrob.api import *


@task(delay=0.05)
def task_4_11():
    move_right()
    move_down()
    n = 0
    while not wall_is_beneath():
        n += 1
        for _ in range(n):
            fill_cell()
            move_right()
        for _ in range(n):
            move_left()
        move_down()
    # move_down()
    # move_right()
    # fill_cell()
    # move_down()
    # n = 2
    # for i in range(12):
    #     for i in range(n):
    #         fill_cell()
    #         move_right()
    #     move_left(n)
    #     move_down()
    #     n += 1



if __name__ == '__main__':
    run_tasks()
