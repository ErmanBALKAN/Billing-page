const nav = document.querySelectorAll(".menu li");
const navEl = document.querySelectorAll(".menu li a");

console.log(navEl);

nav.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    nav.forEach((remove) => {
      remove.classList.remove("active");
    });
    element.classList.add("active");
  });
});

navEl.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    navEl.forEach((del) => {
      del.classList.remove("active");
    });
    element.classList.add("active");
  });
});
