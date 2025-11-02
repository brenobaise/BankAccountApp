import { emit, emitWarning } from "process";
import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  const mockEmail = "dog@dogao.com";
  window.alert = mockAlert;
  it("Should show an alert with a Welcome", () => {
    login(mockEmail);
    expect(mockAlert).toHaveBeenCalledWith(`Welcome ${mockEmail}`);
  });

  it("Should not show welcome message, without an email", () => {
    login(mockEmail);
    expect(mockAlert).not.toHaveBeenCalledWith("Welcome ");
  });
});
