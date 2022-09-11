gsap.registerPlugin(Flip);

const state = Flip.getState(document.querySelectorAll(".card"));
document.querySelector("#searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  Array.from(document.querySelectorAll(".card")).filter((el) =>
    el
      .querySelector(".card-title")
      .innerText.toLowerCase()
      .includes(
        document.querySelector("#searchInput").value.trim().toLowerCase()
      )
      ? el.classList.remove("d-none")
      : el.classList.add("d-none")
  );
  document.querySelector("#searchInput").value;
  Flip.from(state, {
    duration: 0.5,
    scale: true,
    absolute: true,
    ease: "power1.inOut",
  });
});