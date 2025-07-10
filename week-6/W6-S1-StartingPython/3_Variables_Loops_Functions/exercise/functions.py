def greet():
    print("Hello, World!")

def calc(a, b):
    return a * b

greet()
finish = calc(6, 7)
print(finish)

numbers = [1, 3, 4, 5, 7]
for number in numbers:
    calc = number + number
    print (calc)

num = [1, 3, 6]
for numbers in num:
    if not isinstance(numbers, (int,float)):
        raise ValueError("error")
else:
    total = sum(num)
def calculator(a, b):
    return a + b

function = calculator(total, 7)
print(function)