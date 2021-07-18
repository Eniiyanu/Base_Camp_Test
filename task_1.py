#The function task1 is to perform the First task 
def task1(a, p):
    even=0
    odd=0
    for i in range(p):
        if a[i]%2==0:
            even+=a[i]
        else:
            odd+=a[i]
    return {'Even':even, 'Odd':odd}
#This is the list of positive integers in the array
array=[1, 2, 3, 4, 5, 6,7,8,9] 
p=len(array) 

print(task1(array, p))