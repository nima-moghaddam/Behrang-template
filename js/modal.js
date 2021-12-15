const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");

const icon = document.querySelectorAll(".shoppig_icon");
const button1 = document.querySelector(".submit_btn1");
const button2 = document.querySelector(".submit_btn2");

const increase = document.querySelector(".increase-num-modal");
const decrease = document.querySelector(".decrease-num-modal");
const itemNum = document.querySelector(".item-num-modal");

icon.forEach((n) => n.addEventListener("click", openModal));
button1.addEventListener("click", closeModal);
button2.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

increase.addEventListener("click", () => {
  itemNum.innerHTML++;
});
decrease.addEventListener("click", () => {
  if (itemNum.innerHTML <= 0) {
    return;
  }
  itemNum.innerHTML--;
});

function openModal() {
  modal.classList.toggle("active");
  backdrop.classList.toggle("active");
}

function closeModal() {
  modal.classList.remove("active");
  backdrop.classList.remove("active");
}
