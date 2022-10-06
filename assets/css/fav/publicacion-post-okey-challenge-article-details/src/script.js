const hero = document.querySelector(".hero");
const nav = document.querySelector(".nav");
const items = [...document.querySelectorAll(".item")];
const sections = document.querySelectorAll(".section");
const firstSection = document.querySelector(".intro a");

const scrollOptions = {
  rootMargin: "50% 0px 0px 0px"
};

const listOptions = {
  rootMargin: "0px 0px -90% 0px"
};

const sectionObserver = new IntersectionObserver(function (
  entries,
  sectionObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("show");
    } else {
      nav.classList.remove("show");
    }
  });
},
scrollOptions);

const listObserver = new IntersectionObserver(function (entries, listObserver) {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      if (e.target.id === "") return;

      items.forEach((link) => {
        if (e.target.id === link.dataset.nav) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
}, listOptions);

sectionObserver.observe(hero);

sections.forEach((item) => {
  listObserver.observe(item);
});
