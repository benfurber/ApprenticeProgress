// @flow

import type { GoalsType } from "types";

const findTitles = (goals: GoalsType, score: number) => {
  let titleSet = [];

  goals.forEach(goal => {
    if (goal.score === score) {
      titleSet.push({ id: goal.id, title: goal.title });
    }
  });

  return titleSet;
};

export { findTitles };
