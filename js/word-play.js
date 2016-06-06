$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var sentence = $("input").val();
    var sentenceArray = sentence.split(" ");
    var wordsThreeOrMore = [];
    sentenceArray.forEach(function(word) {
      if(word.length >= 3) {
        wordsThreeOrMore.push(word);
      }
    });
    var resultArray = wordsThreeOrMore.reverse();
    var result = resultArray.join(" ");
    $("p").text(result);
  });
});
