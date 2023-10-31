import { makeElement } from "./functions";
import { images } from "./assets";
import siteData from "./siteData.json";

class Contact {
  constructor(data, contactImage) {
    this.data = data;
    this.contactImage = contactImage;
    this.page = this.makePage();
  }

  makePage() {
    const wrapperElement = makeElement("div", "id", "contactPage");
    const textElement = makeElement(
      "div",
      "id",
      "contactText",
      this.data.contactText,
    );

    const image = new Image();
    image.src = this.contactImage;
    image.id = "contactImage";

    wrapperElement.appendChild(image);
    wrapperElement.appendChild(textElement);

    return wrapperElement;
  }
}

export const contact = new Contact(siteData, images[siteData.contactImage]);
