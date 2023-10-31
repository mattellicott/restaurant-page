import { makeElement } from "./functions";
import { images } from "./images";
import siteData from "../data/siteData.json";

class Menu {
  constructor(menuItems, images) {
    this.menuItems = menuItems;
    this.images = images;

    this.page = this.makePage();
  }

  makePage() {
    const wrapperElement = makeElement("div", "id", "menuPage");

    for (const itemKey of Object.keys(this.menuItems)) {
      const [name, description, imagePath] = Object.values(
        this.menuItems[itemKey],
      );

      const itemWrapper = makeElement("div", "class", "menuItem");
      const nameElement = makeElement("div", "class", "menuItem-name", name);
      const descriptionElement = makeElement(
        "div",
        "class",
        "menuItem-description",
        description,
      );
      const imageElement = new Image();
      imageElement.src = this.images[imagePath];
      imageElement.classList.add("menuItem-image");

      itemWrapper.appendChild(imageElement);
      itemWrapper.appendChild(nameElement);
      itemWrapper.appendChild(descriptionElement);

      wrapperElement.appendChild(itemWrapper);
    }

    return wrapperElement;
  }
}

export const menu = new Menu(siteData.menuItems, images);
