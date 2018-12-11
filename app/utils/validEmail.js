// @flow

type Props = string;

const validEmail = (email: Props) => {
  // Regex structure copied from: https://emailregex.com/
  const validEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.match(validEmailRegex)) {
    return true;
  }

  return false;
};

export { validEmail };
