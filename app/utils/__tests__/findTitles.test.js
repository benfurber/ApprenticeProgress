import { findTitles } from "../findTitles";

describe("findTitles", () => {
  it("returns the goals for a given score", () => {
    const goals = [
      {
        id: 1,
        title: "Low Score",
        score: 2,
      },
      {
        id: 2,
        title: "Second Low Score",
        score: 2,
      },
      {
        id: 3,
        title: "High Score",
        score: 4,
      },
    ];

    const expected = [
      {
        id: 1,
        title: "Low Score",
      },
      {
        id: 2,
        title: "Second Low Score",
      },
    ];

    expect(findTitles(goals, 2)).toEqual(expected);
  });
});