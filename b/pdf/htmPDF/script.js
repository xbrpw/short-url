$(document).ready(function() {
  $(".btn").click(function() {
    var doc = new jsPDF("p", "pt", "letter"),
        source = $("#template_invoice")[0],
        margins = {
          top: 40,
          bottom: 60,
          left: 40,
          width: 522
        };
    doc.fromHTML(
      source, // HTML string or DOM elem ref.
      margins.left, // x coord
      margins.top,
      {
        // y coord
        width: margins.width // max width of content on PDF
      },
      function(dispose) {
        // dispose: object with X, Y of the last line add to the PDF
        //          this allow the insertion of new lines after html
        doc.save("orden-de-compra-test.pdf");
      },
      margins
    );
  });
});