import {
  findByText,
  fireEvent,
  getByTestId,
  queryByTestId,
  render,
  waitFor,
} from "@testing-library/react";

import AddPerson from "./AddPerson";

export class AddPersonPO {
  private elements: {
    personInput: HTMLInputElement;
    addButton: HTMLElement;
  };

  protected constructor(protected container: HTMLElement) {
    this.elements = {
      get personInput() {
        return getByTestId(container, "add-person-input") as HTMLInputElement;
      },
      get addButton() {
        return getByTestId(container, "add-person-button");
      },
    };
  }

  static bindTo(container: HTMLElement) {
    return new AddPersonPO(container as HTMLElement);
  }

  writeName(value: string) {
    fireEvent.change(this.elements.personInput, { target: { value } });
  }
  clickAddButton() {
    fireEvent.click(this.elements.addButton);
  }
  expectName() {
    return expect(this.elements.personInput.value);
  }
}

export class AddPersonPOStandalone extends AddPersonPO {
  protected constructor(
    protected container: HTMLElement,
    protected onAddSpy: jest.Mock,
    protected onInputChange: jest.Mock,
    protected onKeyPress: jest.Mock
  ) {
    super(container);
  }

  get expectAddCallback() {
    return expect(this.onAddSpy);
  }

  static render() {
    const onAdd = jest.fn();
    const onInputChange = jest.fn();
    const onKeyPress = jest.fn();

    const { container } = render(
      <AddPerson
        inputValue=""
        onInputChange={onInputChange}
        onInputKeyPress={onKeyPress}
        onButtonClick={onAdd}
      />
    );

    return new AddPersonPOStandalone(
      container as HTMLElement,
      onAdd,
      onInputChange,
      onKeyPress
    );
  }
}
