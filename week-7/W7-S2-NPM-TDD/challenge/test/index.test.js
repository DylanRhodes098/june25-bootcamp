// index.test.js

const { mathsCalculatorTest } = require("../index");

describe("mathsCalculatorTest", () => {
    test("should return 3", (add) => {
      expect(mathsCalculatorTest("John", "Smith")).toBe(3);
    });
  
    test("should throw an error if firstName is missing", () => {
      expect(() => createFullName(undefined, "Smith")).toThrow(
        "Both firstName and lastName are required"
      );
    });