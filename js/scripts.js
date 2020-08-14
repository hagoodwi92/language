$(document).ready(function() {
  console.log("Script executing!");
  $("#form0ne").submit(function(event){
    event.preventDefault();
    const subject = $("input:radio[name=subject]:checked").val();
    const punctuation = $("input:radio[name=punctuation]:checked").val();
    const color = $("input:radio[name=color]:checked").val();
    const area = $("input:radio[name=area]:checked").val();
    const weather = $("input:radio[name=weather]:checked").val();

    if (subject === "object-oriented" && punctuation === ";" && color === "blue" && area === "backend" && weather === "rain") {
      $("#output").text("Your suggested language is Java!");
    } else if (color === "green") {
      $("#output").text("Your suggested language is Ruby!");
    } else if (subject === "object-oriented" && area === "backend") {
      $("#output").text("Your suggested language is Javascript!");
    } else if (color === "red") {
      $("#output").text("Pick whichever you like! We aren't sure for you!");
    } else {
      alert("error");
    }


    //$("#output").text(subject);

    
  });
});
