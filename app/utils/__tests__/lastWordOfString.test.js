import { lastWordOfString } from "../lastWordOfString";

describe("lastWordOfString()", () => {
  it("returns the last word of a string", () =>{
    const string = "multiple words";

    expect(lastWordOfString(string)).toBe("words");
  });
})
