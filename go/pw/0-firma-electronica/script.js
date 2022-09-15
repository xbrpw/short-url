// Uses jSignature for signature imput: https://willowsystems.github.io/jSignature/

$('#signature').jSignature({
  width: '100%',
  height: 350
});
var $sigdiv = $('#signature');
var datapair = $sigdiv.jSignature('getData', 'svgbase64');

$('#signature').bind('change', function(e) {
  var data = $('#signature').jSignature('getData');
  $("#signature_capture").val(data);
  $("#help").slideDown(300);
});

$('#reset').click(function(e){
  $('#signature').jSignature('clear');
  $("#signature_capture").val('');
  //$("#help").slideUp(300);
  e.preventDefault();
});