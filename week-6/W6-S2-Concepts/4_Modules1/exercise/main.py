if __name__ == "__main__":

    from math_utils import add, subtract
    # Math operations
    print("Addition:", add(5, 3))
    print("Subtraction:", subtract(10, 4))

    from string_utils import uppercase, lowercase
    # String operations
    print("Uppercase:", uppercase("hello"))
    print("Lowercase:", lowercase("WORLD"))

    from file_utils import write_file, read_file
    # File operations
    write_file("sample.txt", "Hello, world!")
    print("File content:", read_file("sample.txt"))
