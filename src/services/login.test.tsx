import { emit, emitWarning } from "process";
import { login } from "./login";
import { api } from "./api";

describe("login", () => {
  const mockAlert = jest.fn();
  const mockEmail = "dog@dogao.com";
  window.alert = mockAlert;
  it("Should show an alert with a Welcome, when email is valid", async () => {
    await login(mockEmail);
    expect(mockAlert).toHaveBeenCalledWith(`Welcome ${mockEmail}`);
  });

  it("Should not show welcome message, without an email", async () => {
    await login(mockEmail);
    expect(mockAlert).not.toHaveBeenCalledWith("Welcome ");
  });

  it("Should show an error, when email is invalid", async () => {
    await login("invalid@email.com");
    expect(mockAlert).toHaveBeenCalledWith("Invalid Email");
  });
});
