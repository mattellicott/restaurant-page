import "./styles/style.css";
import { makeElement, addGoogleFontTo } from "./modules/functions";
import { images } from "./modules/images";
import { home } from "./modules/home";
import { menu } from "./modules/menu";
import { contact } from "./modules/contact";
import siteData from "./data/siteData.json";

class Content {
  constructor(data, backgroundImage) {
    this.data = data;
    this.backgroundImage = backgroundImage;
    this.mainPages = { home, menu, contact };
    this.currentMainPage = this.mainPages.home.page;
    this.menuTabElements = [];

    this.header = this.createHeader();
    this.main = this.createMain();
    this.footer = this.createFooter();
    this.content = this.createContent();
  }

  createContent() {
    const wrapperElement = makeElement("div", "id", "content");

    wrapperElement.style.backgroundImage = `url(${this.backgroundImage})`;
    wrapperElement.appendChild(this.header);
    wrapperElement.appendChild(this.main);
    wrapperElement.appendChild(this.footer);

    return wrapperElement;
  }

  createHeader() {
    const wrapperElement = makeElement("header");

    wrapperElement.appendChild(this.createHeaderLogo());
    wrapperElement.appendChild(this.createHeaderTabs());

    return wrapperElement;
  }

  createHeaderLogo() {
    const logoElement = makeElement(
      "div",
      "id",
      "headerLogo",
      this.data.headerLogoText,
    );
    addGoogleFontTo(logoElement, this.data.fontList.headerLogo);

    return logoElement;
  }

  createHeaderTabs() {
    const wrapperElement = makeElement("div", "id", "menuTabs");

    for (const tab of this.data.menuTabs) {
      const button = makeElement("button", "class", "menuTab", tab);
      if (tab === "Home") button.classList.add("active");

      button.addEventListener("click", (e) => {
        for (const tab of this.menuTabElements) {
          if (tab === e.target && !tab.classList.contains("active"))
            tab.classList.add("active");
          else if (tab !== e.target) tab.classList.remove("active");
        }

        const newPage = this.mainPages[tab.toLowerCase()].page;
        this.main.replaceChild(newPage, this.currentMainPage);
        this.currentMainPage = newPage;
      });

      this.menuTabElements.push(button);
      wrapperElement.appendChild(button);
    }

    return wrapperElement;
  }

  createMain() {
    const wrapperElement = makeElement("main");

    wrapperElement.appendChild(this.currentMainPage);

    return wrapperElement;
  }

  createFooter() {
    const wrapperElement = document.createElement("footer");

    wrapperElement.innerHTML =
      "Copyright © " + new Date().getFullYear() + " " + this.data.copyrighter;

    return wrapperElement;
  }
}

document.body.appendChild(
  new Content(siteData, images[siteData.backgroundImage]).content,
);
