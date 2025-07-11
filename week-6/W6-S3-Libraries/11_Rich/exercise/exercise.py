from rich.console import Console
from rich.table import Table
from rich.progress import Progress
import time


console = Console()

with Progress() as progress:
    task = progress.add_task("LOADING...", total=100)
    for _ in range(10):
        time.sleep(0.05)
        progress.update(task, advance=10)

    task = progress.add_task("LOADING...", total=100)
    for _ in range(10):
        time.sleep(0.05)
        progress.update(task, advance=10)

table = Table(title="Database1")
table.add_column("staff", justify="center", style="blue")
table.add_column("customers", justify="center", style="green")
table.add_column("suppliers", justify="center", style="yellow")

table.add_row("78", "40", "02") 

console.print(table)