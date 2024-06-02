"use strict";

import arrowDown from "../assets/icons/down-arrow.svg";
import arrowUp from "../assets/icons/up-arrow.svg";

const foods = [
  {
    id: 1,
    title: "Italy Pizza",
    description: "Extra cheese and toping",
    qty: 1,
    price: "$70",
    img: "https://www.eatingwell.com/thmb/k3RhYf4XhAeqAejYjdInOlSOp6I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-1124303516-36413b5bf61f45f1b7d18d90000b56b7.jpg",
  },
  {
    id: 2,
    title: "Peperoni",
    description: "More cheese",
    qty: 2,
    price: "$89",
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2023/03/Chocolate-pizza-a24aff9.jpg?quality=90&resize=556,505",
  },
  {
    id: 3,
    title: "Margarita",
    description: "Goje",
    qty: 2,
    price: "$19",
    img: "https://www.cookwell.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg1s4qnmz%2Fproduction%2Fa6a84545aaf73d39520db766e93086fae9552eb8-2637x2637.jpg&w=3840&q=75",
  },
];

const renderFoodCards = () => {
  const foodContainer = document.querySelector(".foods-container");
  foodContainer.innerHTML = "";

  foods.forEach((food) => {
    // Creating food card
    const card = document.createElement("div");
    card.className = "food-card";

    // Creating food title
    const foodTitle = document.createElement("div");
    foodTitle.className = "food-title";

    // Creating img
    const img = document.createElement("img");
    img.setAttribute("alt", food.title);
    img.setAttribute("src", food.img);
    img.className = "food-img";

    // Creating description
    const description = document.createElement("div");
    description.className = "description";
    // Creating description's title
    const title = document.createElement("h4");
    title.textContent = food.title;
    // Creating description's subtitle
    const subtitle = document.createElement("span");
    subtitle.textContent = food.description;

    // Creating food quantity section
    const foodQty = document.createElement("div");
    foodQty.className = "food-qty";

    const qty = document.createElement("span");
    qty.className = "qty";
    qty.innerText = food.qty;
    qty.id = `quantity-${food.id}`;

    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttons-container";

    const buttonUp = document.createElement("a");
    buttonUp.className = "up-arrow";
    const imgUp = document.createElement("img");
    imgUp.setAttribute("alt", "up-arrow");
    imgUp.setAttribute("src", arrowUp);
    buttonUp.addEventListener("click", function () {
      updateQuantity(food.id, 1);
    });

    const buttonDown = document.createElement("a");
    buttonDown.className = "down-arrow";
    buttonDown.addEventListener("click", function () {
      updateQuantity(food.id, -1);
    });
    const imgDown = document.createElement("img");
    imgDown.setAttribute("alt", "down-arrow");
    imgDown.setAttribute("src", arrowDown);

    const price = document.createElement("span");
    price.innerText = food.price;
    price.className = "price";

    // Appending children for HTML tags
    card.appendChild(foodTitle);
    foodTitle.appendChild(img);
    foodTitle.appendChild(description);
    description.appendChild(title);
    description.appendChild(subtitle);

    foodQty.appendChild(qty);
    foodQty.appendChild(buttonsContainer);
    foodQty.appendChild(price);
    buttonUp.appendChild(imgUp);
    buttonDown.appendChild(imgDown);
    buttonsContainer.appendChild(buttonUp);
    buttonsContainer.appendChild(buttonDown);

    card.appendChild(foodQty);

    foodContainer.appendChild(card);
  });
};

const updateQuantity = (productId, change) => {
  const food = foods.find((f) => f.id == productId);
  if (food) {
    food.qty += change;
    if (food.qty < 0) {
      food.qty = 0;
    }
    document.getElementById(`quantity-${productId}`).textContent = food.qty;
  }
};

renderFoodCards();
