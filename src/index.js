import { bodyNav } from "../src/bodyNav";
import { homepageLoad } from "../src/homepage";
import { aboutUsPageLoad } from "../src/aboutUspage";

const content = document.querySelector('#content');


bodyNav();
window.onload = aboutUsPageLoad();