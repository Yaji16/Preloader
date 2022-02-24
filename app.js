//A function that gets rid of the preloader when the website loads

window.addEventListener('load', () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add('preload-finish');
});
