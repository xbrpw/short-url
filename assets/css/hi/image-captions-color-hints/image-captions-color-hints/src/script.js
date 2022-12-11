document
  .querySelectorAll('input')
  .forEach(input => {
    input.addEventListener('input', e =>
      document.body.style.setProperty(
        '--'+e.target.id, 
        e.target.value + '%'
      ))
  })