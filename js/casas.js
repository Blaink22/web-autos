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
    zone: "Paleto, frente a polleria",
    type: "#504",
    price: "$17.000",
    image: "https://i.postimg.cc/W4w7WndT/screenshot-266.png"
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
    zone: "Paleto, frente a polleria",
    type: "#504",
    price: "$17.000",
    image: "https://i.postimg.cc/W4w7WndT/screenshot-266.png"
  },
  {
    name: "Casa Sin Garage",
    zone: "Paleto, frente a polleria",
    type: "#504",
    price: "$17.000",
    image: "https://i.postimg.cc/W4w7WndT/screenshot-266.png"
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
