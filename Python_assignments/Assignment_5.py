# ==========================================
# ASSIGNMENT 5 — SINGLE FOR LOOP SOLUTIONS
# ==========================================

# ------------------------------------------
# Level 1 — Loop Thinking & range()
# ------------------------------------------

# Q1. Predict the Loop Values
for i in range(2, 15, 3):
    print(i)


# Q2. Reverse range() Prediction
for i in range(15, 2, -3):
    print(i)


# Q3. How Many Iterations?
count_val = 0
for i in range(4, 31, 5):
    print(i)
    count_val += 1
print(f"Total iterations: {count_val}")


# Q4. Correct the Boundary
for i in range(3, 19, 3):
    print(i)


# Q5. Number and Distance from 20
for i in range(5, 11):
    print(i, 20 - i)


# Q6. Number, Square and Cube
for i in range(1, 7):
    print(i, i**2, i**3)


# ------------------------------------------
# Level 2 — Counting & Accumulation
# ------------------------------------------

# Q7. Sum of Numbers in a Range
start_num = 5
end_num = 10
total_sum = 0
for i in range(start_num, end_num + 1):
    total_sum += i
print(total_sum)


# Q8. Count Multiples of 3
limit_n = 10
multiple_count = 0
for i in range(1, limit_n + 1):
    if i % 3 == 0:
        multiple_count += 1
print(multiple_count)


# Q9. Sum of Multiples of 4
limit_n = 20
multiple_sum = 0
for i in range(1, limit_n + 1):
    if i % 4 == 0:
        multiple_sum += i
print(multiple_sum)


# Q10. Count Numbers with Two Conditions
limit_n = 50
dual_count = 0
for i in range(1, limit_n + 1):
    if i % 3 == 0 and i % 5 == 0:
        dual_count += 1
print(dual_count)


# Q11. Sum Numbers Except Multiples of 3
limit_n = 10
except_sum = 0
for i in range(1, limit_n + 1):
    if i % 3 != 0:
        except_sum += i
print(except_sum)


# Q12. Count Even and Odd Together
limit_n = 10
even_cnt = 0
odd_cnt = 0
for i in range(1, limit_n + 1):
    if i % 2 == 0:
        even_cnt += 1
    else:
        odd_cnt += 1
print(f"Even = {even_cnt}, Odd = {odd_cnt}")


# Q13. Running Sum
limit_n = 5
running_s = 0
for i in range(1, limit_n + 1):
    running_s += i
    print(running_s)


# Q14. Running Product
limit_n = 5
running_p = 1
for i in range(1, limit_n + 1):
    running_p *= i
    print(running_p)


# ------------------------------------------
# Level 3 — Factorial & Product Logic
# ------------------------------------------

# Q15. Factorial of a Number
fact_n = 5
factorial_val = 1
for i in range(1, fact_n + 1):
    factorial_val *= i
print(factorial_val)


# Q16. Factorial from 1 to N
fact_n = 5
factorial_val = 1
for i in range(1, fact_n + 1):
    factorial_val *= i
    print(f"{i}! = {factorial_val}")


# Q17. Product of Even Numbers
fact_n = 10
even_prod = 1
for i in range(2, fact_n + 1):
    if i % 2 == 0:
        even_prod *= i
print(even_prod)


# Q18. Product of Odd Numbers
fact_n = 7
odd_prod = 1
for i in range(1, fact_n + 1):
    if i % 2 != 0:
        odd_prod *= i
print(odd_prod)


# Q19. Double Factorial — Even Numbers
fact_n = 8
double_fact = 1
for i in range(fact_n, 0, -2):
    double_fact *= i
print(double_fact)


# Q20. Sum of Squares
limit_n = 5
sum_sq = 0
for i in range(1, limit_n + 1):
    sum_sq += i**2
print(sum_sq)


# Q21. Sum of Cubes
limit_n = 4
sum_cb = 0
for i in range(1, limit_n + 1):
    sum_cb += i**3
print(sum_cb)


# Q22. Factorial-Based Sum
limit_n = 4
fact_sum_total = 0
running_fact = 1
for i in range(1, limit_n + 1):
    running_fact *= i
    fact_sum_total += running_fact
print(fact_sum_total)


# ------------------------------------------
# Level 4 — Number & Digit Logic
# ------------------------------------------

# Q23. Count Digits Using a Loop
sample_num = 58321
digit_count = 0
temp_val = sample_num
if temp_val == 0:
    digit_count = 1
else:
    for _ in range(temp_val + 1):
        if temp_val > 0:
            digit_count += 1
            temp_val //= 10
        else:
            break
print(digit_count)


# Q24. Sum of Digits
sample_num = 58321
digit_sum = 0
temp_val = sample_num
for _ in range(temp_val + 1):
    if temp_val > 0:
        digit_sum += temp_val % 10
        temp_val //= 10
    else:
        break
print(digit_sum)


# Q25. Product of Digits
sample_num = 234
digit_prod = 1
temp_val = sample_num
if temp_val == 0:
    digit_prod = 0
else:
    for _ in range(temp_val + 1):
        if temp_val > 0:
            digit_prod *= temp_val % 10
            temp_val //= 10
        else:
            break
print(digit_prod)


# Q26. Count Even Digits
sample_num = 58321
even_digit_count = 0
temp_val = sample_num
if temp_val == 0:
    even_digit_count = 1
else:
    for _ in range(temp_val + 1):
        if temp_val > 0:
            if (temp_val % 10) % 2 == 0:
                even_digit_count += 1
            temp_val //= 10
        else:
            break
print(even_digit_count)


# Q27. Sum of Even Digits
sample_num = 58321
even_digit_sum = 0
temp_val = sample_num
for _ in range(temp_val + 1):
    if temp_val > 0:
        d = temp_val % 10
        if d % 2 == 0:
            even_digit_sum += d
        temp_val //= 10
    else:
        break
print(even_digit_sum)


# Q28. Largest Digit Without max()
sample_num = 58321
largest_digit = -1
temp_val = sample_num
for _ in range(temp_val + 1):
    if temp_val > 0:
        d = temp_val % 10
        if d > largest_digit:
            largest_digit = d
        temp_val //= 10
    else:
        break
print(largest_digit)


# Q29. Smallest Digit Without min()
sample_num = 58321
smallest_digit = 10
temp_val = sample_num
if temp_val == 0:
    smallest_digit = 0
else:
    for _ in range(temp_val + 1):
        if temp_val > 0:
            d = temp_val % 10
            if d < smallest_digit:
                smallest_digit = d
            temp_val //= 10
        else:
            break
print(smallest_digit)


# Q30. Reverse a Number
sample_num = 58321
reversed_num = 0
temp_val = sample_num
for _ in range(temp_val + 1):
    if temp_val > 0:
        reversed_num = reversed_num * 10 + (temp_val % 10)
        temp_val //= 10
    else:
        break
print(reversed_num)


# Q31. Palindrome Number
sample_num = 1221
original_val = sample_num
reversed_num = 0
temp_val = sample_num
for _ in range(temp_val + 1):
    if temp_val > 0:
        reversed_num = reversed_num * 10 + (temp_val % 10)
        temp_val //= 10
    else:
        break
if original_val == reversed_num:
    print("Palindrome")
else:
    print("Not Palindrome")


# Q32. Count a Specific Digit
sample_num = 1223342
target_digit = 2
match_count = 0
temp_val = sample_num
if temp_val == 0 and target_digit == 0:
    match_count = 1
for _ in range(temp_val + 1):
    if temp_val > 0:
        if temp_val % 10 == target_digit:
            match_count += 1
        temp_val //= 10
    else:
        break
print(match_count)


# Q33. First Digit Using Repeated Division
sample_num = 58321
first_digit = 0
temp_val = sample_num
for _ in range(temp_val + 1):
    if temp_val > 0:
        first_digit = temp_val % 10
        temp_val //= 10
    else:
        break
print(first_digit)


# Q34. Difference Between Largest and Smallest Digit
sample_num = 58321
largest_digit = -1
smallest_digit = 10
temp_val = sample_num
for _ in range(temp_val + 1):
    if temp_val > 0:
        d = temp_val % 10
        if d > largest_digit:
            largest_digit = d
        if d < smallest_digit:
            smallest_digit = d
        temp_val //= 10
    else:
        break
print(largest_digit - smallest_digit)


# Q35. Digit Position Value
sample_num = 58321
pos_tracker = 1
temp_val = sample_num
for _ in range(temp_val + 1):
    if temp_val > 0:
        print(temp_val % 10, pos_tracker)
        pos_tracker += 1
        temp_val //= 10
    else:
        break


# Q36. Armstrong Number — 3 Digit
sample_num = 153
original_val = sample_num
armstrong_sum = 0
for _ in range(3):
    d = sample_num % 10
    armstrong_sum += d**3
    sample_num //= 10
if original_val == armstrong_sum:
    print("Armstrong Number")
else:
    print("Not Armstrong Number")


# ------------------------------------------
# Level 5 — String & Character Logic
# ------------------------------------------

# Q37. Print Characters with Index
sample_str = "Python"
idx_counter = 0
for char in sample_str:
    print(idx_counter, char)
    idx_counter += 1


# Q38. Count Characters Without len()
sample_str = "Python"
string_len = 0
for _ in sample_str:
    string_len += 1
print(string_len)


# Q39. Count Vowels and Consonants
sample_str = "Python"
vowel_count = 0
consonant_count = 0
for char in sample_str:
    if char != " ":
        lc = char.lower()
        if lc in "aeiou":
            vowel_count += 1
        else:
            consonant_count += 1
print(f"Vowels = {vowel_count}, Consonants = {consonant_count}")


# Q40. Character Frequency
sample_str = "programming"
target_char = "g"
freq_count = 0
for char in sample_str:
    if char == target_char:
        freq_count += 1
print(freq_count)


# Q41. First Occurrence Position
sample_str = "programming"
target_char = "g"
found_pos = "Not Found"
idx_tracker = 0
for char in sample_str:
    if char == target_char:
        found_pos = idx_tracker
        break
    idx_tracker += 1
print(found_pos)


# Q42. Count Uppercase and Lowercase
sample_str = "PyThOn"
upper_cnt = 0
lower_cnt = 0
for char in sample_str:
    if "A" <= char <= "Z":
        upper_cnt += 1
    elif "a" <= char <= "z":
        lower_cnt += 1
print(f"Uppercase = {upper_cnt}, Lowercase = {lower_cnt}")


# Q43. Character Code Analyzer
sample_str = "ABC"
for char in sample_str:
    print(char, ord(char))


# Q44. String Without Vowels
sample_str = "education"
filtered_str = ""
for char in sample_str:
    if char.lower() not in "aeiou":
        filtered_str += char
print(filtered_str)


# ------------------------------------------
# Level 6 — Midpoint, Half & String Logic
# ------------------------------------------

# Q45. Find the Middle Character
sample_str = "Python"
str_length = 0
for _ in sample_str:
    str_length += 1
mid_idx = str_length // 2
current_idx = 0
middle_char = ""
for char in sample_str:
    if current_idx == mid_idx:
        middle_char = char
        break
    current_idx += 1
print(middle_char)


# Q46. First Half and Second Half
sample_str = "PythonCode"
str_length = 0
for _ in sample_str:
    str_length += 1
half_len = str_length // 2
first_half_str = ""
second_half_str = ""
idx_tracker = 0
for char in sample_str:
    if idx_tracker < half_len:
        first_half_str += char
    else:
        second_half_str += char
    idx_tracker += 1
print(f"First Half: {first_half_str}\nSecond Half: {second_half_str}")


# Q47. Split a String by Length — Odd vs Even
sample_str = "PROGRAM"
str_length = 0
for _ in sample_str:
    str_length += 1

first_half_str = ""
middle_str = ""
second_half_str = ""

if str_length % 2 != 0:
    mid_index = str_length // 2
    idx_tracker = 0
    for char in sample_str:
        if idx_tracker < mid_index:
            first_half_str += char
        elif idx_tracker == mid_index:
            middle_str += char
        else:
            second_half_str += char
        idx_tracker += 1
    print(
        f"First Half: {first_half_str}\nMiddle: {middle_str}\nSecond Half: {second_half_str}"
    )
else:
    half_index = str_length // 2
    idx_tracker = 0
    for char in sample_str:
        if idx_tracker < half_index:
            first_half_str += char
        else:
            second_half_str += char
        idx_tracker += 1
    print(f"First Half: {first_half_str}\nSecond Half: {second_half_str}")


# Q48. Compare Two Halves
sample_str = "ABCABC"
str_length = 0
for _ in sample_str:
    str_length += 1
half_len = str_length // 2
h1_str = ""
h2_str = ""
idx_tracker = 0
for char in sample_str:
    if idx_tracker < half_len:
        h1_str += char
    else:
        h2_str += char
    idx_tracker += 1
if h1_str == h2_str:
    print("Equal Halves")
else:
    print("Different Halves")


# Q49. Mirror the String
sample_str = "ABCCBA"
str_length = 0
for _ in sample_str:
    str_length += 1
is_symmetric = True
for i in range(str_length // 2):
    # Manual index check using single loop
    front_char = ""
    back_char = ""
    f_idx = 0
    b_idx = 0
    target_back = str_length - 1 - i
    for char in sample_str:
        if f_idx == i:
            front_char = char
        if b_idx == target_back:
            back_char = char
        f_idx += 1
        b_idx += 1
    if front_char != back_char:
        is_symmetric = False
        break
if is_symmetric:
    print("Symmetric")
else:
    print("Not Symmetric")


# Q50. Alternate Character Extraction
sample_str = "ABCDEFGH"
extracted_str = ""
idx_tracker = 0
for char in sample_str:
    if idx_tracker % 2 == 0:
        extracted_str += char
    idx_tracker += 1
print(extracted_str)


# Q51. Count Characters at Even and Odd Indexes
sample_str = "Python"
even_idx_cnt = 0
odd_idx_cnt = 0
idx_tracker = 0
for char in sample_str:
    if idx_tracker % 2 == 0:
        even_idx_cnt += 1
    else:
        odd_idx_cnt += 1
    idx_tracker += 1
print(f"Even Index = {even_idx_cnt}, Odd Index = {odd_idx_cnt}")


# Q52. Swap Adjacent Characters
sample_str = "ABCD"
swapped_str = ""
str_length = 0
for _ in sample_str:
    str_length += 1
for i in range(0, str_length - 1, 2):
    c1 = ""
    c2 = ""
    idx_tracker = 0
    for char in sample_str:
        if idx_tracker == i:
            c1 = char
        if idx_tracker == i + 1:
            c2 = char
        idx_tracker += 1
    swapped_str += c2 + c1
print(swapped_str)


# ------------------------------------------
# Level 7 — Tricky Single-Loop Problems
# ------------------------------------------

# Q53. Second Largest Digit
sample_num = 58321
largest_d = -1
second_largest_d = -1
temp_val = sample_num
for _ in range(temp_val + 1):
    if temp_val > 0:
        d = temp_val % 10
        if d > largest_d:
            second_largest_d = largest_d
            largest_d = d
        elif d > second_largest_d and d != largest_d:
            second_largest_d = d
        temp_val //= 10
    else:
        break
print(second_largest_d)


# Q54. Longest Consecutive Equal Character Run
sample_str = "aaabbccccd"
max_run_val = 1
current_run_val = 1
prev_char = ""
is_first = True
for char in sample_str:
    if is_first:
        prev_char = char
        is_first = False
    else:
        if char == prev_char:
            current_run_val += 1
        else:
            current_run_val = 1
            prev_char = char
        if current_run_val > max_run_val:
            max_run_val = current_run_val
print(max_run_val)


# Q55. Most Frequent Character — Controlled Approach
sample_str = "banana"
target_char = "a"
match_cnt = 0
total_cnt = 0
for char in sample_str:
    total_cnt += 1
    if char == target_char:
        match_cnt += 1
freq_percent = (match_cnt / total_cnt) * 100
print(f"Count = {match_cnt}, Frequency = {freq_percent}%")


# Q56. Running Digit Sum Until the End
sample_num = 58321
running_digit_sum = 0
temp_val = sample_num
for _ in range(temp_val + 1):
    if temp_val > 0:
        running_digit_sum += temp_val % 10
        print(running_digit_sum)
        temp_val //= 10
    else:
        break


# Q57. Number with Most Even Digits vs Odd Digits
sample_num = 24681
even_d_cnt = 0
odd_d_cnt = 0
temp_val = sample_num
for _ in range(temp_val + 1):
    if temp_val > 0:
        d = temp_val % 10
        if d % 2 == 0:
            even_d_cnt += 1
        else:
            odd_d_cnt += 1
        temp_val //= 10
    else:
        break
if even_d_cnt > odd_d_cnt:
    print("More Even Digits")
elif odd_d_cnt > even_d_cnt:
    print("More Odd Digits")
else:
    print("Equal")


# Q58. Alternating Digit Sum
sample_num = 12345
alt_sum_val = 0
sign_val = 1
temp_val = sample_num
for _ in range(temp_val + 1):
    if temp_val > 0:
        d = temp_val % 10
        alt_sum_val += sign_val * d
        sign_val *= -1
        temp_val //= 10
    else:
        break
print(alt_sum_val)


# Q59. Output Prediction — Accumulator Trap
total_val_trap = 0
for i in range(1, 6):
    total_val_trap = total_val_trap + i * 2
    print(total_val_trap)


# Q60. Output Prediction — Condition Inside Loop
counter_val = 0
for i in range(1, 11):
    if i % 2 == 0:
        counter_val = counter_val + 1
print(counter_val)


# Q61. Debug the Accumulator
correct_sum_val = 0
for i in range(1, 6):
    correct_sum_val += i
print(correct_sum_val)


# ------------------------------------------
# Level 8 — Real-Life Single-Loop Problems
# ------------------------------------------

# Q62. Daily Expense Analyzer
expenses_list = [250, 180, 400, 120, 300]
total_exp = 0
highest_exp = expenses_list[0]
lowest_exp = expenses_list[0]
for exp in expenses_list:
    total_exp += exp
    if exp > highest_exp:
        highest_exp = exp
    if exp < lowest_exp:
        lowest_exp = exp
print(
    f"Total: {total_exp}\nHighest: {highest_exp}\nLowest: {lowest_exp}"
)


# Q63. Student Marks Analyzer
marks_list = [78, 65, 92, 81, 74]
num_subjects = 5
total_marks = 0
highest_mark = marks_list[0]
lowest_mark = marks_list[0]
for m in marks_list:
    total_marks += m
    if m > highest_mark:
        highest_mark = m
    if m < lowest_mark:
        lowest_mark = m
avg_marks = total_marks / num_subjects
print(
    f"Total: {total_marks}\nAverage: {avg_marks}\nHighest: {highest_mark}\nLowest: {lowest_mark}"
)


# Q64. Attendance Analyzer
attendance_status = ["P", "P", "A", "P", "A", "P"]
total_days = 6
present_cnt = 0
absent_cnt = 0
for status in attendance_status:
    if status == "P":
        present_cnt += 1
    elif status == "A":
        absent_cnt += 1
attendance_pct = (present_cnt / total_days) * 100
print(
    f"Present: {present_cnt}\nAbsent: {absent_cnt}\nAttendance: {attendance_pct}%"
)


# Q65. Electricity Usage Analyzer
electricity_units = [8, 12, 15, 7, 13]
total_units_val = 0
days_above_ten = 0
for u in electricity_units:
    total_units_val += u
    if u > 10:
        days_above_ten += 1
print(f"Total Units: {total_units_val}\nDays Above 10: {days_above_ten}")


# Q66. Shopping Bill Analyzer
product_prices = [450, 1200, 800, 2500, 600]
total_bill_val = 0
expensive_products_cnt = 0
for p in product_prices:
    total_bill_val += p
    if p > 1000:
        expensive_products_cnt += 1
print(
    f"Total Bill: {total_bill_val}\nProducts Above 1000: {expensive_products_cnt}"
)


# Q67. Login Attempt Analyzer
login_attempts = ["success", "failed", "success", "failed", "success"]
attempt_total = 5
success_cnt = 0
failed_cnt = 0
for att in login_attempts:
    if att == "success":
        success_cnt += 1
    elif att == "failed":
        failed_cnt += 1
success_rate = (success_cnt / attempt_total) * 100
print(
    f"Successful: {success_cnt}\nFailed: {failed_cnt}\nSuccess Rate: {success_rate}%"
)


# ------------------------------------------
# Level 9 — Final Challenges
# ------------------------------------------

# Q68. Number Profile
sample_num = 58321
digits_cnt = 0
digits_sum = 0
largest_d = -1
smallest_d = 10
even_d_cnt = 0
odd_d_cnt = 0

temp_val = sample_num
if temp_val == 0:
    print(
        "Digits: 1\nSum: 0\nLargest: 0\nSmallest: 0\nEven Digits: 1\nOdd Digits: 0"
    )
else:
    for _ in range(temp_val + 1):
        if temp_val > 0:
            d = temp_val % 10
            digits_cnt += 1
            digits_sum += d
            if d > largest_d:
                largest_d = d
            if d < smallest_d:
                smallest_d = d
            if d % 2 == 0:
                even_d_cnt += 1
            else:
                odd_d_cnt += 1
            temp_val //= 10
        else:
            break
    print(
        f"Digits: {digits_cnt}\nSum: {digits_sum}\nLargest: {largest_d}\nSmallest: {smallest_d}\nEven Digits: {even_d_cnt}\nOdd Digits: {odd_d_cnt}"
    )


# Q69. String Balance Challenge
sample_str = "Hello World"
total_chars_cnt = 0
vowels_cnt = 0
consonants_cnt = 0
uppercase_cnt = 0
lowercase_cnt = 0
even_index_chars_cnt = 0
idx_tracker = 0

for char in sample_str:
    total_chars_cnt += 1
    if idx_tracker % 2 == 0:
        even_index_chars_cnt += 1
    if char != " ":
        if "A" <= char <= "Z":
            uppercase_cnt += 1
            if char in "AEIOU":
                vowels_cnt += 1
            else:
                consonants_cnt += 1
        elif "a" <= char <= "z":
            lowercase_cnt += 1
            if char in "aeiou":
                vowels_cnt += 1
            else:
                consonants_cnt += 1
    idx_tracker += 1

print(
    f"Total Characters: {total_chars_cnt}\nVowels: {vowels_cnt}\nConsonants: {consonants_cnt}\nUppercase: {uppercase_cnt}\nLowercase: {lowercase_cnt}\nEven Index Characters: {even_index_chars_cnt}"
)