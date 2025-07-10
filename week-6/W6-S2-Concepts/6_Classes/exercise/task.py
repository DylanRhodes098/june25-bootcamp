class person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display(self):
        print(f"hi my name is {self.name} and I am {self.age} years old")

class student(person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id
    
    def display(self):
        super().display()
        print(f"I am a student with id {self.student_id}")

if __name__ == "__main__":
    p = person("james", 24)
    p.display()

    s = student("harry", 12, 5.7)
    s.display()


    