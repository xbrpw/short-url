const email = document.querySelector('.form_email');
const notify = document.querySelector('.form_btn');
const expression = /^([a-zA-Z0-9_\-\.]+)@([a-zA-z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const validate = document.querySelector('.form_validate');

notify.addEventListener('click', function(){
    if(!expression.test(email.value)) {
        email.classList.add('invalid');
	validate.innerHTML = 'Please provide a valid email address';
	validate.style.color = 'hsl(354, 100%, 66%)';
    } 
    else {
        email.classList.remove('invalid');
        validate.innerHTML = 'Hehe! Thank you';
        validate.style.color = 'hsl(223, 100%, 88%)';
    }
});