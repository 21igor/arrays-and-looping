$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var text = $("#field").val().split(" ");
    var uniqueWords = [];
    text.forEach(function(word) {
      var index = uniqueWords.indexOf(word);
      if(index === -1) {
        uniqueWords.push(word);
        uniqueWords.push(1);
      } else {
        uniqueWords[index+1] ++;
      }
    });
    var frequencies = [];
    var term = "";
    uniqueWords.forEach(function(element) {
      if(typeof element === "string") {
        term = element;
      } else {
        term = term + " " + element.toString();
        frequencies.push(term);
      }
    });
    frequencies.sort(function(a,b) {
      var aInt = parseInt(a.slice(a.length-1,a.length));
      var bInt = parseInt(b.slice(b.length-1,b.length));
      if(aInt > bInt) {
        return -1;
      } else if(aInt===bInt) {
        return 0;
      } else {
        return 1;
      }
    });
    frequencies.forEach(function(term) {
      $("ul").append("<li>"+term+"</li>")
    });
  });
});
