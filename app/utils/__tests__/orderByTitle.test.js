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
      {
        id: 3,
        title: "a",
      },
      {
        id: 4,
        title: "d",
      },
    ];

    const expectedData = [data[1], data[2], data[0], data[3]];

    expect(orderByTitle(data)).toEqual(expectedData);
  });
});
