import { makeElement } from "./functions";

class Menu {
  constructor() {
    this.page = this.makePage();
  }

  makePage() {
    const wrapperElement = makeElement("div", "id", "menuPage");

    return wrapperElement;
  }
}

export const menu = new Menu();
