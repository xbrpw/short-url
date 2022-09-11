var field = document.querySelectorAll('[data-persist]')
for (i=0;i<field.length;i++){
  var stored = localStorage.getItem(field[i].getAttribute('data-persist'))
  if (stored) field[i].value = stored
  field[i].addEventListener('input',function(){
    localStorage.setItem(this.getAttribute('data-persist'),this.value)
  })
}