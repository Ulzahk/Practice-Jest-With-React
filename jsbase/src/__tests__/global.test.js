const text = "Hello World";

test("Should contain a text", () => {
  expect(text).toMatch(/World/);
});
