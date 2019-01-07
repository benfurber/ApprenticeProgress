// @flow

import { Toast } from "native-base";

type Props = {
  toast: any,
  error: ?string,
};

const presentError = ({ error, toast = Toast }: Props) => {
  const showToast = () => {
    toast.show({
      text: error,
      buttonText: "X",
      type: "danger",
      duration: 99999,
    });
  };

  if (error) {
    return showToast();
  }

  return null;
};

export { presentError };
