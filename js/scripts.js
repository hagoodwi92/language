$(document).ready(function() {
  $("#form0ne").submit(function(event){
    event.preventDefault();
    const subject = $("input:radio[name=subject]:checked").val();

    $("#output").text(subject);

    // $("#story").show();
  });
});
