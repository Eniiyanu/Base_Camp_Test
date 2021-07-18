password=  input("Enter your password:")

#check if password can be converted to int
if password.isnumeric() :
    password=int(password)
    print("This password is very weak")
#check if password is a string
elif password.isalpha():
    print("This password is  weak")
#check if password is an alphanumeric
elif password.isalnum():
    print("This password is  strong")
else:
    print("This password is  very Strong")

