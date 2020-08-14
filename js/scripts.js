$(document).ready(function() {
  console.log("Script executing!");
  $("#form0ne").submit(function(event){
    event.preventDefault();
    const subject = $("input:radio[name=subject]:checked").val();
    const punctuation = $("input:radio[name=punctuation]:checked").val();
    const color = $("input:radio[name=color]:checked").val();
    const area = $("input:radio[name=area]:checked").val();
    const weather = $("input:radio[name=weather]:checked").val();
    const name = $("input#firstName").val();

    

    if (subject === "object-oriented" && punctuation === ";" && color === "green" && area === "frontend" && weather === "rain") {
      $("#output").text(`${name}, your suggested language is Java!`);
    } else if (color === "green" || area === "backend") {
      $("#output").text(`${name}, your suggested language is Ruby!`);
    } else if (subject === "object-oriented" && color === "blue") {
      $("#output").text(`${name}, your suggested language is Javascript!`);
    } else if (color === "red") {
      $("#output").text(`${name}, your suggested language is Python!`);
    } else {
      $("#output").text(`${name}, your suggested language is...any language! Just get started today!`);
    }


  });
});
