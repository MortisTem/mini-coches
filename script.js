const cars = [
  { name: "Lamborghini Veneno Roadster", price: 8527000 },
  { name: "BMW M4 GT3", price: 415000 },
  { name: "McLaren Senna", price: 1700000 },
  { name: "Porsche 911 GT3 RS", price: 286000 }
];

function filterByPrice(list, maxPrice) {
  return list.filter(car => car.price <= maxPrice);
}

function renderCars(list) {
  const ul = document.getElementById("carList");
  ul.innerHTML = "";

  list.forEach(car => {
    const li = document.createElement("li");
    li.textContent = car.name + " - " + car.price + "€";
    ul.appendChild(li);
  });
}

function handleFilter() {
  const max = Number(document.getElementById("maxPrice").value);
  renderCars(filterByPrice(cars, max));
}

//Esto es para que al cargar la página se muestren todos los coches sin necesidad de filtrar.
renderCars(cars);