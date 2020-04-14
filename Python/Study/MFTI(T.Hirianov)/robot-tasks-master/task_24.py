#!/usr/bin/python3

from pyrob.api import *


def make_cross():
    move_right()
    fill_cell()
    move_down()
    fill_cell()
    move_right()
    fill_cell()
    move_left()
    move_down()
    fill_cell()
    move_up()
    move_left()
    fill_cell()
    move_up()


@task
def task_2_1():
    move_right()
    move_down()
    make_cross()

if __name__ == '__main__':
    run_tasks()
