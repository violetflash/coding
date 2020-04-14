#!/usr/bin/python3

from pyrob.api import *


def get_out():
    if not wall_is_above():
        while not wall_is_above():
            move_up()
        while not wall_is_on_the_left():
            move_left()
            break

@task
def task_8_28():
    while not wall_is_on_the_right():
        move_right()
        get_out()
    while not wall_is_on_the_left():
        move_left()
        get_out()


if __name__ == '__main__':
    run_tasks()
