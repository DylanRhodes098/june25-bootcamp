def greet(name):
    print("Hello, " + name)

greet("bob")

def count_to_n(n):
    i = 0
    while i < n:  
        print(i + 1)
        i+=1 

count_to_n(10)

def calculate_average(numbers):
    total = sum(numbers)
    return total / len(numbers)  # What happens if numbers is an empty list?

print(calculate_average([2, 3]))

