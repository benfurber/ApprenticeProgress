const findTitles = (goals, score) => {
  let titleSet = [];

  goals.forEach(goal => {
    if (goal.score === score) {
      titleSet.push({ id: goal.id, title: goal.title });
    }
  });

  return titleSet;
};

export { findTitles };
