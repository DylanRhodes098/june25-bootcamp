document.addEventListener("DOMContentLoaded", () => {
  const dataList = document.getElementById("data-list");
  const dataForm = document.getElementById("data-form");
  const dataInput = document.getElementById("data-input");

  // Function to fetch data from the backend
  const fetchData = async () => {
    try {
      // Triggers a get request to fetch data from data.json file
      const response = await fetch("/data");
      // Converts data into usable javascript
      const data = await response.json();

      // Clear the old list before loading the page (so that it doesn't repeat the list) //
      dataList.innerHTML = ""; 
      // Loops through each item, pasting each item in a list displayed as a string //
      data.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id + ": " + JSON.stringify(item);
        dataList.appendChild(li);

        const editField = document.createElement("input");
          dataList.appendChild(editField);

        editField.addEventListener("input", async () => {
          try {
            const response = await fetch(`/data/${item.id}`, {
             method: "PUT",
            });
            if (response.ok) {
              dataInput.value = ""; // Clear input field
              fetchData(); // Refresh the list
            }
          } catch (error) {
            console.error("Error");
          }
        });
     
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        dataList.appendChild(deleteButton);

        deleteButton.addEventListener("click", async () => {
          try {
            const response = await fetch(`/data/${item.id}`, {
             method: "DELETE",
            });
            if (response.ok) {
              li.remove();
              deleteButton.remove() 
            }
          } catch (error) {
            console.error("Error");
          }
            });
      });
    } catch (error) {
      console.error("Error");
    }
  };

  // Handle form submission to add new data
  dataForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const newData = { text: dataInput.value };

    try {
      const response = await fetch("/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        dataInput.value = ""; // Clear input field
        fetchData(); // Refresh the list
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  });

  // Fetch data on page load
  fetchData();
});


