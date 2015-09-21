var pizza = function(numeric) {

    // var topping = 1.5;
    // var size = 3.5;
    // var quantity = parseInt(document.getElementById('getQuantity'),value, 10);
    // var quantity = 3;

    $(document).ready(function() {
      $("form#pizzaForm").submit(function(event) {
        var topping = parseInt($("input#topping").val());
        var size = parseInt($("input#size").val());
        var quantity = parseInt($("input#quantity").val());
        var total = (topping + size) * quantity;
        var result = pizzaTotal(total);

        $(".numeric").text(numeric);
        if (!result) {
          $(".not").text("not");
        }

        $("#result"),show();
        event.preventDefault();
      })
    })

    // var total = (topping + size) * quantity
    return total;
}
