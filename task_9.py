#program to chheck if a string is a palindrome  or not
string=input(("Enter a string:"))
if(string==string[::-1]):
      print( string, "is a palindrome")
else:
      print( string," is not a palindrome")