# Assignment-2 - Solved
# All Questions and Answers are kept in commented form.


# Topic 1: Type Casting


# Question 1 — String to Integer
# Convert "25" into an integer and print its value and type.

# Answer-1:
# age = "25"
# age = int(age)
# print(age)
# print(type(age))


# Question 2 — String to Float
# Convert "75.5" into a float and print its value and type.

# Answer-2:
# marks = "75.5"
# marks = float(marks)
# print(marks)
# print(type(marks))


# Question 3 — Integer to Float
# Convert 50 into a float and print the converted value and its type.

# Answer-3:
# number = 50
# number = float(number)
# print(number)
# print(type(number))


# Question 4 — Float to Integer
# Convert 85.9 into an integer and observe the decimal part.

# Answer-4:
# marks = 85.9
# marks = int(marks)
# print(marks)
# print(type(marks))
# The decimal part is removed, so 85.9 becomes 85.


# Question 5 — Integer to String
# Convert 101 into a string and print its value and type.

# Answer-5:
# roll_number = 101
# roll_number = str(roll_number)
# print(roll_number)
# print(type(roll_number))


# Question 6 — Multiple Conversions
# Convert "18" to int, "92.5" to float, 100 to str, and 45.8 to int.
# Print every converted value with its type.

# Answer-6:
# value1 = int("18")
# value2 = float("92.5")
# value3 = str(100)
# value4 = int(45.8)
#
# print(value1, type(value1))
# print(value2, type(value2))
# print(value3, type(value3))
# print(value4, type(value4))


# Question 7 — Predict the Output

# Answer-7:
# 20
# 10
# 25
# <class 'int'>
# <class 'int'>
# <class 'str'>


# Question 8 — Debug Type Casting
# Error: age is a string, so it cannot be directly added to an integer.

# Answer-8:
# age = "19"
# new_age = int(age) + 1
#
# print("Age:", new_age)


# Question 9 — Marks Conversion

# Answer-9:
# marks = "85"
# marks = int(marks)
# final_marks = marks + 5
#
# print("Final Marks:", final_marks)


# Question 10 — Price Conversion

# Answer-10:
# price = "1499.50"
# price = float(price)
# total_amount = price + 99.50
#
# print("Total Amount:", total_amount)


# Topic 2: Arithmetic Operators


# Question 11 — Basic Arithmetic

# Answer-11:
# a = 20
# b = 6
#
# print("Addition:", a + b)
# print("Subtraction:", a - b)
# print("Multiplication:", a * b)
# print("Division:", a / b)
# print("Floor Division:", a // b)
# print("Remainder:", a % b)
# print("Power:", a ** b)


# Question 12 — Predict the Output

# Answer-12:
# 3.4
# 3
# 2
#
# Explanation:
# / gives normal division, // gives floor division, and % gives the remainder.


# Question 13 — Operator Precedence

# Answer-13:
# 20
#
# # Addition happens first:
# result = (10 + 5) * 2
# print(result)


# Question 14 — More Precedence Practice

# Answer-14:
# 10
#
# # Parentheses make the order of calculation clear:
# result = 20 - (4 * 3) + 2
# print(result)


# Question 15 — Power Operator

# Answer-15:
# 8
# 9
# 100
#
# side = 5
# area = side ** 2
# print("Area of Square:", area)


# Question 16 — Shopping Bill

# Answer-16:
# notebook = 80
# pen = 20
# pencil = 10
#
# total_amount = notebook + pen + pencil
# print("Total Amount:", total_amount)


# Question 17 — Multiple Quantities

# Answer-17:
# notebooks = 3
# notebook_price = 50
# pens = 2
# pen_price = 15
# calculator = 1
# calculator_price = 500
#
# notebook_cost = notebooks * notebook_price
# pen_cost = pens * pen_price
# calculator_cost = calculator * calculator_price
# total_bill = notebook_cost + pen_cost + calculator_cost
#
# print("Notebook Cost:", notebook_cost)
# print("Pen Cost:", pen_cost)
# print("Calculator Cost:", calculator_cost)
# print("Total Bill:", total_bill)


# Question 18 — Complete Groups and Remainder

# Answer-18:
# students = 47
# group_size = 5
#
# complete_groups = students // group_size
# students_left = students % group_size
#
# print("Complete Groups:", complete_groups)
# print("Students Left:", students_left)


# Question 19 — Average Marks

# Answer-19:
# python = 85
# mathematics = 78
# physics = 92
#
# total = python + mathematics + physics
# average = total / 3
#
# print("Total Marks:", total)
# print("Average Marks:", average)


# Question 20 — Percentage

# Answer-20:
# english = 78
# mathematics = 85
# python = 92
# physics = 81
# chemistry = 74
#
# total = english + mathematics + python + physics + chemistry
# percentage = (total / 500) * 100
#
# print("Total Marks:", total)
# print("Percentage:", percentage)


# Topic 3: Digit Extraction using % and //


# Question 21 — Ones Digit

# Answer-21:
# number = 583
# ones = number % 10
#
# print("Ones Digit:", ones)


# Question 22 — Tens Digit

# Answer-22:
# number = 583
# tens = (number // 10) % 10
#
# print("Tens Digit:", tens)


# Question 23 — Hundreds Digit

# Answer-23:
# number = 583
# hundreds = number // 100
#
# print("Hundreds Digit:", hundreds)


# Question 24 — Three-Digit Number Analyzer

# Answer-24:
# number = 746
#
# ones = number % 10
# tens = (number // 10) % 10
# hundreds = number // 100
#
# print("Ones Digit:", ones)
# print("Tens Digit:", tens)
# print("Hundreds Digit:", hundreds)


# Question 25 — Four-Digit Number

# Answer-25:
# number = 5829
#
# ones = number % 10
# tens = (number // 10) % 10
# hundreds = (number // 100) % 10
# thousands = number // 1000
#
# print("Ones Digit:", ones)
# print("Tens Digit:", tens)
# print("Hundreds Digit:", hundreds)
# print("Thousands Digit:", thousands)


# Question 26 — Sum of Digits

# Answer-26:
# number = 583
#
# ones = number % 10
# tens = (number // 10) % 10
# hundreds = number // 100
# sum_of_digits = ones + tens + hundreds
#
# print("Sum of Digits:", sum_of_digits)


# Question 27 — Four-Digit Sum

# Answer-27:
# number = 4726
#
# ones = number % 10
# tens = (number // 10) % 10
# hundreds = (number // 100) % 10
# thousands = number // 1000
# sum_of_digits = ones + tens + hundreds + thousands
#
# print("Sum of Digits:", sum_of_digits)


# Question 28 — Product of Digits

# Answer-28:
# number = 234
#
# ones = number % 10
# tens = (number // 10) % 10
# hundreds = number // 100
# product_of_digits = ones * tens * hundreds
#
# print("Product of Digits:", product_of_digits)


# Question 29 — Reverse a Three-Digit Number

# Answer-29:
# number = 583
#
# ones = number % 10
# tens = (number // 10) % 10
# hundreds = number // 100
#
# reversed_number = ones * 100 + tens * 10 + hundreds
#
# print("Original Number:", number)
# print("Reversed Number:", reversed_number)


# Question 30 — Reverse a Four-Digit Number

# Answer-30:
# number = 4726
#
# ones = number % 10
# tens = (number // 10) % 10
# hundreds = (number // 100) % 10
# thousands = number // 1000
#
# reversed_number = ones * 1000 + tens * 100 + hundreds * 10 + thousands
#
# print("Original Number:", number)
# print("Reversed Number:", reversed_number)


# Question 31 — Place Value

# Answer-31:
# number = 5834
#
# ones = number % 10
# tens = (number // 10) % 10
# hundreds = (number // 100) % 10
# thousands = number // 1000
#
# print("Thousands Place:", thousands * 1000)
# print("Hundreds Place:", hundreds * 100)
# print("Tens Place:", tens * 10)
# print("Ones Place:", ones)


# Question 32 — Difference Between First and Last Digit

# Answer-32:
# number = 583
#
# hundreds = number // 100
# ones = number % 10
# difference = hundreds - ones
#
# print("Difference:", difference)


# Question 33 — Digit Extraction Debugging
# Error: / performs division. The ones digit must be extracted using % 10.

# Answer-33:
# number = 583
# ones = number % 10
#
# print("Ones Digit:", ones)


# Question 34 — Four-Digit Extraction

# Answer-34:
# number = 9365
#
# ones = number % 10
# tens = (number // 10) % 10
# hundreds = (number // 100) % 10
# thousands = number // 1000
#
# print("Thousands Digit:", thousands)
# print("Hundreds Digit:", hundreds)
# print("Tens Digit:", tens)
# print("Ones Digit:", ones)


# Question 35 — Build a Number

# Answer-35:
# hundreds = 5
# tens = 8
# ones = 3
#
# number = hundreds * 100 + tens * 10 + ones
#
# print("Number:", number)


# Topic 4: Real-Life Arithmetic Problems


# Question 36 — Simple Interest

# Answer-36:
# principal = 10000
# rate = 5
# time = 2
#
# simple_interest = (principal * rate * time) / 100
#
# print("Simple Interest:", simple_interest)


# Question 37 — Rectangle

# Answer-37:
# length = 15
# width = 8
#
# area = length * width
# perimeter = 2 * (length + width)
#
# print("Area:", area)
# print("Perimeter:", perimeter)


# Question 38 — Circle

# Answer-38:
# radius = 7
# pi = 3.14
#
# area = pi * radius ** 2
#
# print("Area:", area)


# Question 39 — Temperature Conversion

# Answer-39:
# celsius = 35
# fahrenheit = (celsius * 9 / 5) + 32
#
# print("Fahrenheit:", fahrenheit)


# Question 40 — Time Conversion

# Answer-40:
# total_seconds = 367
#
# minutes = total_seconds // 60
# seconds = total_seconds % 60
#
# print("Minutes:", minutes)
# print("Seconds:", seconds)


# Question 41 — Hours, Minutes and Seconds

# Answer-41:
# total_seconds = 7384
#
# hours = total_seconds // 3600
# remaining_seconds = total_seconds % 3600
# minutes = remaining_seconds // 60
# seconds = remaining_seconds % 60
#
# print("Hours:", hours)
# print("Minutes:", minutes)
# print("Seconds:", seconds)


# Question 42 — Salary Calculation

# Answer-42:
# basic_salary = 25000
# hra = 5000
# travel_allowance = 2500
# tax_deduction = 3000
#
# gross_salary = basic_salary + hra + travel_allowance
# net_salary = gross_salary - tax_deduction
#
# print("Gross Salary:", gross_salary)
# print("Net Salary:", net_salary)


# Question 43 — Travel Cost

# Answer-43:
# distance = 120
# mileage = 20
# fuel_price = 100
#
# fuel_required = distance / mileage
# total_fuel_cost = fuel_required * fuel_price
#
# print("Fuel Required:", fuel_required, "litres")
# print("Total Fuel Cost:", total_fuel_cost)


# Question 44 — Shopping Discount

# Answer-44:
# price = "2500"
# discount = "10"
#
# price = float(price)
# discount = float(discount)
#
# discount_amount = price * discount / 100
# final_price = price - discount_amount
#
# print("Discount Amount:", discount_amount)
# print("Final Price:", final_price)


# Topic 5: Type Casting + Arithmetic Operators


# Question 45 — String Numbers

# Answer-45:
# price = "1200"
# quantity = "4"
#
# price = int(price)
# quantity = int(quantity)
# total_price = price * quantity
#
# print("Price:", price)
# print("Quantity:", quantity)
# print("Total Price:", total_price)


# Question 46 — Student Result

# Answer-46:
# python_marks = "85"
# math_marks = "78"
# physics_marks = "91"
#
# python_marks = int(python_marks)
# math_marks = int(math_marks)
# physics_marks = int(physics_marks)
#
# total_marks = python_marks + math_marks + physics_marks
# average_marks = total_marks / 3
#
# print("Total Marks:", total_marks)
# print("Average Marks:", average_marks)


# Question 47 — Bill with Tax

# Answer-47:
# price = "1500"
# quantity = "2"
# tax_rate = "5"
#
# price = float(price)
# quantity = int(quantity)
# tax_rate = float(tax_rate)
#
# subtotal = price * quantity
# tax_amount = subtotal * tax_rate / 100
# final_bill = subtotal + tax_amount
#
# print("Subtotal:", subtotal)
# print("Tax Amount:", tax_amount)
# print("Final Bill:", final_bill)


# Question 48 — Discount + GST

# Answer-48:
# price = 2000
# discount = 15
# gst = 18
#
# discount_amount = price * discount / 100
# price_after_discount = price - discount_amount
# gst_amount = price_after_discount * gst / 100
# final_price = price_after_discount + gst_amount
#
# print("Discount Amount:", discount_amount)
# print("Price After Discount:", price_after_discount)
# print("GST Amount:", gst_amount)
# print("Final Price:", final_price)


# Question 49 — Debug the Billing Program
# Error: price is a string and quantity is an integer.
# Convert price into an integer before multiplication.

# Answer-49:
# price = "500"
# quantity = 3
#
# price = int(price)
# total = price * quantity
#
# print("Total:", total)


# Question 50 — Debug the Marks Program
# Error: String values are being joined instead of numerically added.
# Convert all marks into integers.

# Answer-50:
# marks1 = "80"
# marks2 = "75"
# marks3 = "90"
#
# marks1 = int(marks1)
# marks2 = int(marks2)
# marks3 = int(marks3)
#
# total = marks1 + marks2 + marks3
#
# print("Total Marks:", total)


# Topic 6: Output Prediction and Conceptual Practice


# Question 51 — Type Casting Output

# Answer-51:
# 50
# 50
# <class 'str'>
# <class 'int'>


# Question 52 — Float to Integer

# Answer-52:
# 99.99
# 99
#
# Explanation:
# int() removes the decimal portion; it does not round the number.


# Question 53 — Arithmetic Output

# Answer-53:
# 17
# 7
# 60
# 2.4
# 2
# 2


# Question 54 — Parentheses Challenge

# Answer-54:
# 20
# 30
# 7.0
# 2.5
#
# Explanation:
# Parentheses change the order of calculation by forcing the expression
# inside the parentheses to be calculated first.


# Question 55 — Digit Challenge

# Answer-55:
# 4
# 8
# 6
#
# a represents the ones digit.
# c represents the tens digit.
# d represents the hundreds digit.


# Topic 7: Mixed Debugging


# Question 56 — Debug the Student Program
# Errors:
# 1. marks is a string, so it must be converted to int before adding 5.
# 2. Student_name should be student_name because Python is case-sensitive.
# 3. The type() function is missing a closing parenthesis.

# Answer-56:
# student_name = "Ravi"
# marks = "85"
#
# marks = int(marks)
# total = marks + 5
#
# print("Student:", student_name)
# print("Marks:", total)
# print("Type:", type(total))


# Question 57 — Debug the Number Program
# Error: / does not extract the ones digit.
# Correct expressions are used below.

# Answer-57:
# number = 746
#
# ones = number % 10
# tens = (number // 10) % 10
# hundreds = number // 100
#
# print("Ones:", ones)
# print("Tens:", tens)
# print("Hundreds:", hundreds)


# Question 58 — Debug the Discount Program
# Errors:
# 1. price and discount are strings.
# 2. They must be converted into numeric types before arithmetic.

# Answer-58:
# price = "2000"
# discount = "15"
#
# price = float(price)
# discount = float(discount)
#
# discount_amount = price * discount / 100
# final_price = price - discount_amount
#
# print("Discount:", discount_amount)
# print("Final Price:", final_price)


# Question 59 — Complete Debugging Challenge
# Errors:
# 1. Marks are strings and must be converted to integers.
# 2. Student_name should be student_name.
# 3. The type() function is missing a closing parenthesis.

# Answer-59:
# student_name = "Rahul"
# marks1 = "85"
# marks2 = "90"
# marks3 = "78"
#
# marks1 = int(marks1)
# marks2 = int(marks2)
# marks3 = int(marks3)
#
# total = marks1 + marks2 + marks3
# average = total / 3
#
# print("Student:", student_name)
# print("Total Marks:", total)
# print("Average:", average)
# print("Marks Type:", type(total))


# Question 60 — Final Challenge: Number + Billing

# Answer-60:
#
# Part A — Number Analysis
#
# number = 5836
#
# ones = number % 10
# tens = (number // 10) % 10
# hundreds = (number // 100) % 10
# thousands = number // 1000
#
# sum_of_digits = thousands + hundreds + tens + ones
# reversed_number = ones * 1000 + tens * 100 + hundreds * 10 + thousands
#
# print("Thousands Digit:", thousands)
# print("Hundreds Digit:", hundreds)
# print("Tens Digit:", tens)
# print("Ones Digit:", ones)
# print("Sum of Digits:", sum_of_digits)
# print("Reversed Number:", reversed_number)
#
#
# Part B — Product Billing
#
# price = "1250"
# quantity = "4"
# discount = "10"
#
# price = int(price)
# quantity = int(quantity)
# discount = int(discount)
#
# subtotal = price * quantity
# discount_amount = subtotal * discount / 100
# final_amount = subtotal - discount_amount
#
# print("Subtotal:", subtotal)
# print("Discount Amount:", discount_amount)
# print("Final Amount:", final_amount)
