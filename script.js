const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const message = document.getElementById("message");

yesButton.addEventListener("click", () => {
  message.textContent =
    "ThankU USWA! You made my day! Aaa jayn insta prrr ❤️❤️";
  noButton.classList.add("hide");
  document.querySelector("h1").textContent = "❤️❤️❤️❤️";
  yesButton.classList.add("hide");
});

noButton.addEventListener("click", () => {
  const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
  message.textContent =
    "Please Please Please...🥺🥺🥺🥺";
});
