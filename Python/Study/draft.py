s1 = 'макаронник'


print()

s2 = 'куку'


for i in range(len(s1)):
    for k in range(len(s1)-len(s2)):
        print(f"{s1[i+k]}+{s2[k]}")
