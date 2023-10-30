import { makeElement } from "./functions";
import siteData from "./siteData.json";

class Home {
  constructor() {
    this.page = this.makePage();
  }

  makePage() {
    const wrapperElement = makeElement("div", "id", "homePage");
    const image = makeElement("img", "id", "chefImage");

    wrapperElement.appendChild(image);

    return wrapperElement;
  }
}

export const home = new Home();
