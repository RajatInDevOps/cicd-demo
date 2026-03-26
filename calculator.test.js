// calculator.test.js
// Unit tests for the calculator module

const { add, subtract, multiply, divide } = require("./calculator");

describe("Calculator", () => {

  // --- add ---
  describe("add()", () => {
    test("adds two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });
    test("adds positive and negative", () => {
      expect(add(10, -4)).toBe(6);
    });
    test("adds two negatives", () => {
      expect(add(-5, -3)).toBe(-8);
    });
  });

  // --- subtract ---
  describe("subtract()", () => {
    test("subtracts correctly", () => {
      expect(subtract(10, 4)).toBe(6);
    });
    test("result can be negative", () => {
      expect(subtract(3, 7)).toBe(-4);
    });
  });

  // --- multiply ---
  describe("multiply()", () => {
    test("multiplies two numbers", () => {
      expect(multiply(3, 4)).toBe(12);
    });
    test("anything times zero is zero", () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  // --- divide ---
  describe("divide()", () => {
    test("divides correctly", () => {
      expect(divide(10, 2)).toBe(5);
    });
    test("throws error on divide by zero", () => {
      expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
    });
  });

});
