import os

with open("results.txt", "a") as f:
    for root, dirs, files in os.walk(os.getcwd()):
        for file in files:
            fullpath = os.path.join(file)
            f.write(f"{fullpath}\n")
