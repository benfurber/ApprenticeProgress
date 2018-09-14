// @flow

export type GoalsDataType = {
  GoalIdType: GoalDetailsType,
};

export type GoalIdType = number;

export type GoalDetailsType = {
  actions: Array<string>,
  description: string,
  score: number,
  tag: string,
  title: string,
};

export type OnPressType = () => void;
