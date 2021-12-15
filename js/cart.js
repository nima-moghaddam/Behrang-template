const increase = {
  cart1: document.querySelector(".increase-num-cart1"),
  cart2: document.querySelector(".increase-num-cart2"),
  cart3: document.querySelector(".increase-num-cart3"),
};
const decrease = {
  cart1: document.querySelector(".decrease-num-cart1"),
  cart2: document.querySelector(".decrease-num-cart2"),
  cart3: document.querySelector(".decrease-num-cart3"),
};
const itemNum = {
  item1: document.querySelector(".item-cart1"),
  item2: document.querySelector(".item-cart2"),
  item3: document.querySelector(".item-cart3"),
};

increase.cart1.addEventListener("click", () => {
  itemNum.item1.innerHTML++;
});

decrease.cart1.addEventListener("click", () => {
  if (itemNum.item1.innerHTML <= 0) {
    return;
  }
  itemNum.item1.innerHTML--;
});

increase.cart2.addEventListener("click", () => {
  itemNum.item2.innerHTML++;
});

decrease.cart2.addEventListener("click", () => {
  if (itemNum.item2.innerHTML <= 0) {
    return;
  }
  itemNum.item2.innerHTML--;
});

increase.cart3.addEventListener("click", () => {
  itemNum.item3.innerHTML++;
});

decrease.cart3.addEventListener("click", () => {
  if (itemNum.item3.innerHTML <= 0) {
    return;
  }
  itemNum.item3.innerHTML--;
});
