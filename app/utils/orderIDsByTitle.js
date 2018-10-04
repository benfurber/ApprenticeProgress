const orderIDsByTitle = object => {
  const objectValues = Object.values(object).sort((a, b) => {
    const nameA = a.title.toUpperCase();
    const nameB = b.title.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  const objectIds = objectValues.map(item => {
    return item.id;
  });

  return objectIds;
};

export { orderIDsByTitle };
