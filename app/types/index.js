// @flow

// import { type NavigationState } from "react-navigation";

export type GoalsType = Array<GoalDetailsType>;

export type GoalsDataType = {
  GoalIdType: GoalDetailsType,
};

export type GoalIdType = Array<number>;

export type GoalDetailsType = {
  id: number,
  actions: Array<string>,
  description: string,
  evidence: Array<string>,
  score: number,
  tag: string,
  title: string,
};

export type ListDetailsType = {
  index: number,
  action: string,
};

export type ListType = Array<ListDetailsType>;

export type mockParamsType = {
  mockParams: {
    details: GoalDetailsType,
  },
};

export type navigationType = {
  getParam: string => any,
  navigate: (string, {}) => any,
};

export type OnPressType = () => void;

export type stateType = {
  goals: GoalsType,
};
