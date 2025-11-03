import {
  changeLocalStorage,
  createLocalStorage,
  getAllLocalStorage,
} from "./storage";
const dioBank = {
  login: false,
};

describe("storage", () => {
  const mockSetItem = jest.spyOn(Storage.prototype, "setItem");

  const getItem = jest.spyOn(Storage.prototype, "getItem");
  it("Should return an object in localStorage with key diobank", () => {
    const mockGetItem = jest.spyOn(Storage.prototype, "getItem");

    getAllLocalStorage();
    expect(getItem).toHaveBeenCalledWith("diobank");
  });

  it("Should create object inside localStorage", () => {
    const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });

  it("Should change the object's value inside the localStorage", () => {
    changeLocalStorage(dioBank);
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });
});
