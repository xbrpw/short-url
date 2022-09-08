const $textarea = document.getElementById('js-textarea');
const $display = document.getElementById('js-textdisplay');
const $charcount = document.getElementById('js-charcount');

function updateDisplay(event) {
  // get the textarea content
  const text = event.target.value
  const limit = 20
  
  let output = text
  let charcount = `${text.length}/${limit}`
  
  // if the text is longer than a certain limit
  if (text.length > limit) {
    
    // split it into two parts
    let contentText = text.substr(0, limit)
    let overflowText = text.substr(limit)
    
    // wrap the overflow part in a <mark> tag
    output = contentText + `<mark class="overflow">${overflowText}</mark>`
    charcount = `<mark class="overflow">${text.length}</mark>/${limit}`
  }
    
  // write the output to the DOM
  $charcount.innerHTML = charcount;
  $display.innerHTML = output;
}

function syncScroll() {
    $display.scrollTop = $textarea.scrollTop
}

// on every character input, sync the content
$textarea.addEventListener('input', updateDisplay)
$textarea.addEventListener('scroll', syncScroll)