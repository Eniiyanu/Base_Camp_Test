
# sum of digits in numbers from 1 to n
 
# Returns sum of all digits in numbers from 1 to n
def countNumbersWith3(n) :
    result = 0 # initialize result
 
    # One by one compute sum of digits
    # in every number from 1 to n
    for x in range(1, n + 1) :
        if(has3(x) == True) :
            result = result + 1
 
    return result
 
# A utility function to compute sum 
# of digits in a given number x
def has3(x) :
    while (x != 0) :
        if (x%10 == 3) :
            return True
        x = x //10
     
    return False
     
# Driver Program
n = 328
print ("Count of numbers from 1 to ", n,
        " that have 3 as a a digit is ",
                    countNumbersWith3(n))