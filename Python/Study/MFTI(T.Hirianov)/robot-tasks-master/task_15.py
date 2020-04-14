#!/usr/bin/python3

from pyrob.api import *


def up_or_down():
    if wall_is_beneath():
        while not wall_is_above():
            move_up()
    else:
        while not wall_is_beneath():
            move_down()

@task
def task_8_21():
    if not wall_is_on_the_right():
        while not wall_is_on_the_right():
            move_right()
        up_or_down()
    elif not wall_is_on_the_left():
        while not wall_is_on_the_left():
            move_left()
        up_or_down()


if __name__ == '__main__':
    run_tasks()
