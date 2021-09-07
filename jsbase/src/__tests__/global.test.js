const text = "Hello World";
const fruits = ["Manzana", "Banana", "Melon"];
const reverseString = (string, callback) => {
  callback(string.split("").reverse().join(""));
};

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
