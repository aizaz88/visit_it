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

let count = 0;
noButton.addEventListener("click", () => {
  const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
  count++;
  if (count < 3) {
    document.querySelector("h1").textContent =
      "Please Please Pleas thorri dair bsss.....🥺🥺🥺🥺🥺";
    //message.textContent = "Please Please Pleas thorri dair bsss.....🥺🥺🥺🥺🥺";
  } else {
    document.querySelector("h1").textContent = "Mann jayn naw ab....😭😭😭😭";
    // message.textContent = "Mann jayn naw ab....🥺🥺🥺🥺🥺";
  }
});
