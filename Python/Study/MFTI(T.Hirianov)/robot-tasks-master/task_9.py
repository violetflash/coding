#!/usr/bin/python3

from pyrob.api import *


def fill():
    if not wall_is_above():
        fill_cell()


@task
def task_8_2():
    fill()
    while not wall_is_on_the_right():
        move_right()
        fill()




if __name__ == '__main__':
    run_tasks()
