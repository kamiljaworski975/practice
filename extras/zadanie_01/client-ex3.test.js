// EX 3. Let's write some tests for class methods
//  a) Something is missing for `getNextOrderNumber`. What will happened if client does not have any order as undefined 🙀
//     Write a test which verifies how it should behave, and then fix it in code!
//     The correct order number for `undefined` orders should be "ISA-#1"
//  b) `calculateDiscount` needs some tests - please write them. Notice the `ClientService` construtor!
//  c) New requirements arrived! Now if client type is `INTERNAL` he has extra +15% discount! (sums up with existing discounts)
//      Write test first, and then implement this new logic in `calculateDiscount` method (it is 1 extra `if` 😉)
//  d) Let's write 2-3 basic tests for `calculateNewOrderValue`

describe("getNextOrderNumber", () => {
  test("should generate correct number if client already made 2", () => {
    // arrange
    const service = new ClientService();

    const client = {
      orders: [100, 200],
      type: "EXTERNAL"
    };

    // act
    const actual = service.getNextOrderNumber(client);

    // assert
    if (actual === "ISA-#3") {
      return;
    } else {
      throw new Error(
        `Assertion failed! Actual="${actual}", where should be "ISA-#3"`
      );
    }
  });
});

describe("calculateDiscount", () => {
  test("should return 0 for orders less than 500", () => {
    // arrange
    const service = new ClientService();

    const client = {
      orders: [100, 50, 100, 20],
      type: "EXTERNAL"
    };

    // act
    const actual = service.calculateDiscount(client);

    // assert
    if (actual === 0) {
      return;
    } else {
      throw new Error("Assertion failed");
    }
  });

  test("should return 0.1 for orders higher than 500", () => {
    // arrange
    const service = new ClientService();

    const client = {
      orders: [100, 500, 100, 200],
      type: "EXTERNAL"
    };

    // act
    const actual = service.calculateDiscount(client);

    // assert
    if (actual === 0.1) {
      return;
    } else {
      throw new Error("Assertion failed");
    }
  });
});

test("should return 0.25 for clients type internal and orders are higher than 500", () => {
  // arrange
  const service = new ClientService();

  const client = {
    orders: [100, 500, 100, 200],
    type: "INTERNAL"
  };

  // act
  const actual = service.calculateDiscount(client);

  // assert
  if (actual === 0.25) {
    return;
  } else {
    throw new Error(
      `Assertion failed! Actual discount is "${actual}", where should be "0.25"`
    );
  }
});

describe("calculateNewOrderValue", () => {
  test("should return new order value 499 for clients type external and orders value = 499", () => {
    // arrange
    const service = new ClientService();

    const client = {
      orders: [100, 399],
      type: "EXTERNAL"
    };

    // act
    const actual = service.calculateNewOrderValue(client);

    // assert
    if (actual === 499) {
      return;
    } else {
      throw new Error(
        `Assertion failed! Actual order value is "${actual}", where should be "499"`
      );
    }
  });

  test("should return new order value 450.9 for clients type external and order value = 501", () => {
    // arrange
    const service = new ClientService();

    const client = {
      orders: [100, 401],
      type: "EXTERNAL"
    };

    // act
    const actual = service.calculateNewOrderValue(client);

    // assert
    if (actual === 450.9) {
      return;
    } else {
      throw new Error(
        `Assertion failed! Actual order value is "${actual}", where should be "450.9"`
      );
    }
  });

  test("should return new order value 424.15 for clients type internal and order value = 499", () => {
    // arrange
    const service = new ClientService();

    const client = {
      orders: [100, 399],
      type: "INTERNAL"
    };

    // act
    const actual = service.calculateNewOrderValue(client);

    // assert
    if (actual === 424.15) {
      return;
    } else {
      throw new Error(
        `Assertion failed! Actual order value is "${actual}", where should be "424.15"`
      );
    }
  });

  test("should return new order value 375.75 for clients type internal and order value = 501", () => {
    // arrange
    const service = new ClientService();

    const client = {
      orders: [100, 401],
      type: "INTERNAL"
    };

    // act
    const actual = service.calculateNewOrderValue(client);

    // assert
    if (actual === 375.75) {
      return;
    } else {
      throw new Error(
        `Assertion failed! Actual order value is "${actual}", where should be "375.75"`
      );
    }
  });
});
