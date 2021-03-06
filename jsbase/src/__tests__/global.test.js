const text = "Hello World";
const fruits = ["Manzana", "Banana", "Melon"];
const reverseString = (string, callback) => {
  callback(string.split("").reverse().join(""));
};
const { reverseString2 } = require("../index");

// beforeEach(() => console.log("Before each test"));
// beforeAll(() => console.log("Before all tests"));
test("It should contain a text", () => {
  expect(text).toMatch(/World/);
});
test("It should have a banana", () => {
  expect(fruits).toContain("Banana");
});
test("It should be greater value", () => {
  expect(10).toBeGreaterThan(9);
});
test("It should return a true value", () => {
  expect(true).toBeTruthy();
});
test("It should be a callback ", () => {
  reverseString("Hello", (str) => {
    expect(str).toBe("olleH");
  });
});

describe("Testing reverseString2 functionalities", () => {
  test("It should return a promise", () => {
    return reverseString2("Hello").then((string) => {
      expect(string).toBe("olleH");
    });
  });
  test("It should return an async/await result ", async () => {
    const string = await reverseString2("Hello");
    expect(string).toBe("olleH");
  });
  test("It should throw an Error with reject", async () => {
    await expect(reverseString2()).rejects.toThrow({
      message: "Error",
    });
  });
});
// afterEach(() => console.log("After each test"));
// afterAll(() => console.log("After all tests"));
