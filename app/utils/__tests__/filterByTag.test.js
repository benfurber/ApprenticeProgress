import { filterByTag } from "../filterByTag";

const goals = [
  {
    id: 1,
    tag: "A",
  },
  {
    id: 2,
    tag: "B",
  },
  {
    id: 3,
    tag: "A",
  },
];

describe("filterByTag", () => {
  it("returns only the selected tag", () => {
    const tagName = "A";

    const expected = [
      {
        id: 1,
        tag: "A",
      },
      {
        id: 3,
        tag: "A",
      },
    ];

    expect(filterByTag(goals, tagName)).toEqual(expected);
  });

  it("returns all when no tag name is given", () => {
    expect(filterByTag(goals, false)).toEqual(goals);
  });
});
