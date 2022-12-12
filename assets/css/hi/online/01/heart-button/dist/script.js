document.querySelectorAll('.like').forEach((button) => {

   button.addEventListener('click', (e) => {
      let number = button.children[2].textContent;

      if (!button.classList.contains('active')) {
         button.classList.add('active');
         button.children[2].textContent = parseInt(number) + 1;
      } else {
         button.classList.remove('active');
         button.children[2].textContent = parseInt(number) - 1;
      }

   });
});