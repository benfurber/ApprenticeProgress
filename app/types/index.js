// @flow

export type GoalsType = [
  GoalDetailsType
];

export type GoalsDataType = {
  GoalIdType: GoalDetailsType,
};

export type GoalIdType = [number];

export type GoalDetailsType = {
  id: number,
  actions: Array<string>,
  description: string,
  evidence: Array<string>,
  score: number,
  tag: string,
  title: string,
};

export type OnPressType = () => void;

export type mockParamsType = {
  mockParams: {
    details: mockParamsDetailsType,
  },
};

export type mockParamsDetailsType = {
  actions: Array<string>,
  description: string,
  score: number,
  tag: string,
  title: string,
};

export type navigationType = {
  getParam: string => any,
  navigate: (string, {}) => any,
};
