// todo
const button = document.createElement("button");
button.textContent = "button";

button.onclick = () => {
  alert("You clicked the button!");
};

document.body.appendChild(button);
