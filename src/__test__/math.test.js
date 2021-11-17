const { add, subtract, multiply } = require("../math");

describe("simple arithmetic", () => {
  describe("addition", () => {
    test("expect 5 + 3 = 8", () => {
      expect(add(5, 3)).toEqual(8);
    });
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