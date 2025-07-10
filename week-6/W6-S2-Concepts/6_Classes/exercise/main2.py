class Database:
    """Base class for a simple in-memory database."""

    def __init__(self):
        self.records = []

    def add_new(self, record):
        """Adds a new record to the database."""
        self.records.append(record)
        print(f"New record added: {record}")

    def get_records(self):
        """Returns all records in the database."""
        return self.records


class Customers(Database):
    """Represents a customer database."""

    def add_new(self, name, email):
        """Adds a new customer record."""
        customer = {"Type": "Customer", "Name": name, "Email": email}
        super().add_new(customer)

if __name__ == "__main__":
    customer_db = Customers()

    customer_db.add_new("Alice Smith", "alice@example.com")

    print("\nCustomers:", customer_db.get_records())


class Database:
    """Base class for a simple in-memory database."""

    def __init__(self):
        self.records = []

    def add_new(self, record):
        """Adds a new record to the database."""
        self.records.append(record)
        print(f"New record added: {record}")

    def get_records(self):
        """Returns all records in the database."""
        return self.records


class Customers(Database):
    """Represents a customer database."""

    def add_new(self, name, email):
        super().add_new(name, email)
        self.name = name
        self.email = email

if __name__ == "__main__":
    customer_db = Customers()

    customer_db.add_new("Alice Smith", "alice@example.com")

    print("\nCustomers:", customer_db.get_records())

