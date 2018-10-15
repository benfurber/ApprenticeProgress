import { calculateTotalScore } from "../calculateTotalScore";

describe("calculateTotalScore", () => {
  it("returns the total score of an array", () => {
    const goals = [{ score: 5 }, { score: 3 }];

    expect(calculateTotalScore(goals)).toEqual(8);
  });
});
