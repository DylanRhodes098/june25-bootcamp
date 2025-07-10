if __name__ == "__main__":
    # Math operations
    from mathutilities import add, subtract

    print("Addition:", add(5, 3))
    print("Subtraction:", subtract(10, 4))

    # String operations
    from stringutilities import uppercase, lowercase

    print("Uppercase:", uppercase("hello"))
    print("Lowercase:", lowercase("WORLD"))

    # File operations
    def read_file(filename):
    with open(filename, "r") as file:
        return file.read()


    def write_file(filename, content):
    with open(filename, "w") as file:
        file.write(content)

    write_file("sample.txt", "Hello, world!")
    print("File content:", read_file("sample.txt"))
