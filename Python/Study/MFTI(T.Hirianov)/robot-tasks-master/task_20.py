#!/usr/bin/python3

from pyrob.api import *


def fill():
    move_down()
    if not wall_is_beneath():
        move_up()
        return True
    else:
        move_up()
        return False


def fill_row():
    while not wall_is_on_the_right():
        fill()
        move_right()
    while not wall_is_on_the_left():
        move_left()


@task(delay=0.05)
def task_4_3():
    move_right()
    while fill_row():
        fill()
        move_down()
    # for i in range(6):
    #     for j in range(27):
    #         move_right()
    #         fill_cell()
    #     move_down()
    #     for k in range(27):
    #         fill_cell()
    #         move_left()
    #     move_down()
    # move_right()


if __name__ == '__main__':
    run_tasks()
