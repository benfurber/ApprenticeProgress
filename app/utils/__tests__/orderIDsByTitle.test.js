import { orderIDsByTitle } from "../orderIDsByTitle";

describe("orderIDsByTitle()", () => {
  it("returns the last word of a string", () => {
    const data = {
      [1]: {
        id: 1,
        title: "b",
      },
      [2]: {
        id: 2,
        title: "a",
      },
    };

    const expectedData = [2, 1];

    expect(orderIDsByTitle(data)).toEqual(expectedData);
  });
});
