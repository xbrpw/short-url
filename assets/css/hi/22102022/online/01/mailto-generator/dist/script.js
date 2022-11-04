function buildString(){
  var email = document.getElementById('to'),
      to = email.value,
      subject = encodeURIComponent(document.getElementById('subject').value),
      body = encodeURIComponent(document.getElementById('body').value),
      link = document.getElementById('link'),
      message = ''
  if (to){
    email.className = 'not'
    message = 'mailto:'+to
    subject||body?message+='?':false
    subject?message+='subject='+subject:false
    subject&&body?message+='&body='+body:false
    !subject&&body?message+='body='+body:false
    link.innerHTML = message
  } else {
    email.className='error'
    notification('Please enter a recipient email address','error',5)
    email.focus()
  }
}