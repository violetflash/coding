#!/usr/bin/python3

from pyrob.api import *


def fill():
    if not wall_is_above() and wall_is_beneath():
        fill_cell()


@task
def task_8_6():
    fill()
    while not wall_is_on_the_right():
        move_right()
        fill()





if __name__ == '__main__':
    run_tasks()
