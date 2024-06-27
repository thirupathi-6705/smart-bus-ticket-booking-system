// Define an array of available buses (dummy data)
const buses = [
    { id: 1, name: "Bus A", destination: "City Center" },
    { id: 2, name: "Bus B", destination: "Suburbia" },
    { id: 3, name: "Bus C", destination: "Beachside" }
  ];
  
  // Function to display the available buses
  function displayBuses() {
    const busListElement = document.getElementById("busList");
  
    // Clear previous bus list
    busListElement.innerHTML = "";
  
    // Create a list element for each bus
    const ul = document.createElement("ul");
    buses.forEach(bus => {
      const li = document.createElement("li");
      li.textContent = `${bus.name} - Destination: ${bus.destination}`;
      ul.appendChild(li);
    });
  
    // Append the list to the busListElement
    busListElement.appendChild(ul);
  }
  
  // Add a click event listener to the "Find Buses" button
  const findBusesButton = document.getElementsByClassName("button");
  findBusesButton.addEventListener("click", displayBuses);
  