const handlePress = (destination, navigation, options = {}) => () => {
  navigation.navigate(destination, options);
};

export { handlePress };
