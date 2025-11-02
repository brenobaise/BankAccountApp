import { sum, multiply } from "./sum";

describe("sum", () => {
  it("should sum 1 to a given number", () => {
    //Act
    const value = sum(1);

    // Assertion
    expect(value).toBe(2);
  });

  it("Should multiply a number by 2", () => {
    const value = multiply(2, 2);
    expect(value).toBe(4);
  });

  it("Should multiply by 3", () => {
    const value = multiply(2, 3);
    expect(value).toBe(6);
  });

  it("Should throw an error if multiplier is not 2 or 3 ", () => {
    const value = multiply(2, 4);
    expect(value).toBe("Multiplier not accepted");
  });
});
