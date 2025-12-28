console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const post = document.createElement("article");
const content = document.createElement("p");
const footer = document.createElement("footer");
const span = document.createElement("span");
const button = document.createElement("button");

post.classList.add("post");
content.classList.add("post__content");
content.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
footer.classList.add("post__footer");
span.classList.add("post__username");
span.textContent = "@username";
button.classList.add("post__button");
button.type = "button";
button.setAttribute("data-js", "like-button");
button.textContent = "♥ Like";

button.addEventListener("click", handleLikeButtonClick);

post.append(content, footer);
footer.append(span, button);

document.body.append(post);

// Exercise:
// Use document.createElement() and append another social media post to the body.
