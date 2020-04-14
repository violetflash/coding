#!/usr/bin/python3

from pyrob.api import *


@task(delay=0.01)
def task_9_3():
    while not wall_is_on_the_left() and wall_is_beneath():
        move_right()


if __name__ == '__main__':
    run_tasks()
