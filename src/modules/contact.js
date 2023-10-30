import { makeElement } from "./functions";

class Contact {
  constructor() {
    this.page = this.makePage();
  }

  makePage() {
    const wrapperElement = makeElement("div", "id", "contactPage");

    return wrapperElement;
  }
}

export const contact = new Contact();
