// @flow

type Props = Array<any>;

const calculateTotalScore = (array: Props) => {
  let totalScore = 0;

  array.forEach(item => {
    totalScore += item.score;
  });

  return totalScore;
};

export { calculateTotalScore };
