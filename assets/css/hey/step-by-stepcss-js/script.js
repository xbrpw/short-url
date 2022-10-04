const slidePage = document.querySelector('.slidepage');
      const firstNextBtn = document.querySelector('.nextBtn');

      const prevBtnSec = document.querySelector('.prev-1');
      const nextBtnSec = document.querySelector('.next-1');

      const prevBtnThird = document.querySelector('.prev-2');
      const nextBtnThird = document.querySelector('.next-2');

      const prevBtnFourth = document.querySelector('.prev-3');
      const submitBtn = document.querySelector('.submit');

      const bullet = document.querySelectorAll('.step .bullet');
      const progressText = document.querySelectorAll('.step p');
      const progressCheck = document.querySelectorAll('.step .check');

      let max = 4;
      let current = 1;


      // Next
      firstNextBtn.addEventListener('click', function(e)
      {
        slidePage.style.marginLeft = '-25%';
        bullet[current - 1].classList.add('active');
        progressText[current - 1].classList.add('active');
        progressCheck[current - 1].classList.add('active');
        current++;
      });

      nextBtnSec.addEventListener('click', function(e)
      {
        slidePage.style.marginLeft = '-50%';
        bullet[current - 1].classList.add('active');
        progressText[current - 1].classList.add('active');
        progressCheck[current - 1].classList.add('active');
        current++;
      });

      nextBtnThird.addEventListener('click', function(e)
      {
        slidePage.style.marginLeft = '-50%';
        bullet[current - 1].classList.add('active');
        progressText[current - 1].classList.add('active');
        progressCheck[current - 1].classList.add('active');
        current++;
      });

      submitBtn.addEventListener('click', function(e)
      {
        bullet[current - 1].classList.add('active');
        progressText[current - 1].classList.add('active');
        progressCheck[current - 1].classList.add('active');
        current++;
      });


      // Prev
      prevBtnSec.addEventListener('click', function(e)
      {
        slidePage.style.marginLeft = '0%';
        bullet[current - 2].classList.remove('active');
        progressText[current - 2].classList.remove('active');
        progressCheck[current - 2].classList.remove('active');
        current--;
      });

      prevBtnThird.addEventListener('click', function(e)
      {
        slidePage.style.marginLeft = '-25%';
        bullet[current - 2].classList.remove('active');
        progressText[current - 2].classList.remove('active');
        progressCheck[current - 2].classList.remove('active');
        current--;
      });

      prevBtnFourth.addEventListener('click', function(e)
      {
        slidePage.style.marginLeft = '-50%';
        bullet[current - 2].classList.remove('active');
        progressText[current - 2].classList.remove('active');
        progressCheck[current - 2].classList.remove('active');
        current--;
      });