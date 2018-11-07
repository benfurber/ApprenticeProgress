import { handlePress } from "../handlePress";

import navigationMock from "mocks";

describe("handlePress", () => {
  it("executes", () => {
    const destination = "Test screen";

    handlePress(destination, navigationMock)();

    expect(navigationMock.navigate).toBeCalled();
  });
});
