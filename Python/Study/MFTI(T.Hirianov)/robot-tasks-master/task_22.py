#!/usr/bin/python3

from pyrob.api import *


def fill_right():
    while not wall_is_on_the_right():
        move_right()
        fill_cell()


def fill_left():
    while not wall_is_on_the_left():
        fill_cell()
        move_left()
        fill_cell()


@task
def task_5_10():
    fill_cell()
    while not wall_is_beneath() and wall_is_on_the_left():
        fill_right()
        move_down()
        fill_left()



if __name__ == '__main__':
    run_tasks()
