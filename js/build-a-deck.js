$(document).ready(function(){
  event.preventDefault();
  var suits = ["hearts", "spades", "diamonds", "clubs"];
  var values = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"];
  var cards = [];
  suits.forEach(function(suit) {
    values.forEach(function(value) {
      cards.push(value+" of "+suit);
    });
  });
  cards.forEach(function(card) {
    $("ul").append("<li>"+card+"</li>")
  });
});
