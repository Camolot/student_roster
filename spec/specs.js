describe('pizza', function() {

    //quantity
    //topping
    //size

    it("it determines the cost of pepperoni", function() {
      expect(pizza("pepperoni")).to.equal("$.50");
    });
});
