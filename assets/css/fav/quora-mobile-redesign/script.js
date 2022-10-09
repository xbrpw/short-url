const mainWrapper = document.getElementById("main-wrapper"),
      main = document.getElementById("main");

const toggleNav = () => {
  const active = mainWrapper.scrollTop === 0 ? "active" : "fixed";
  
  main.dataset.nav = main.dataset.nav === active ? "inactive" : active;
}

mainWrapper.onscroll = e => {
  if(main.dataset.nav !== "inactive") {
    main.dataset.nav = "inactive";
  }
}