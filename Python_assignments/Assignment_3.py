# Assignment 3 — Answers with Code and Output

# **Semester 1 — Python Unit 2**  
# **Assignment 3 — Operators, Strings, Input & Output**  
# **Deadline: 14 September 2026**

# > This file contains the **Python code + expected output/answer** for every question.  
# > For input-based questions, the output shown uses the **test case given in the assignment**.

# ---

# ## Topic 1 — Comparison Operators

# ### Q1. Predict the Output

# **Code**
# ```python
# a = 15
# b = 20

# print(a < b)
# print(a > b)
# print(a == b)
# print(a != b)
# print(a <= b)
# print(a >= b)
# ```

# **Output**
# ```text
# True
# False
# False
# True
# True
# False
# ```

# ---

# ### Q2. Compare Expressions

# **Code**
# ```python
# x = 10
# y = 10

# print(x == y)
# print(x != y)
# print(x < y)
# print(x <= y)
# print(x >= y)
# ```

# **Output**
# ```text
# True
# False
# False
# True
# True
# ```

# **Answer:** `==` checks equality, while `=` is used for assignment.

# ---

# ### Q3. Comparison with Arithmetic

# **Code**
# ```python
# a = 10
# b = 5

# print(a + b == 15)
# print(a * b > 40)
# print(a - b != 5)
# print(a // b == 2)
# ```

# **Output**
# ```text
# True
# True
# False
# True
# ```

# ---

# ### Q4. String Comparison

# **Code**
# ```python
# print("Python" == "Python")
# print("Python" == "python")
# print("Hello" != "hello")
# ```

# **Output**
# ```text
# True
# False
# True
# ```

# **Answer:** String comparison is case-sensitive.

# ---

# ## Topic 2 — Assignment Operators

# ### Q5. Trace the Value

# **Code**
# ```python
# x = 20

# x += 10
# print(x)

# x -= 5
# print(x)

# x *= 2
# print(x)

# x //= 5
# print(x)
# ```

# **Output**
# ```text
# 30
# 25
# 50
# 10
# ```

# **Final value of `x`:**
# ```text
# 10
# ```

# ---

# ### Q6. Assignment Operator Practice

# **Code**
# ```python
# marks = 50

# marks += 10
# marks -= 5
# marks *= 2

# print(marks)
# ```

# **Output**
# ```text
# 110
# ```

# ---

# ## Topic 3 — Membership Operators with Strings

# ### Q7. Basic Membership

# **Code**
# ```python
# text = "Python Programming"

# print("Python" in text)
# print("Java" in text)
# print("Python" not in text)
# ```

# **Output**
# ```text
# True
# False
# False
# ```

# ---

# ### Q8. Character Membership

# **Code**
# ```python
# word = "computer"

# print("p" in word)
# print("x" in word)
# print("c" not in word)
# ```

# **Output**
# ```text
# True
# False
# False
# ```

# ---

# ### Q9. Case Sensitivity in Membership

# **Code**
# ```python
# text = "Python"

# print("P" in text)
# print("p" in text)
# print("Python" in text)
# print("python" in text)
# ```

# **Output**
# ```text
# True
# False
# True
# False
# ```

# **Answer:** Membership checks are case-sensitive.

# ---

# ### Q10. Membership with User Input

# **Code**
# ```python
# text = input()

# print("a" in text)
# ```

# **Test case**
# ```text
# Input:
# apple

# Output:
# True
# ```

# Other given test cases:
# ```text
# Python -> False
# banana -> True
# ```

# ---

# ### Q11. Email Symbol Check

# **Code**
# ```python
# email = input()

# print("@" in email)
# ```

# **Test case**
# ```text
# Input:
# rahul@gmail.com

# Output:
# True
# ```

# Other given test cases:
# ```text
# student@yahoo.com -> True
# rahulgmail.com -> False
# ```

# ---

# ## Topic 4 — ASCII and Unicode

# ### Q12. Find Character Codes

# **Code**
# ```python
# print(ord("A"))
# print(ord("a"))
# print(ord("Z"))
# print(ord("z"))
# print(ord("0"))
# print(ord("9"))
# print(ord("@"))
# ```

# **Output**
# ```text
# 65
# 97
# 90
# 122
# 48
# 57
# 64
# ```

# ---

# ### Q13. Convert Codes to Characters

# **Code**
# ```python
# print(chr(65))
# print(chr(66))
# print(chr(97))
# print(chr(98))
# print(chr(48))
# print(chr(57))
# print(chr(64))
# ```

# **Output**
# ```text
# A
# B
# a
# b
# 0
# 9
# @
# ```

# ---

# ### Q14. Uppercase and Lowercase

# **Code**
# ```python
# print(ord("A"))
# print(ord("a"))
# print(ord("B"))
# print(ord("b"))

# print(ord("a") - ord("A"))
# print(ord("b") - ord("B"))
# ```

# **Output**
# ```text
# 65
# 97
# 66
# 98
# 32
# 32
# ```

# **Answers**
# 1. `ord("a")` is larger than `ord("A")`.
# 2. The difference is `32`.
# 3. Yes, the difference is also `32` for `B` and `b`.

# ---

# ### Q15. Character Code Program

# **Code**
# ```python
# character = input()

# print(ord(character))
# ```

# **Test case**
# ```text
# Input:
# A

# Output:
# 65
# ```

# Other given test cases:
# ```text
# a -> 97
# 0 -> 48
# ```

# ---

# ### Q16. Next Character

# **Code**
# ```python
# character = input()

# print(chr(ord(character) + 1))
# ```

# **Test case**
# ```text
# Input:
# A

# Output:
# B
# ```

# Other given test cases:
# ```text
# C -> D
# Y -> Z
# ```

# ---

# ### Q17. Character Comparison and Unicode

# **Code**
# ```python
# print("A" < "B")
# print("a" < "b")
# print("A" < "a")
# print("0" < "9")

# print(ord("A"))
# print(ord("B"))
# print(ord("a"))
# print(ord("b"))
# print(ord("0"))
# print(ord("9"))
# ```

# **Output**
# ```text
# True
# True
# True
# True
# 65
# 66
# 97
# 98
# 48
# 57
# ```

# ---

# ### Q18. Unicode Character Challenge

# **Code**
# ```python
# character1 = chr(9731)
# character2 = chr(9829)
# character3 = chr(8377)

# print(character1)
# print(character2)
# print(character3)

# print(ord(character1))
# print(ord(character2))
# print(ord(character3))
# ```

# **Output**
# ```text
# ☃
# ♥
# ₹
# 9731
# 9829
# 8377
# ```

# ---

# ## Topic 5 — String Indexing

# ### Q19. Basic Indexing

# **Code**
# ```python
# text = "PYTHON"

# print(text[0])
# print(text[1])
# print(text[-1])
# print(text[-2])
# ```

# **Output**
# ```text
# P
# Y
# N
# O
# ```

# ---

# ### Q20. Positive and Negative Indexing

# **Code**
# ```python
# text = "COMPUTER"

# print(text[0])
# print(text[3])
# print(text[-1])
# print(text[-3])
# ```

# **Output**
# ```text
# C
# P
# R
# E
# ```

# ---

# ### Q21. Predict the Output

# **Code**
# ```python
# text = "PYTHON"

# print(text[0])
# print(text[2])
# print(text[-1])
# print(text[-2])
# ```

# **Output**
# ```text
# P
# T
# N
# O
# ```

# ---

# ### Q22. Indexing a User Input

# **Code**
# ```python
# word = input()

# print(word[0])
# print(word[-1])
# ```

# **Test case**
# ```text
# Input:
# Python

# Output:
# P
# n
# ```

# Other given test cases:
# ```text
# Computer -> C, r
# Hello -> H, o
# ```

# ---

# ### Q23. Think Carefully About Indexing

# **Code**
# ```python
# word = "PROGRAM"

# print(word[0])
# print(word[2])
# print(word[-1])
# print(word[-4])
# ```

# **Output**
# ```text
# P
# O
# M
# G
# ```

# ---

# ## Topic 6 — String Slicing

# ### Q24. Basic Slicing

# **Code**
# ```python
# text = "PYTHON"

# print(text[0:3])
# print(text[2:5])
# print(text[1:6])
# ```

# **Output**
# ```text
# PYT
# THO
# YTHON
# ```

# ---

# ### Q25. Start and Stop

# **Code**
# ```python
# text = "PROGRAMMING"

# print(text[:4])
# print(text[4:])
# print(text[:])
# ```

# **Output**
# ```text
# PROG
# RAMMING
# PROGRAMMING
# ```

# ---

# ### Q26. Negative Slicing

# **Code**
# ```python
# text = "COMPUTER"

# print(text[-5:])
# print(text[:-3])
# print(text[-6:-2])
# ```

# **Output**
# ```text
# PUTER
# COMPU
# OMPU
# ```

# ---

# ### Q27. Step in Slicing

# **Code**
# ```python
# text = "PYTHON"

# print(text[::2])
# print(text[1::2])
# print(text[::-1])
# ```

# **Output**
# ```text
# PTO
# YHN
# NOHTYP
# ```

# ---

# ### Q28. Reverse a String

# **Code**
# ```python
# text = input()

# print(text[::-1])
# ```

# **Test case**
# ```text
# Input:
# Python

# Output:
# nohtyP
# ```

# Other given test cases:
# ```text
# Hello -> olleH
# 12345 -> 54321
# ```

# ---

# ### Q29. Alternate Characters

# **Code**
# ```python
# text = input()

# print(text[::2])
# ```

# **Test case**
# ```text
# Input:
# ABCDEFGH

# Output:
# ACEG
# ```

# Other given test cases:
# ```text
# Python -> Pto
# 12345678 -> 1357
# ```

# ---

# ### Q30. Extract First and Last Three Characters

# **Code**
# ```python
# text = input()

# print(text[:3])
# print(text[-3:])
# ```

# **Test case**
# ```text
# Input:
# Programming

# Output:
# Pro
# ing
# ```

# Other given test cases:
# ```text
# Computer -> Com, ter
# Python -> Pyt, hon
# ```

# ---

# ### Q31. Slicing Challenge

# **Code**
# ```python
# text = "ABCDEFGHIJ"

# print(text[2:8:2])
# print(text[8:2:-2])
# print(text[::-2])
# ```

# **Output**
# ```text
# CEG
# IGE
# JHFDB
# ```

# **Slicing details**
# ```text
# text[2:8:2]  -> start=2, stop=8, step=2
# text[8:2:-2] -> start=8, stop=2, step=-2
# text[::-2]   -> start=None, stop=None, step=-2
# ```

# ---

# ### Q32. Slice Without Counting from the Beginning

# **Code**
# ```python
# text = "BTECH-CSE-2026"

# print(text[:5])
# print(text[6:9])
# print(text[10:])
# ```

# **Output**
# ```text
# BTECH
# CSE
# 2026
# ```

# ---

# ## Topic 7 — String `split()`

# ### Q33. Basic `split()`

# **Code**
# ```python
# text = "Python is easy"

# print(text.split())
# ```

# **Output**
# ```text
# ['Python', 'is', 'easy']
# ```

# **Answer:** With no separator specified, `split()` separates the string using whitespace.

# ---

# ### Q34. Custom Separator

# **Code**
# ```python
# data = "apple,banana,mango"

# print(data.split(","))
# ```

# **Output**
# ```text
# ['apple', 'banana', 'mango']
# ```

# ---

# ### Q35. Separator Not Present

# **Code**
# ```python
# text = "Python is easy"

# print(text.split(","))
# ```

# **Output**
# ```text
# ['Python is easy']
# ```

# **Answer:** The program looks specifically for `,`. Since there is no comma, the string is not split at spaces.

# ---

# ### Q36. Split a Full Name

# **Code**
# ```python
# name = input()

# words = name.split()

# print(words[0])
# print(words[1])
# print(words[2])
# ```

# **Test case**
# ```text
# Input:
# Rahul Kumar Sharma

# Output:
# Rahul
# Kumar
# Sharma
# ```

# ---

# ### Q37. Multiple Inputs Using `split()`

# **Code**
# ```python
# first_name, last_name = input().split()

# print(f"First Name: {first_name}")
# print(f"Last Name: {last_name}")
# ```

# **Test case**
# ```text
# Input:
# Rahul Kumar

# Output:
# First Name: Rahul
# Last Name: Kumar
# ```

# ---

# ### Q38. Three Numeric Inputs

# **Code**
# ```python
# first_number, second_number, third_number = input().split()

# first_number = int(first_number)
# second_number = int(second_number)
# third_number = int(third_number)

# print(first_number + second_number + third_number)
# ```

# **Test case**
# ```text
# Input:
# 10 20 30

# Output:
# 60
# ```

# Other given test cases:
# ```text
# 5 7 8 -> 20
# 100 200 300 -> 600
# ```

# ---

# ### Q39. Student Record

# **Code**
# ```python
# name, age, course, city = input().split(",")

# print(f"Name: {name}")
# print(f"Age: {age}")
# print(f"Course: {course}")
# print(f"City: {city}")
# ```

# **Test case**
# ```text
# Input:
# Rahul,20,BTech,Ahmedabad

# Output:
# Name: Rahul
# Age: 20
# Course: BTech
# City: Ahmedabad
# ```

# ---

# ### Q40. Email Analyzer

# **Code**
# ```python
# username, domain = input().split("@")

# print(f"Username: {username}")
# print(f"Domain: {domain}")
# ```

# **Test case**
# ```text
# Input:
# rahul@gmail.com

# Output:
# Username: rahul
# Domain: gmail.com
# ```

# Other given test case:
# ```text
# student@yahoo.com
# Username: student
# Domain: yahoo.com
# ```

# ---

# ### Q41. Sentence Analyzer

# **Code**
# ```python
# sentence = input()

# words = sentence.split()

# print(f"First word: {words[0]}")
# print(f"Last word: {words[-1]}")
# print(f"Total words: {len(words)}")
# ```

# **Test case**
# ```text
# Input:
# Python is very powerful

# Output:
# First word: Python
# Last word: powerful
# Total words: 4
# ```

# ---

# ## Topic 8 — Escape Sequences

# ### Q42. New Line

# **Code**
# ```python
# print("Hello\nWorld")
# ```

# **Output**
# ```text
# Hello
# World
# ```

# ---

# ### Q43. Tab

# **Code**
# ```python
# print("Name:\tRahul")
# print("Age:\t20")
# print("City:\tAhmedabad")
# ```

# **Output**
# ```text
# Name:	Rahul
# Age:	20
# City:	Ahmedabad
# ```

# ---

# ### Q44. Backslash

# **Code**
# ```python
# print("C:\\Python\\Programs")
# ```

# **Output**
# ```text
# C:\Python\Programs
# ```

# ---

# ### Q45. Single Quote

# **Code**
# ```python
# print("It\'s Python")
# ```

# **Output**
# ```text
# It's Python
# ```

# ---

# ### Q46. Double Quote

# **Code**
# ```python
# print("He said \"Hello\"")
# ```

# **Output**
# ```text
# He said "Hello"
# ```

# ---

# ### Q47. Predict the Output

# **Code**
# ```python
# print("Python\n Programming")
# ```

# **Output**
# ```text
# Python
#  Programming
# ```

# ---

# ### Q48. Combined Escape Sequences

# **Code**
# ```python
# print("Student Details\nName:\tRahul\nAge:\t20\nCourse:\tB.Tech")
# ```

# **Output**
# ```text
# Student Details
# Name:	Rahul
# Age:	20
# Course:	B.Tech
# ```

# ---

# ## Topic 9 — `print()`, `sep`, `end`, and f-Strings

# ### Q49. `sep`

# **Code**
# ```python
# print("2026", "09", "09", sep="-")
# ```

# **Output**
# ```text
# 2026-09-09
# ```

# ---

# ### Q50. `end`

# **Code**
# ```python
# print("Hello", end=" ")
# print("Python")
# ```

# **Output**
# ```text
# Hello Python
# ```

# ---

# ### Q51. `sep` and `end`

# **Code**
# ```python
# print("10", "20", "30", sep="-", end="\n")
# print("40", "50", "60", sep="-")
# ```

# **Output**
# ```text
# 10-20-30
# 40-50-60
# ```

# ---

# ### Q52. Student Introduction

# **Code**
# ```python
# name = input()
# age = input()
# city = input()
# course = input()

# print(f"Name: {name}")
# print(f"Age: {age}")
# print(f"City: {city}")
# print(f"Course: {course}")
# ```

# **Test case**
# ```text
# Input:
# Rahul
# 20
# Ahmedabad
# B.Tech

# Output:
# Name: Rahul
# Age: 20
# City: Ahmedabad
# Course: B.Tech
# ```

# ---

# ### Q53. Formatted Price

# **Code**
# ```python
# price = float(input())

# print(f"{price:.2f}")
# ```

# **Test cases**
# ```text
# 45      -> 45.00
# 99.5    -> 99.50
# 120.678 -> 120.68
# ```

# ---

# ## Topic 10 — Debugging

# ### Q54. String and Integer

# **Incorrect code**
# ```python
# age = input("Enter age: ")
# print("Age after 5 years:", age + 5)
# ```

# **Correct code**
# ```python
# age = int(input("Enter age: "))

# print("Age after 5 years:", age + 5)
# ```

# **Test case**
# ```text
# Input:
# 20

# Output:
# Age after 5 years: 25
# ```

# **Reason:** `input()` returns a string. `int()` converts it into an integer.

# ---

# ### Q55. Incorrect Quotes

# **Incorrect code**
# ```python
# print('It's Python')
# ```

# **Correct code**
# ```python
# print("It's Python")
# ```

# **Output**
# ```text
# It's Python
# ```

# ---

# ### Q56. Incorrect Slicing Syntax

# **Incorrect code**
# ```python
# text = "Python"
# print(text[1,4])
# ```

# **Correct code**
# ```python
# text = "Python"
# print(text[1:4])
# ```

# **Output**
# ```text
# yth
# ```

# ---

# ### Q57. Incorrect `split()` Separator

# **Incorrect code**
# ```python
# a, b = input().split(",")
# ```

# For input:
# ```text
# 10 20
# ```

# **Correct code**
# ```python
# a, b = input().split()

# print(a)
# print(b)
# ```

# **Output**
# ```text
# 10
# 20
# ```

# **Reason:** The input values are separated by a space, not a comma.

# ---

# ### Q58. String Addition vs Numeric Addition

# **Code**
# ```python
# a, b = input().split()

# print(a + b)

# a = int(a)
# b = int(b)

# print(a + b)
# ```

# **Test case**
# ```text
# Input:
# 10 20

# Output:
# 1020
# 30
# ```

# **Reason:** Before conversion, `a` and `b` are strings, so `+` concatenates them. After `int()`, `+` performs numeric addition.

# ---

# ### Q59. Escape Sequence Debugging

# **Incorrect code**
# ```python
# print("C:\n ew\t est")
# ```

# **Correct code**
# ```python
# print("C:\\new\\test")
# ```

# **Output**
# ```text
# C:\new\test
# ```

# **Reason:** `\n` represents a new line and `\t` represents a tab. To display a literal backslash, use `\\`.

# ---

# ## Topic 11 — Integrated Problems

# ### Q60. Student Result Information

# **Code**
# ```python
# student_name = input()
# mark1, mark2, mark3 = input().split()

# mark1 = int(mark1)
# mark2 = int(mark2)
# mark3 = int(mark3)

# total = mark1 + mark2 + mark3
# average = total / 3

# print(f"Name: {student_name}")
# print(f"Total: {total}")
# print(f"Average: {average:.2f}")
# ```

# **Test case**
# ```text
# Input:
# Rahul
# 70 80 90

# Output:
# Name: Rahul
# Total: 240
# Average: 80.00
# ```

# ---

# ### Q61. Student ID Analyzer

# **Code**
# ```python
# student_id = input()

# degree, batch, branch, roll_number = student_id.split("-")

# roll_number = int(roll_number)
# last_three_characters = student_id[-3:]

# print(f"Degree: {degree}")
# print(f"Batch: {batch}")
# print(f"Branch: {branch}")
# print(f"Roll Number: {roll_number}")
# print(f"Last Three Characters: {last_three_characters}")
# ```

# **Test case**
# ```text
# Input:
# BTECH-24-CSE-105

# Output:
# Degree: BTECH
# Batch: 24
# Branch: CSE
# Roll Number: 105
# Last Three Characters: 105
# ```

# ---

# ### Q62. Username Generator

# **Code**
# ```python
# full_name = input()

# name_parts = full_name.split()

# first_name = name_parts[0]
# last_name = name_parts[2]

# username = first_name.lower() + "." + last_name.lower()

# print(username)
# ```

# **Test case**
# ```text
# Input:
# Rahul Kumar Sharma

# Output:
# rahul.sharma
# ```

# ---

# ### Q63. Sentence Information

# **Code**
# ```python
# sentence = input()

# words = sentence.split()

# print(f"First word: {words[0]}")
# print(f"Last word: {words[-1]}")
# print(f"Number of words: {len(words)}")
# ```

# **Test case**
# ```text
# Input:
# Python is very powerful

# Output:
# First word: Python
# Last word: powerful
# Number of words: 4
# ```

# ---

# ### Q64. Email Analyzer + Membership

# **Code**
# ```python
# email = input()

# print(f"@ Present: {'@' in email}")

# username, domain = email.split("@")

# print(f"Username: {username}")
# print(f"Domain: {domain}")
# ```

# **Test case**
# ```text
# Input:
# rahul@gmail.com

# Output:
# @ Present: True
# Username: rahul
# Domain: gmail.com
# ```

# ---

# ### Q65. Character Analyzer

# **Code**
# ```python
# character = input()

# code = ord(character)
# previous_character = chr(code - 1)
# next_character = chr(code + 1)

# print(f"Character: {character}")
# print(f"Code: {code}")
# print(f"Previous: {previous_character}")
# print(f"Next: {next_character}")
# ```

# **Test case**
# ```text
# Input:
# B

# Output:
# Character: B
# Code: 66
# Previous: A
# Next: C
# ```

# ---

# ### Q66. Product Bill

# **Code**
# ```python
# product_name = input()
# price = float(input())
# quantity = int(input())
# discount_percentage = float(input())

# subtotal = price * quantity
# discount = subtotal * discount_percentage / 100
# final_total = subtotal - discount

# print(f"Product: {product_name}")
# print(f"Price: {price:.2f}")
# print(f"Quantity: {quantity}")
# print(f"Subtotal: {subtotal:.2f}")
# print(f"Discount: {discount:.2f}")
# print(f"Final Total: {final_total:.2f}")
# ```

# **Test case**
# ```text
# Input:
# Pen
# 20
# 5
# 10

# Output:
# Product: Pen
# Price: 20.00
# Quantity: 5
# Subtotal: 100.00
# Discount: 10.00
# Final Total: 90.00
# ```

# ---

# ### Q67. Date Analyzer

# **Code**
# ```python
# date = input()

# day, month, year = date.split("-")
# year_from_slice = date[-4:]

# print(f"Day: {day}")
# print(f"Month: {month}")
# print(f"Year: {year}")
# print(year_from_slice)
# ```

# **Test case**
# ```text
# Input:
# 09-09-2026

# Output:
# Day: 09
# Month: 09
# Year: 2026
# 2026
# ```

# ---

# ### Q68. String Transformation Challenge

# **Code**
# ```python
# first_word, second_word = input().split()

# print(f"First Word: {first_word}")
# print(f"Second Word: {second_word}")
# print(f"First Word Reversed: {first_word[::-1]}")
# print(f"Second Word Reversed: {second_word[::-1]}")
# ```

# **Test case**
# ```text
# Input:
# Python Programming

# Output:
# First Word: Python
# Second Word: Programming
# First Word Reversed: nohtyP
# Second Word Reversed: gnimmargorP
# ```

# ---

# ### Q69. Final Challenge — Student Code Formatter

# **Code**
# ```python
# student_code = input()

# parts = student_code.split("-")

# degree = parts[0]
# batch = parts[1]
# branch = parts[2]
# roll = parts[3]

# formatted_code = degree + "/" + branch + "/" + roll

# print(f"Degree: {degree}")
# print(f"Batch: {batch}")
# print(f"Branch: {branch}")
# print(f"Roll: {roll}")
# print(f"Code: {formatted_code}")
# ```

# **Test case**
# ```text
# Input:
# BTECH-2026-CSE-105

# Output:
# Degree: BTECH
# Batch: 2026
# Branch: CSE
# Roll: 105
# Code: BTECH/CSE/105
# ```

# ---

# ### Q70. Final String + Input/Output Challenge

# **Code**
# ```python
# full_name = input()

# name_parts = full_name.split()

# first_name = name_parts[0]
# last_name = name_parts[-1]

# first_name_upper_part = first_name[:3].upper()
# last_name_lower_part = last_name[1:4].lower()
# full_name_reversed = full_name[::-1]

# print(f"Original: {full_name}")
# print(f"First Name: {first_name}")
# print(f"Last Name: {last_name}")
# print(f"First Name (Upper Part): {first_name_upper_part}")
# print(f"Last Name (Lower Part): {last_name_lower_part}")
# print(f"Full Name Reversed: {full_name_reversed}")
# ```

# **Test case**
# ```text
# Input:
# Rahul Kumar Sharma

# Output:
# Original: Rahul Kumar Sharma
# First Name: Rahul
# Last Name: Sharma
# First Name (Upper Part): RAH
# Last Name (Lower Part): har
# Full Name Reversed: amrahS ramuK luhaR
# ```

# ---

# # Final Note

# The assignment specifically requires clean, readable Python code, meaningful variable names, no hard-coded test-case values, testing with the provided test cases, and use of the requested Python features. It also states not to use `if`, `elif`, `else`, loops, functions, lists, dictionaries, or other concepts not yet covered.
