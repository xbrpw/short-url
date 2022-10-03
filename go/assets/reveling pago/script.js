$("[name='payment']").on("change", function() {
  var selector = $(this).data("target");
  $(".payment-type").slideUp();
  $(selector).slideDown();
});