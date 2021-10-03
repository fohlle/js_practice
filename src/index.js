
import "./reset.css"
import "./style.css"
import "./dropdown.css"
import "./slider.css"

import { greet } from "./test.js"
import { drop, menu } from "./dropdown.js"
import { slider, imgEvent, addFirstImage } from "./slider.js" 

console.log("hi");

greet("anna");

drop();
menu();
slider();

imgEvent();
addFirstImage();