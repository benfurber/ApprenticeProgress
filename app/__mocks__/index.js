const getParam = string => params[string];

const navigationMock = {
  getParam,
  navigate: jest.fn(),
};

export default navigationMock;
