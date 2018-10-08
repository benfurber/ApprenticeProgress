import { orderByTitle } from "../orderByTitle";

describe("orderByTitle()", () => {
  it("returns the last word of a string", () => {
    const data = [
      {
        id: 1,
        title: "b",
      },
      {
        id: 2,
        title: "a",
      },
    ];

    const expectedData = [
      {
        id: 2,
        title: "a",
      },
      {
        id: 1,
        title: "b",
      },
    ];

    expect(orderByTitle(data)).toEqual(expectedData);
  });
});
