import { AddPersonPOStandalone } from "./AddPerson.po";

describe.skip("When AddPerson button has been clicked", () => {
  const addPersonPO = AddPersonPOStandalone.render();
  it("an add event should be triggered once", () => {
    addPersonPO.clickAddButton();
    addPersonPO.expectAddCallback.toBeCalledTimes(1);
  });
});
