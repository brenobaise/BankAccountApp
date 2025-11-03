import { login } from "./login";

describe("login", () => {
  const mockEmail = "dog@dogao.com";

  it("Should login and redirect to account page, when email is valid", async () => {
    const response = await login(mockEmail);
    expect(response).toBeTruthy();
  });

  it("Should not log in , when email is invalid", async () => {
    const response = await login("invalid@email.com");
    expect(response).toBeFalsy();
  });
});
