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

const renderFoodCards = (food) => {
  const foodContainer = document.querySelector(".foods-container");
  const html = `
        <div class="food-card">
          <div class="food-title">
            <img
              alt="${food.title}"
              src="${food.img}"
              class="food-img"
            />
            <div class="description">
              <h4>${food.title}</h4>
              <span>${food.description}</span>
            </div>
          </div>
          <div class="food-qty">
            <span class="qty">${food.qty}</span>
            <div class="buttons-container">
              <a class="up-arrow" data-pizza="${food.id}">
                <img alt="up-arrow" src="${arrowUp}" />
              </a>
              <a class="down-arrow" data-pizza="${food.id}">
                <img alt="down-arrow" src="${arrowDown}" />
              </a>
            </div>
            <span class="price">${food.price}</span>
          </div>
        </div>
  `;
  foodContainer.insertAdjacentHTML("beforeend", html);

  const upArrows = document.querySelectorAll(".up-arrow");
  const downArrows = document.querySelectorAll(".down-arrow");

  upArrows.forEach((upArrow) =>
    upArrow.addEventListener("click", function () {
      const id = this.dataset.pizza;
      const thePizza = foods.find((food) => food.id == id);
      if (thePizza) {
        thePizza.qty++;
      }
      const pizzaIndex = foods.findIndex((food) => food.id == id);
      const updatedFoodsSplice = [...foods];
      updatedFoodsSplice.splice(pizzaIndex, 1, thePizza);

      generateFoods(updatedFoodsSplice);
    })
  );

  downArrows.forEach((downArrow) =>
    downArrow.addEventListener("click", function () {
      const id = this.dataset.pizza;
      const thePizza = foods.find((food) => food.id == id);
      if (thePizza && thePizza.qty > 1) {
        thePizza.qty--;
      }
      const pizzaIndex = foods.findIndex((food) => food.id == id);
      const updatedFoodsSplice = [...foods];
      updatedFoodsSplice.splice(pizzaIndex, 1, thePizza);

      generateFoods(updatedFoodsSplice);
    })
  );
};

const generateFoods = (foods) => {
  const foodContainer = document.querySelector(".foods-container");
  foodContainer.innerHTML = "";
  foods.forEach((food) => renderFoodCards(food));
};

generateFoods(foods);
