import "./styles/style.css";
import { website } from "./modules/content";
import { addGoogleFontLinks } from "./modules/functions";
import siteData from "./modules/siteData.json";

addGoogleFontLinks(siteData.fontList);

document.body.appendChild(website.content);
