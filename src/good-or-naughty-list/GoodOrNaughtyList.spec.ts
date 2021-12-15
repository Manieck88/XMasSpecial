import { GoodOrNaughtyPO } from "./GoodOrNaughtyList.po";

describe("When good or naughty list is loaded AND name is provided", () => {
  it("THEN it is displayed in input", () => {
    const goodOrNaughty = GoodOrNaughtyPO.render();
    const addPersonPO = goodOrNaughty.getAddPersonPO();
    addPersonPO.writeName("Grinch");
    addPersonPO.expectName().toMatch("Grinch");
  });

  it("THEN after adding it is displayed in list", () => {
    const goodOrNaughty = GoodOrNaughtyPO.render();
    const addPersonPO = goodOrNaughty.getAddPersonPO();
    addPersonPO.writeName("Grinch");

    addPersonPO.clickAddButton();
    goodOrNaughty.expectList().toHaveTextContent("Grinch");
  });
});
