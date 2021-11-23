export const updObjInArray = (items, itemProp, itemId, newProp) => {
  return items.map((u) => {
    if (u[itemProp] === itemId) {
      return { ...u, newProp};
    }
    return u;
  });
};
