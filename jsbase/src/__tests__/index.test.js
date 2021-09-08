const { randomString } = require("../index");

describe("Testing randomString funtionalities", () => {
  test("It should return a random string ", () => {
    expect(typeof randomString()).toBe("string");
  });
  test("It should not return an inexisted city", () => {
    expect(randomString()).not.toMatch(/Cordoba/);
  });
});
