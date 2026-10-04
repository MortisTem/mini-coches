/**
 *Lista de coches de ejemplo que se muestran en la página.
 *@type {Array<{name: string, price: number}>}
 */
const cars = [
  { name: "Lamborghini Veneno Roadster", price: 8527000 },
  { name: "BMW M4 GT3", price: 415000 },
  { name: "McLaren Senna", price: 1700000 },
  { name: "Porsche 911 GT3 RS", price: 286000 }
];

/**
 *Filtra los coches que cuestan menos o igual que un precio máximo.
 *@param {Array<{name: string, price: number}>} list - Lista de coches a filtrar.
 *@param {number} maxPrice - Precio máximo permitido.
 *@returns {Array<{name: string, price: number}>} Coches que cumplen el precio.
 */
function filterByPrice(list, maxPrice) {
  return list.filter(car => car.price <= maxPrice);
}

/**
 *Muestra una lista de coches en la página, reemplazando el contenido anterior.
 *@param {Array<{name: string, price: number}>} list - Coches a mostrar.
 *@returns {void}
 */
function renderCars(list) {
  const ul = document.getElementById("carList");
  ul.innerHTML = "";

  list.forEach(car => {
    const li = document.createElement("li");
    li.textContent = car.name + " - " + car.price + "€";
    ul.appendChild(li);
  });
}

/**
 *Lee el precio máximo del input y muestra los coches filtrados.
 *Se ejecuta cuando el usuario pulsa el botón "Filtrar".
 *@returns {void}
 */
function handleFilter() {
  const max = Number(document.getElementById("maxPrice").value);
  renderCars(filterByPrice(cars, max));
}

//Esto es para que al cargar la página se muestren todos los coches sin necesidad de filtrar.
renderCars(cars);