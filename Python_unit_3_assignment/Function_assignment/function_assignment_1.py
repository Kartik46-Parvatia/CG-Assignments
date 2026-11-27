# ==============================================================================
# SECTION A — Basic Function Practice
# ==============================================================================

# ------------------------------------------------------------------------------
# Q1. Display a Welcome Message
# ------------------------------------------------------------------------------
def display_welcome():
    print("================================")
    print("   Welcome to Python Programming")
    print("       Let's learn Functions!")
    print("================================")


print("--- Q1 Output ---")
display_welcome()
display_welcome()
display_welcome()
print()


# ------------------------------------------------------------------------------
# Q2. Student Introduction Card
# ------------------------------------------------------------------------------
def display_student_card(name, age, course):
    print("+--------------------------------+")
    print("|         STUDENT CARD           |")
    print("+--------------------------------+")
    print(f"| Name  : {name:<22} |")
    print(f"| Age   : {age:<22} |")
    print(f"| Course: {course:<22} |")
    print("+--------------------------------+")


print("--- Q2 Output ---")
display_student_card("Rahul", 18, "B.Tech")
display_student_card("Priya", 19, "BCA")
display_student_card("Aman", 20, "B.Sc")
print()


# ------------------------------------------------------------------------------
# Q3. Square, Cube, and Double
# ------------------------------------------------------------------------------
def calculate_square(number):
    print("Square:", number ** 2)


def calculate_cube(number):
    print("Cube:", number ** 3)


def calculate_double(number):
    print("Double:", number * 2)


print("--- Q3 Output ---")
# Test case: 4 (Sample)
calculate_square(4)
calculate_cube(4)
calculate_double(4)
# Additional test cases: 2, 5
calculate_square(2)
calculate_cube(2)
calculate_double(2)
calculate_square(5)
calculate_cube(5)
calculate_double(5)
print()


# ------------------------------------------------------------------------------
# Q4. Simple Interest Calculator
# ------------------------------------------------------------------------------
def calculate_simple_interest(principal, rate, time):
    simple_interest = (principal * rate * time) / 100
    total_amount = principal + simple_interest
    print("Principal:", principal)
    print(f"Rate: {rate}%")
    print(f"Time: {time} years")
    print("Simple Interest:", int(simple_interest) if simple_interest.is_integer() else simple_interest)
    print("Total Amount:", int(total_amount) if total_amount.is_integer() else total_amount)


print("--- Q4 Output ---")
calculate_simple_interest(5000, 5, 2)
print("-" * 20)
calculate_simple_interest(10000, 7, 3)
print("-" * 20)
calculate_simple_interest(2500, 4, 1)
print()


# ------------------------------------------------------------------------------
# Q5. Even or Odd Checker
# ------------------------------------------------------------------------------
def check_even_odd(number):
    if number % 2 == 0:
        print(f"{number} is an Even number.")
    else:
        print(f"{number} is an Odd number.")


print("--- Q5 Output ---")
check_even_odd(12)
check_even_odd(7)
check_even_odd(0)
check_even_odd(-5)
print()


# ==============================================================================
# SECTION B — Parameters, Arguments, and Return Values
# ==============================================================================

# ------------------------------------------------------------------------------
# Q6. Find the Larger Number
# ------------------------------------------------------------------------------
def find_largest(number_1, number_2):
    if number_1 >= number_2:
        return number_1
    return number_2


print("--- Q6 Output ---")
result = find_largest(25, 40)
print("Largest number:", result)
print("Largest number (90, 15):", find_largest(90, 15))
print("Largest number (12, 12):", find_largest(12, 12))
print("Largest number (-5, -2):", find_largest(-5, -2))
print()


# ------------------------------------------------------------------------------
# Q7. Temperature Converter
# ------------------------------------------------------------------------------
def celsius_to_fahrenheit(celsius):
    return (9 / 5) * celsius + 32


def fahrenheit_to_celsius(fahrenheit):
    return (5 / 9) * (fahrenheit - 32)


print("--- Q7 Output ---")
fahrenheit = celsius_to_fahrenheit(0)
print(fahrenheit)
celsius = fahrenheit_to_celsius(98.6)
print(round(celsius, 2))
# Additional test cases
print("25 C -> F:", celsius_to_fahrenheit(25))
print("100 C -> F:", celsius_to_fahrenheit(100))
print("32 F -> C:", fahrenheit_to_celsius(32))
print("68 F -> C:", fahrenheit_to_celsius(68))
print()


# ------------------------------------------------------------------------------
# Q8. Understand the Difference Between print() and return
# ------------------------------------------------------------------------------
def calculate_sum_1(a, b):
    print(a + b)


def calculate_sum_2(a, b):
    return a + b


print("--- Q8 Output ---")
res_1 = calculate_sum_1(10, 20)
res_2 = calculate_sum_2(10, 20)
print(res_2)
print("Result from first function:", res_1)
print("Result from second function:", res_2)

# Answers to questions in comments:
# 1. Which function returns a value?
#    -> calculate_sum_2 returns a value (using the 'return' statement).
# 2. Why does the first variable contain None?
#    -> Because calculate_sum_1 only prints the sum to the console and has no return
#       statement, so Python implicitly returns None.
# 3. Can the value displayed by print() be directly stored as the function's return value?
#    -> No. print() only sends text to standard output; it does not send data back to the caller.

# Additional test cases: (5, 7) and (100, 250)
r1_a = calculate_sum_1(5, 7)
r2_a = calculate_sum_2(5, 7)
print("Result 1 (5, 7):", r1_a, "| Result 2 (5, 7):", r2_a)

r1_b = calculate_sum_1(100, 250)
r2_b = calculate_sum_2(100, 250)
print("Result 1 (100, 250):", r1_b, "| Result 2 (100, 250):", r2_b)
print()


# ------------------------------------------------------------------------------
# Q9. Total Marks and Percentage
# ------------------------------------------------------------------------------
def calculate_result(mark_1, mark_2, mark_3, mark_4, mark_5):
    total_marks = mark_1 + mark_2 + mark_3 + mark_4 + mark_5
    percentage = (total_marks / 500) * 100
    return total_marks, percentage


print("--- Q9 Output ---")
total, percentage = calculate_result(75, 80, 65, 90, 70)
print("Total Marks:", total)
print(f"Percentage: {percentage}%")

total_2, percentage_2 = calculate_result(50, 60, 55, 65, 70)
print(f"Test 2 -> Total Marks: {total_2}, Percentage: {percentage_2}%")

total_3, percentage_3 = calculate_result(100, 95, 90, 85, 80)
print(f"Test 3 -> Total Marks: {total_3}, Percentage: {percentage_3}%")
print()


# ------------------------------------------------------------------------------
# Q10. Rectangle Area and Perimeter
# ------------------------------------------------------------------------------
def rectangle_details(length, breadth):
    area = length * breadth
    perimeter = 2 * (length + breadth)
    return area, perimeter


print("--- Q10 Output ---")
area, perimeter = rectangle_details(10, 5)
print("Area:", area)
print("Perimeter:", perimeter)

a2, p2 = rectangle_details(8, 4)
print(f"Test (8, 4) -> Area: {a2}, Perimeter: {p2}")

a3, p3 = rectangle_details(7, 7)
print(f"Test (7, 7) -> Area: {a3}, Perimeter: {p3}")
print()


# ==============================================================================
# SECTION C — Default and Keyword Arguments
# ==============================================================================

# ------------------------------------------------------------------------------
# Q11. Personalized Greeting
# ------------------------------------------------------------------------------
def greet_user(name, message="Welcome to Python!"):
    print(f"Hello {name}!")
    print(message)
    print()


print("--- Q11 Output ---")
greet_user("Rahul", "Good Morning!")
greet_user("Priya")
greet_user("Aman", message="Keep Learning!")
greet_user("Neha", message="Have a great coding session!")


# ------------------------------------------------------------------------------
# Q12. Electricity Bill Calculator
# ------------------------------------------------------------------------------
def calculate_electricity_bill(units, rate=7):
    bill = units * rate
    return bill


print("--- Q12 Output ---")
bill_1 = calculate_electricity_bill(100)
bill_2 = calculate_electricity_bill(100, 8)
bill_3 = calculate_electricity_bill(rate=6, units=100)
print("Bill 1:", bill_1)
print("Bill 2:", bill_2)
print("Bill 3:", bill_3)
# Additional test cases
print("Test (150, 8):", calculate_electricity_bill(150, 8))
print("Test (200, 6):", calculate_electricity_bill(200, 6))
print()


# ------------------------------------------------------------------------------
# Q13. Employee Salary Calculator
# ------------------------------------------------------------------------------
def calculate_salary(basic_salary, bonus=2000, deduction=500):
    final_salary = basic_salary + bonus - deduction
    return final_salary


print("--- Q13 Output ---")
print("Only basic salary:", calculate_salary(25000))
print("Basic + bonus:", calculate_salary(25000, 3000))
print("All positional:", calculate_salary(25000, 3000, 1000))
print("Keyword arguments:", calculate_salary(basic_salary=25000, deduction=800, bonus=4000))

# Think and answer:
# Why must parameters with default values be placed after parameters without default values?
# -> Because Python matches positional arguments from left to right. If a non-default
#    parameter came after a default parameter, Python would not know whether a positional
#    argument is meant to override the default parameter or fill the required one,
#    causing ambiguity (resulting in a SyntaxError).
print()


# ==============================================================================
# SECTION D — Applying Functions with Previously Learned Topics
# ==============================================================================

# ------------------------------------------------------------------------------
# Q14. Number Digit Counter
# ------------------------------------------------------------------------------
def count_digits(number):
    if number < 0:
        number = -number
    if number == 0:
        return 1

    count = 0
    while number > 0:
        count += 1
        number //= 10
    return count


print("--- Q14 Output ---")
count = count_digits(4826)
print("Total digits:", count)
print("Digits in 7:", count_digits(7))
print("Digits in 90000:", count_digits(90000))
print("Digits in 0:", count_digits(0))
print()


# ------------------------------------------------------------------------------
# Q15. Sum of Digits
# ------------------------------------------------------------------------------
def sum_of_digits(number):
    if number < 0:
        number = -number

    total = 0
    while number > 0:
        digit = number % 10
        total += digit
        number //= 10
    return total


print("--- Q15 Output ---")
result = sum_of_digits(482)
print("Sum of digits:", result)
print("Sum of digits (123):", sum_of_digits(123))
print("Sum of digits (9005):", sum_of_digits(9005))
print("Sum of digits (7):", sum_of_digits(7))
print()


# ------------------------------------------------------------------------------
# Q16. Reverse a Number
# ------------------------------------------------------------------------------
def reverse_number(number):
    is_negative = number < 0
    if is_negative:
        number = -number

    reversed_num = 0
    while number > 0:
        digit = number % 10
        reversed_num = (reversed_num * 10) + digit
        number //= 10

    return -reversed_num if is_negative else reversed_num


print("--- Q16 Output ---")
result = reverse_number(4826)
print("Reversed number:", result)
print("Reversed (123):", reverse_number(123))
print("Reversed (900):", reverse_number(900))
print("Reversed (7):", reverse_number(7))
print()


# ------------------------------------------------------------------------------
# Q17. Palindrome Number Checker
# ------------------------------------------------------------------------------
def is_palindrome(number):
    if number < 0:
        return False

    original = number
    reversed_num = 0
    while number > 0:
        digit = number % 10
        reversed_num = (reversed_num * 10) + digit
        number //= 10

    return original == reversed_num


print("--- Q17 Output ---")
result = is_palindrome(121)
print(result)
if result:
    print("121 is a Palindrome number.")
else:
    print("121 is not a Palindrome number.")

for test_num in (1331, 123, 7):
    status = "is a Palindrome" if is_palindrome(test_num) else "is NOT a Palindrome"
    print(f"{test_num} -> {is_palindrome(test_num)} ({status})")
print()


# ------------------------------------------------------------------------------
# Q18. Prime Number Checker
# ------------------------------------------------------------------------------
def is_prime(number):
    if number <= 1:
        return False

    divisor = 2
    while divisor * divisor <= number:
        if number % divisor == 0:
            return False
        divisor += 1
    return True


print("--- Q18 Output ---")
result = is_prime(17)
print(result)
if result:
    print("17 is a Prime number.")
else:
    print("17 is not a Prime number.")

for test_num in (2, 21, 1, 0):
    msg = "Prime" if is_prime(test_num) else "Not Prime"
    print(f"{test_num} -> {is_prime(test_num)} ({msg})")
print()


# ------------------------------------------------------------------------------
# Q19. Display Prime Numbers in a Range
# ------------------------------------------------------------------------------
def display_primes(start, end):
    prime_count = 0
    primes_output = ""

    for num in range(start, end + 1):
        if num > 1:
            is_num_prime = True
            divisor = 2
            while divisor * divisor <= num:
                if num % divisor == 0:
                    is_num_prime = False
                    break
                divisor += 1

            if is_num_prime:
                if prime_count == 0:
                    primes_output = str(num)
                else:
                    primes_output = primes_output + " " + str(num)
                prime_count += 1

    if prime_count > 0:
        print("Prime numbers:", primes_output)
    else:
        print("Prime numbers: No prime numbers")
    print("Total prime numbers:", prime_count)


print("--- Q19 Output ---")
display_primes(10, 30)
print("-" * 20)
display_primes(1, 10)
print("-" * 20)
display_primes(20, 25)
print("-" * 20)
display_primes(14, 16)
print()


# ------------------------------------------------------------------------------
# Q20. Student Result Report
# ------------------------------------------------------------------------------
def display_student_report(name, mark_1, mark_2, mark_3):
    total_marks = mark_1 + mark_2 + mark_3
    percentage = (total_marks / 300) * 100
    status = "PASS" if percentage >= 40 else "FAIL"

    print("================================")
    print("         STUDENT REPORT")
    print("================================")
    print(f"Name       : {name}")
    print(f"Subject 1  : {mark_1}")
    print(f"Subject 2  : {mark_2}")
    print(f"Subject 3  : {mark_3}")
    print("--------------------------------")
    print(f"Total      : {total_marks} / 300")
    print(f"Percentage : {percentage:.2f}%")
    print(f"Result     : {status}")
    print("================================")


print("--- Q20 Output ---")
display_student_report("Rahul", 75, 80, 65)
display_student_report("Priya", 35, 45, 40)
display_student_report("Aman", 20, 30, 25)
display_student_report("Neha", 100, 100, 100)
