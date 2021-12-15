import {
  findByTestId,
  findByText,
  fireEvent,
  getByTestId,
  queryByTestId,
  render,
  waitFor,
} from "@testing-library/react";

import Person, { PersonDetails } from "./Person";

export class PersonPO {
  private elements: {
    saveButton: HTMLElement;
    verifyButton: HTMLElement;
    personName: HTMLElement;
    giftsList: HTMLElement;
  };

  protected constructor(
    protected container: HTMLElement,
    protected onVerifySpy: jest.Mock,
    protected onSaveSpy: jest.Mock
  ) {
    this.elements = {
      get saveButton() {
        return getByTestId(container, "save-button");
      },
      get verifyButton() {
        return getByTestId(container, "verify-button");
      },
      get personName() {
        return getByTestId(container, "person-name");
      },
      get giftsList() {
        return getByTestId(container, "gifts-list");
      },
    };
  }

  static render(person: PersonDetails) {
    const onVerify = jest.fn();
    const onSave = jest.fn();
    const { container } = render(
      <Person person={person} saveGifts={onSave} verifyPerson={onVerify} />
    );

    return new PersonPO(container as HTMLElement, onVerify, onSave);
  }

  clickSaveButton() {
    fireEvent.click(this.elements.saveButton);
  }

  clickVerifyButton() {
    fireEvent.click(this.elements.verifyButton);
  }

  expectPersonNameToMatch(name: string) {
    expect(this.elements.personName).toHaveTextContent(name);
  }

  get expectSaveCallback() {
    return expect(this.onSaveSpy);
  }

  get expectVerifyCallback() {
    return expect(this.onVerifySpy);
  }

  get expectGiftsList() {
    return expect(this.elements.giftsList);
  }
}
