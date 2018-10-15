const calculateTotalScore = array => {
  let totalScore = 0;

  array.forEach(item => {
    totalScore += item.score;
  });

  return totalScore;
};

export { calculateTotalScore };
