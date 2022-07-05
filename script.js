// let totalPrice = 0.0;

// const displayedTotal = document.querySelector("p");
// const limeButton = document.querySelector(".lime-cola");
// const peanutButton = document.querySelector(".salted-peanuts");
// const chocolateButton = document.querySelector(".chocolate-bar");
// const fruitButton = document.querySelector(".fruit-gummies");

// limeButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   totalPrice += 2;
//   displayedTotal.textContent = `Total: $${totalPrice}.00`;
// });

// peanutButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   totalPrice += 3;
//   displayedTotal.textContent = `Total: $${totalPrice}.00`;
// });

// chocolateButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   totalPrice += 4;
//   displayedTotal.textContent = `Total: $${totalPrice}.00`;
// });

// fruitButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   totalPrice += 6;
//   displayedTotal.textContent = `Total: $${totalPrice}.00`;
// });

const coinForm = document.querySelector("form");
const coinContainer = document.querySelector(".coinBase");

coinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let quantity = document.querySelector("#quantity").value;
  let coinType = document.querySelector("#coin").value;
  for (let i = 0; i < quantity; i++) {
    const newCoin = document.createElement("li");
    newCoin.classList.add(coinType);
    newCoin.textContent = coinType;
    coinContainer.append(newCoin);
  }
});

// const lightParent = document.querySelector(".light-parent");

// const lightChild = document.querySelector(".light-child");

// const light = document.querySelector(".light");

// const onButton = document.querySelector(".on");

// const offButton = document.querySelector(".off");

// const toggleButton = document.querySelector(".toggle");

// const endButton = document.querySelector(".end");

// onButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   light.classList.add("lit");
// });

// offButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   light.classList.remove("lit");
// });

// toggleButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   light.classList.toggle("lit");
// });

// endButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   lightParent.removeChild(lightChild);
//   onButton.setAttribute("disabled", "true");
//   offButton.setAttribute("disabled", "true");
//   toggleButton.setAttribute("disabled", "true");
//   endButton.setAttribute("disabled", "true");
// });
