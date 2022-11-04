$( function() {
  
  const { jsPDF } = window.jspdf;
// Default export is a4 paper, portrait, using millimeters for units



const doc = new jsPDF({
 unit: 'px',
 format: [500,500],
 floatPrecision: 16 // or "smart", default is 16
});





document.getElementById("download").addEventListener("click", function() {
  $('#sortable2 li').each(function(index) {
   if (index != 0) {
     doc.addPage([500,500]);
   } doc.addImage($(this).find("img").attr("src"),"JPEG",0,0,500,500);
    //console.log($(this).find("img").attr("src"));
  })
  doc.save("a4.pdf");
});


    $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();


lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    }) 


} );