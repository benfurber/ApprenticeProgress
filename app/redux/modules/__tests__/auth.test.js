import { addToken, fetchToken } from "../auth";

describe("addToken", () => {
  it("contains the correct data", () => {
    const userToken = "4358t7hjdfsDgyb{}asdsf4";

    const expected = {
      type: "auth/getToken",
      payload: userToken,
    };

    expect(addToken(userToken)).toEqual(expected);
  });
});

describe("fetchToken", () => {
  it("calls the client", async () => {
    const userToken = jest.fn();
    const userData = {
      email: "email@test.com",
      password: "P4SS",
    };
    const dispatch = jest.fn(userToken);

    await fetchToken(dispatch, userData);

    expect(userToken).toHaveBeenCalled();
  });
});
