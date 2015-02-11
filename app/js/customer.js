$(document).ready(function() {
  $("#cancel_Add").click(function() {
    $("#informationForm").hide();
  });

  $('#editCustomer').click(function() {
    $("#customerInformation").hide();
    $("#editForm").show();
  });

  $("#cancel_Edit").click(function() {
    $("#editForm").hide();
    $("#customerInformation").show();
  });

})
