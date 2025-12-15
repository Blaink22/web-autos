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
    name: "Casa Con Garage",
    zone: "Sandy 3015",
    type: "#888",
    price: "$20.000",
    image: "https://i.postimg.cc/SsLBk5DP/screenshot-274.png"
  },
  {
    name: "Casa Sin Garage",
    zone: "Paleto 1024",
    type: "#896",
    price: "$15.000",
    image: "https://i.postimg.cc/yYNmHbPf/screenshot-275.png"
  },
  {
    name: "Casa Sin Garage",
    zone: "Paleto 1024 (puerta)",
    type: "#900",
    price: "$15.000",
    image: "https://i.postimg.cc/QxsT8nJk/screenshot-276.png"
  },
  {
    name: "Casa Sin Garage",
    zone: "Paleto 1028",
    type: "#925",
    price: "$15.000",
    image: "https://i.postimg.cc/Vv7mc6FH/screenshot-277.png"
  },
  {
    name: "Casa Con Garage",
    zone: "Cerca de Sulfu 8102",
    type: "#969",
    price: "$22.000",
    image: "https://i.postimg.cc/hj52WRmg/screenshot-278.png"
  },
  {
    name: "Casa Con Garage",
    zone: "Cerca del Same 9336",
    type: "#978",
    price: "$21.000",
    image: "https://i.postimg.cc/xCJ4ddYt/screenshot-279.png"
  },
  {
    name: "Casa Sin Garage",
    zone: "Cercano a Sulfu 8214",
    type: "#999",
    price: "$18.000",
    image: "https://i.postimg.cc/TYCqZ6v9/screenshot-280.png"
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
