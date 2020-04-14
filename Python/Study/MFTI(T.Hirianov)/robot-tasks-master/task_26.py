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
    move_right(2)


@task(delay=0.02)
def task_2_4():
    make_cross()
    while not wall_is_beneath():
        while not wall_is_on_the_right():
            move_right(2)
            make_cross()
        else:
            while not wall_is_on_the_left():
                move_left()
        move_down(2)
        if wall_is_beneath():
            move_up(2)
            break
        else:
            move_down(2)
            make_cross()



if __name__ == '__main__':
    run_tasks()
