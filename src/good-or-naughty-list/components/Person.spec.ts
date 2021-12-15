import { PersonDetails } from "./Person";
import { PersonPO } from "./Person.po";

const mockPerson: PersonDetails = {
  name: "Grinch",
};

describe("Person list item", () => {
  it("should have proper name", () => {
    const personEntry = PersonPO.render(mockPerson);
    personEntry.expectPersonNameToMatch("Grinch");
  });

  it("WHEN verification check if is good or naughty", () => {
    const personEntry = PersonPO.render(mockPerson);

    personEntry.clickVerifyButton();
    personEntry.expectVerifyCallback.toBeCalledTimes(1);
  });
});

describe("When person is good", () => {
  it("the gifts list input is visible", () => {
    const personEntry = PersonPO.render({ ...mockPerson, isGood: true });

    personEntry.expectGiftsList.toBeVisible();
  });
});
