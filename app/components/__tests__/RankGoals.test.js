import React from "react";
import { shallow } from "enzyme";

import { RankGoals } from "../RankGoals";

describe("RankGoals", () => {
  it("has a valid snapshot", () => {
    const goals = [
      {
        id: 1,
        title: "Low Score",
        score: 2,
      },
      {
        id: 2,
        title: "High Score",
        score: 4,
      },
    ];
    const component = shallow(<RankGoals goals={goals} />);

    expect(component).toMatchSnapshot();
  });
});
