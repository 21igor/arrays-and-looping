$(document).ready(function() {
  var things = [];
  $("form").submit(function(event) {
    event.preventDefault();
    var t = $("#thing").val();
    things.push(t);

    if(things.length >= 3) {
      var newThings = [];
      newThings.push(things[1]);
      newThings.push(things[0]);
      newThings.push(things[2]);

      newThings.push(things[0]);
      newThings.push(things[1]);
      newThings.push(things[2]);

      newThings.forEach(function(number) {
        $('ul').append("<li>"+number+"</li>");
      });

    }
  });
});
