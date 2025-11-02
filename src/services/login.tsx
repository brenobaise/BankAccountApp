export const login = (email: string): void => {
  if (email.trim.length === 0) {
    alert("Insert an email");
  }
  alert(`Welcome ${email}`);
};
