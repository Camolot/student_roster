$(document).ready(function() {
  $("form#pizza").submit(function(event) {

    var quantity = parseInt($("input#quantity").val());
    var topping = parseInt($("input#topping").val());
    var size = parseInt($("input#size").val());

    var x = document.getElementById("myRadio").value;
    var y = size;
    var z = quantity;

    var total = (x + y) * z;
    document.getElementById("pizza").innerHTML = total;
  })
})
