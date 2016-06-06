$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    var groceries = [];
    var ids = ["0","1","2","3","4"];

    ids.forEach(function(id) {
      groceries.push($("#"+id).val().toUpperCase());
    });
    groceries.sort();
    $("form").hide();
    groceries.forEach(function(grocery) {
      $("ul").append("<li>"+grocery+"</li>")
    });
  });
});
