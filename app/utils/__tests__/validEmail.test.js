import { validEmail } from "../validEmail";

describe("validEmail()", () => {
  it("returns true if given a validly structured email", () => {
    const email = "luke@starwars.com";

    expect(validEmail(email)).toEqual(true);
  });

  it("returns false if not given a validly structured email", () => {
    const notEmail = "wrong";

    expect(validEmail(notEmail)).toEqual(false);
  });

  it("returns false if given null", () => {
    expect(validEmail(null)).toEqual(false);
  });
});
