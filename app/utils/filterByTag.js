// @flow

import type { GoalsType } from "types";

const filterByTag = (goals: GoalsType, tagName: string) => {
  if (tagName) {
    return goals.filter(goal => goal.tag == tagName);
  }

  return goals;
};

export { filterByTag };
