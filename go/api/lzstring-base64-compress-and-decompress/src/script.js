var encode = document.getElementById('encode'),
    decode = document.getElementById('decode'),
    output = document.getElementById('output'),
    input = document.getElementById('input');


encode.onclick = function() {
// Takes a plaintext input, compresses it with LZ and encodes in Base64.
  var $str = LZString.compressToBase64(input.value);
  display($str);
}
    
decode.onclick = function() {
// Takes a Base64-encoded, LZ-compressed string and converts to plaintext.
  var $str = LZString.decompressFromBase64(input.value)
  display($str);
}

function display(value)
{
  //Displays the output, and copies it to the clipboard if the option is checked.
  output.innerHTML = value;
  if (clipboard.checked)
  {
    const el = document.createElement('textarea');
    el.value = value;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
