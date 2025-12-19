console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const post = document.createElement("article");
post.classList.add("post");
const p = document.createElement("p");
p.classList.add("post__content");
p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
const footer = document.createElement("footer");
footer.classList.add("post__footer");
const span = document.createElement("span");
span.classList.add("post__username");
span.textContent = "@username";
const button = document.createElement("button");
button.classList.add("post__button");
button.type = "button";
button.setAttribute("data-js", "like-button");
button.textContent = "♥ Like";

post.append(p, footer);
footer.append(span, button);

document.body.append(post);

// Exercise:
// Use document.createElement() and append another social media post to the body.
