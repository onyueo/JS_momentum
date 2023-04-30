const images = ["window0.jpg", "window1.jpg", "window2.jpg","window3.jpg", "window4.jpg","window5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const click = document.createElement("img");

click.src = `img/${chosenImage}`;

document.body.appendChild(click);

const homeBtn = document.querySelector(".window_out")

homeBtn.insertAdjacentElement("afterbegin", click);
