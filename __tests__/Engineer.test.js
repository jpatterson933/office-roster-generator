const Engineer = require("../lib/engineer");


test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", "Engineer", testValue);
  expect(e.gitHub).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", testValue, "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGit()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", "Manager", testValue);
  expect(e.getGit()).toBe(testValue);
});
