n = int(input("Enter a number: "))
def factorial1(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

result = factorial1(n)
print(result)


