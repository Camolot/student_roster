describe('pizza', function() {

    //quantity
    //topping
    //size

    // it("it determines the cost of pepperoni", function() {
    //   expect(pizza("pepperoni")).to.equal(1);
    // });

    it("it determines the total cost and returns the number", function() {
      expect(pizza(1.5, 3.5, 3)).to.equal(15);
    })
});
