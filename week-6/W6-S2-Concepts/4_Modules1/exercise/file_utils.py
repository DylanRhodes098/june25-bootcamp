def read_file(filename):
    with open(filename, "r") as file:
        return file.read()


def write_file(filename, content):
    with open(filename, "w") as file:
        file.write(content)

        write_file("sample.txt", "Hello, world!")
        print("File content:", read_file("sample.txt"))
