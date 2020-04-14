#!/usr/bin/python3

import sys
from pyrob.api import run_tasks

import task_1
import task_2
import task_3
import task_4
import task_5
import task_6
import task_7
import task_8
import task_9
import task_10
import task_11
import task_12
import task_13
import task_14
import task_15
import task_16
import task_17
import task_18
import task_19
import task_20
import task_21
import task_22
import task_23
import task_24
import task_25
import task_26
import task_27
import task_28
import task_29
import task_30
import task_31
import task_32

# move_left(n=1)	Пройти n клеток влево (по умолчанию n = 1)
# move_right(n=1)	Пройти n клеток вправо (по умолчанию n = 1)
# move_up(n=1)	Пройти n клеток вверх (по умолчанию n = 1)
# move_down(n=1)	Пройти n клеток вниз (по умолчанию n = 1)
# wall_is_above()	если сверху стена, возвращает True, иначе — False
# wall_is_beneath()	если снизу стена, возвращает True, иначе — False
# wall_is_on_the_left()	если слева стена, возвращает True, иначе — False
# wall_is_on_the_right()	если справа стена, возвращает True, иначе — False
# fill_cell()	Закрасить текущую клетку
# cell_is_filled()	Возвращает True, если текущая клетка закрашена
# mov(r, v)	Поместить значение v в регистр r


if __name__ == '__main__':
    res = run_tasks(headless=True)
    sys.exit(0 if res else -1)
