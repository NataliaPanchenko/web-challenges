console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  const documentHeight = document.body.clientHeight;
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const percent = 100;
  const actualScroll = documentHeight - windowHeight;
  const progressPercentage = (scrollY / actualScroll) * percent;
  return progressPercentage;
}

document.addEventListener("scroll", () => {
  scrollPercentage = calculateScrollPercentage();
  progressBar.style.width = `${scrollPercentage}%`;
});
