#!/usr/bin/python3

from pyrob.api import *


def fill():
    if not wall_is_above():
        while not wall_is_above():
            move_up()
            fill_cell()
        while not wall_is_beneath():
            move_down()


@task(delay=0.05)
def task_6_6():
    move_right()
    fill()
    while not wall_is_on_the_right():
        move_right()
        fill()
    while wall_is_beneath():
        move_left()


if __name__ == '__main__':
    run_tasks()
