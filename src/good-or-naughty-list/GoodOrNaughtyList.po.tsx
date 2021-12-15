import { getByTestId, render } from "@testing-library/react";

import { AddPersonPO } from "./components/AddPerson.po";
import GoodOrNaughtyList from "./GoodOrNaughtyList";

export class GoodOrNaughtyPO {
  private elements: {
    peopleList: HTMLElement;
  };

  protected constructor(protected container: HTMLElement) {
    this.elements = {
      get peopleList() {
        return getByTestId(container, "persons-list");
      },
    };
  }

  // 🔥 composite page object
  getAddPersonPO() {
    return AddPersonPO.bindTo(this.container);
  }

  expectList() {
    return expect(this.elements.peopleList);
  }

  static render() {
    const { container } = render(<GoodOrNaughtyList />);

    return new GoodOrNaughtyPO(container as HTMLElement);
  }
}
