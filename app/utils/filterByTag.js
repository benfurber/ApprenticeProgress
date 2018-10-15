const filterByTag = (goals, tagName) => {
  if (tagName) {
    return goals.filter(goal => goal.tag == tagName);
  }

  return goals;
};

export { filterByTag };
