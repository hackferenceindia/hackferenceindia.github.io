var $form = $('form#contact-form'),
    url = ''

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeJSON(),
  }).success(document.getElementById("form-will-change-text").innerHTML='<span class="text" style="color: #FFFFFF">Thank you for contacting us, we will get back to you shortly</span>');
})
