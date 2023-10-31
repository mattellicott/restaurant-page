import { makeElement, addGoogleFontTo } from "./functions";
import siteData from "../data/siteData.json";

class Home {
  constructor(data) {
    this.data = data;
    this.page = this.makePage();
  }

  makePage() {
    const wrapperElement = makeElement("div", "id", "homePage");
    const logoElement = makeElement(
      "div",
      "id",
      "homeLogo",
      this.data.homeLogoText,
    );
    const textElement = makeElement(
      "div",
      "id",
      "homeSlogan",
      this.data.homeSloganText,
    );

    addGoogleFontTo(logoElement, this.data.fontList.headerLogo);

    wrapperElement.appendChild(logoElement);
    wrapperElement.appendChild(textElement);

    return wrapperElement;
  }
}

export const home = new Home(siteData);
