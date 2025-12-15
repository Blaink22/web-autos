const houses = [
  {
    name: "Casa Barrio Alto",
    zone: "Barrio alto",
    type: "S/G",
    price: "$20.000 – $25.000",
    image: "https://i.postimg.cc/0jZ9vYz1/house1.jpg"
  },
  {
    name: "Casa Barrio Alto",
    zone: "Barrio alto",
    type: "C/G",
    price: "$25.000 – $30.000",
    image: "https://i.postimg.cc/0jZ9vYz1/house2.jpg"
  },
  {
    name: "Casa Zona Media",
    zone: "Zona no tan solicitada",
    type: "S/G",
    price: "$15.000 – $20.000",
    image: "https://i.postimg.cc/0jZ9vYz1/house3.jpg"
  },
  {
    name: "Casa Zona Media",
    zone: "Zona no tan solicitada",
    type: "C/G",
    price: "$18.000 – $23.000",
    image: "https://i.postimg.cc/0jZ9vYz1/house4.jpg"
  }
];

const container = document.getElementById("house-container");

houses.forEach(h => {
  const card = `
    <div class="vehicle-card">
      <img src="${h.image}" alt="${h.name}">
      <h3>${h.name}</h3>
      <p class="desc">${h.zone} · ${h.type}</p>
      <p class="price">💰 ${h.price}</p>
    </div>
  `;
  container.innerHTML += card;
});
