import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  it("Should show an alert with a Welcome", () => {
    const value = login();
    expect(mockAlert).toHaveBeenCalledWith("Welcome!");
  });
});
