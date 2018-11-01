// @flow

const lastWordOfString = (string: string) => {
  return string.split(" ").splice(-1)[0];
};

export { lastWordOfString };
