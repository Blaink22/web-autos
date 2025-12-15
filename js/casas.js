const houses = [
  {
    name: "Casa Sin Garage",
    zone: "Paleto, frente a polleria",
    type: "#334",
    price: "$17.000",
    image: "https://i.postimg.cc/rwqQ23x1/screenshot-263.png"
  },
  {
    name: "Casa Sin Garage",
    zone: "Exterior de ciudad, cercano a 5009",
    type: "#368",
    price: "$15.000",
    image: "https://i.postimg.cc/fRxnBGZy/screenshot-264.png"
  },
  {
    name: "Casa Sin Garage",
    zone: "Paleto 1058",
    type: "#470",
    price: "$16.000",
    image: "https://i.postimg.cc/C10Qd5qS/screenshot-265.png"
  },
  {
    name: "Casa Sin Garage",
    zone: "Paleto, frente a polleria",
    type: "#504",
    price: "$17.000",
    image: "https://i.postimg.cc/W4w7WndT/screenshot-266.png"
  },
  {
    name: "Casa Sin Garage",
    zone: "Paleto 1045",
    type: "#533",
    price: "$17.000",
    image: "https://i.postimg.cc/ZYBf8XrD/screenshot-267.png"
  },
  {
    name: "Casa Sin Garage",
    zone: "Sulfu Zona Roja 8227",
    type: "#672",
    price: "$19.000",
    image: "https://i.postimg.cc/X7Ddsv4r/screenshot-268.png"
  },
  {
    name: "Casa Sin Garage",
    zone: "Paleto frente a polleria 1025",
    type: "#718",
    price: "$15.000",
    image: "https://i.postimg.cc/1R8vPbX7/screenshot-269.png"
  },
  {
    name: "Casa Sin Garage",
    zone: "A 2 cuadras de Flecca Ayunta 7117",
    type: "#751",
    price: "$15.000",
    image: "https://i.postimg.cc/DzcMJs3S/screenshot-270.png"
  },
  {
    name: "Casa Sin Garage",
    zone: "Paleto, frente a polleria",
    type: "#761",
    price: "$15.000",
    image: "https://i.postimg.cc/XN5DdTb1/screenshot-271.png"
  },
  {
    name: "Casa Sin Garage",
    zone: "Frente a GC",
    type: "#854",
    price: "$18.000",
    image: "https://i.postimg.cc/nhhy40Ty/screenshot-272.png"
  },
  {
    name: "Casa Sin Garage",
    zone: "Paleto, frente a polleria",
    type: "#761",
    price: "$15.000",
    image: "https://i.postimg.cc/XN5DdTb1/screenshot-271.png"
  },
  {
    name: "Casa Sin Garage",
    zone: "Paleto, frente a polleria",
    type: "#761",
    price: "$15.000",
    image: "https://i.postimg.cc/XN5DdTb1/screenshot-271.png"
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
