$( "#checkbox-1" ).checkboxradio();
$('#form').validate({
  submitHandler: function(form) {
    window.location.href = './success.html'
  }
 });

