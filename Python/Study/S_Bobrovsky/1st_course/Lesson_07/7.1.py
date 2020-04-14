"""
7.1. В вашем отделе работают три программиста -- джун, миддл и сеньор. При этом не обязательно
зарплата сеньора самая высокая. Введите в программу три числа (зарплаты) и определите, у кого она
самая высокая, у кого самая низкая, и во сколько раз самая большая отличается от самой маленькой.
"""
staff = {'сеньор': int(input('Введите зарплату сеньора: ')),
         'джун': int(input("Введите  зарплату джуна: ")),
         'миддл': int(input("Введите зарплату миддла: "))
         }
max_pay = max(staff.values())
min_pay = min(staff.values())


def find_max(x):
    for key, val in x.items():
        if val == max_pay:
            return key


def find_min(x):
    for key, val in x.items():
        if val == min_pay:
            return key


print(f"Самая высокая зарплата у {find_max(staff)}: {max_pay}")
print(f"Самая низкая зарплата у {find_min(staff)}: {min_pay}")
print(f"Самая высокая зарплата больше самой низкой в {'%.2f' % (max_pay/min_pay)} раз(а)")







