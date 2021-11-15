const { add, subtract, multiply } = require("../math");

describe("simple arithmetic", () => {
  describe("addition", () => {
    test("expect 5 + 3 = 8", () => {
      expect(add(5, 3)).toEqual(8);
    });
    test("expect 1 + 0 = 1", () => {
        expect(add(1, 0)).toEqual(1);
    });
    test("expect 2 + (-3) = -1", () => {
        expect(add(2, -3)).toEqual(-1);
    })
  });

  describe("subtract", () => {
    test("expect 5 - 1 = 4", () => {
      expect(subtract(5, 1)).toEqual(4);
    });
  });

  describe("multiply", () => {
    test("expect 2 * 3 = 6", () => {
      expect(multiply(2, 3)).toEqual(6);
    });
  });
});