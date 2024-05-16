let stacks = ["Javascript", "Vue", "Node.js", "AWS", "Docker"];

const slide = document.querySelector(".slide");
const result = document.querySelector(".result");

stacks.forEach((target) => {
  const stack = document.createElement("div");

  stack.innerText = target;
  stack.className = "bubble";
  stack.addEventListener("click", clickBubble);
  slide.appendChild(stack);
});

function clickBubble(event) {
  const { target } = event;

  target.remove();

  const stack = document.createElement("div");

  stack.innerText = target.innerText;
  result.appendChild(stack);

  if (slide.childElementCount === 0) {
    const empty = document.createElement("div");

    empty.innerText = "You're Full!";
    empty.className = "empty";

    slide.appendChild(empty);
  }
}
