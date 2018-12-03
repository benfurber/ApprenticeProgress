// @flow

import type {
  NavigationScreenProp,
  NavigationStateRoute,
} from "react-navigation";

export type EmailType = ?string;

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

export type GraphErrorType = {
  message: string,
};

export type GraphDataType = {
  goals: GoalDetailsType,
  error?: GraphErrorType,
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
  ...NavigationScreenProp<NavigationStateRoute>,
  getParam: ("details") => GoalDetailsType,
  navigate: (string, {}) => boolean,
};

export type PasswordType = ?string;

export type OnPressType = () => void;

export type stateType = {
  goals: GoalsType,
};
