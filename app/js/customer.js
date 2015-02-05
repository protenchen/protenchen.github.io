$(document).ready(function() {
  $("#addCustomer").click(function() {
    $("#customerInformation").hide();
    $("#editForm").hide();
    $("#informationForm").show();
  });
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








  $( "form" ).submit(function( event ) {
    console.log( $( this ).serializeArray() );
    event.preventDefault();
  });
})
