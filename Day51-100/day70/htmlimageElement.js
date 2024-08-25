"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//only for educational purpose
const imgElement = document.createElement("img");
imgElement.src = "image.jpg";
imgElement.alt = "My Image";
if (imgElement.complete) {
    console.log(`Image dimensions: ${imgElement.naturalWidth} x ${imgElement.naturalHeight}`);
}
else {
    imgElement.addEventListener("load", () => {
        console.log(`Image dimensions: ${imgElement.naturalWidth} x ${imgElement.naturalHeight} `);
    });
}
//# sourceMappingURL=htmlimageElement.js.map