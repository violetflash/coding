#!/usr/bin/python3

from pyrob.api import *


@task
def task_7_5():
    move_right()
    fill_cell()
    move_right()
    fill_cell()
    e = 2
    while not wall_is_on_the_right():
        fill_cell()
        for i in range(e):
            move_right()
            if wall_is_on_the_right():
                break
        e += 1


if __name__ == '__main__':
    run_tasks()
