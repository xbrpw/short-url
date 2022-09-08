function generate(action){
  if (action == "example"){
    document.getElementById("input").value = "*Group 1\nOption 1\nOption 2\nOption 3\n*\n*Group 2\nOption 1\nOption 2\nOption 3\n*"
  }
  var value = document.getElementById("input").value;
  var currentStar = 0;
  var code = "<select>\n";
  if (!value) {
    return;
  }
  var alphabetical = document.getElementById("alphabetical").checked;
  value = value.split("\n");
  if (alphabetical){
    value = value.sort();
  }
  var checked = document.getElementById("useValues").checked;
  for (var i = 0; i < value.length; i++){
    var contains = value[i].match(/\*/);
    if (contains){
      currentStar++;
    }
    if (currentStar % 2 == 1 && contains){ // odd number = open
      value[i] = value[i].replace("*","");
      code += '&nbsp;&nbsp;<optgroup label="'+value[i]+'">\n';
      continue;
    }
    if (currentStar % 2 == 0 && contains){
      code += "&nbsp;&nbsp;</optgroup>\n"
      continue;
    }
    var val = "";
    if (checked){
      var val = ' value="'+value[i]+'"'
    }
    code += "&nbsp;&nbsp;&nbsp;"+"<option"+val+">"+value[i]+"</option>\n";
  }
  if (currentStar % 2 == 1){
    alert("You have not closed an astrix! (*)")
  }
  code += "</select>";
  document.getElementById("optionCode").innerHTML = code;
  if (action == "preview"){
    document.getElementById("optionPreview").innerHTML = code;
    $('#optionPreview select').attr('class','form-control')
  }
  
  
}

function generateArray(){
  var items = document.getElementById("arrayEntry").value.split("\n");
  var alphabetical = document.getElementById("alphabeticalArray").checked;
  if (alphabetical){
    items = items.sort();
  }
  var code = "[";
  var quote = $('#quoteType').val();
  for (var i = 0; i < items.length; i++){
    code += quote+items[i]+quote;
    if (i < items.length - 1){
      code += ",";
    }
  }
  code += "]";
  document.getElementById("arrayOutput").innerHTML = code;
}

function table(action){
  var trLength = $('#tableContainer tr').length;
  var tdLength = $('#tableContainer tr th').length;
  
  if (action == "newRow"){
    if (trLength > 7) return;
    var element = "";
    var length = $('#tableContainer tr:nth-child(2) td').length;
    for (var i = 0; i < length; i++){
      element += "<td contenteditable>Data</td>"
    }
    
    $('#tableContainer').append("<tr>"+element+"</tr>")
  }
  if (action == "newCol"){
    if (tdLength > 7) return;
    $('#tableContainer tr:not(:first-child)').append("<td contenteditable>Data</td>");
    $('#tableContainer tr:first-child').append('<th contenteditable style="text-align: center;">Heading</th>');
  }
  if (action == "delRow"){
    if (trLength < 3) return;
    $('#tableContainer tr:last-child').remove();
  }
  if (action == "delCol"){
    if (tdLength < 3) return;
    $('#tableContainer td:last-child').remove();
    $('#tableContainer th:last-child').remove();
  }
  
  
  if (action == "getCode"){
    var code = document.getElementById("tableContainer").innerHTML;
    code = code.replace(/contenteditable=""/g,"");
    code = code.replace(/></g,">\n<");
    document.getElementById("tableCode").innerHTML = "<table>"+code+"\n</table>";
  }
}

$('#newRowBtn').mouseenter(function(){
  var trLength = $('#tableContainer tr').length;
  if (trLength > 7) return false;
  var length = $('#tableContainer tr:nth-child(2) td').length;
  var element = "";
  for (var i = 0; i < length; i++){
    element += '<td contenteditable>Data</td>'
  }
  $('#tableContainer').append("<tr class=fake>"+element+"</tr>");
}).mouseleave(function(){
  $('.fake').remove();
})

$('#newColBtn').mouseenter(function(){
  var tdLength = $('#tableContainer tr th').length;
  if (tdLength > 7) return false;
  
  $('#tableContainer tr:not(:first-child)').append("<td class=fake contenteditable>Data</td>");
  $('#tableContainer tr:first-child').append('<th class=fake contenteditable style="text-align: center;">Heading</th>');
  
}).mouseleave(function(){
  $('.fake').remove();
})

$('#delRowBtn').mouseenter(function(){
  $('#tableContainer tr:last-child').css({
    backgroundColor: "rgba(255,0,0,0.2)",
  })
}).mouseleave(function(){
  $('#tableContainer tr:last-child').css({
    backgroundColor: "",
  })
})

$('#delColBtn').mouseenter(function(){
  $('#tableContainer td:last-child, #tableContainer th:last-child').css({
    backgroundColor: "rgba(255,0,0,0.2)",
  })
}).mouseleave(function(){
  $('#tableContainer td:last-child, #tableContainer th:last-child').css({
    backgroundColor: "",
  })
})

$('a').click(function(){
  var to = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(to).offset().top-120
  }, 500);
})

$('label').addClass("badge").addClass("badge-danger");


function beautify(){
  var code = $('#codeBeautifierInput').val();
  var htmlRegex = /\s*(<[^>]*>)/g;
  
  var finished = "";
  
  code = code.split(htmlRegex);
  for (var i = 0; i < code.length; i++){
    var open = true;
    if (code[i].match("/") > -1){
      open = false;
    }
    if (open){
      finished += "\n"+" "+" "+code[i];
    }
    if (!open){
      finished += code[i];
    }
  }
  $('#codeBeautifierOutput').val(finished);
}