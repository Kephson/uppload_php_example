import './style.css';

import {
  Uppload,
  Local,
  Crop,
  Rotate,
  Blur,
  Brightness,
  Contrast,
  Grayscale,
  HueRotate,
  Invert,
  Saturate,
  Sepia,
  xhrUploader,
  en
} from "uppload";

const uploader = new Uppload({
  lang: en,
  uploader: xhrUploader({
    endpoint: "https://uppload-php.ddev.site/upload.php",
    fileKeyName: "upload-01"
  }),
  bind: [
    document.querySelector("img.uppload-pic"),
    document.querySelector("input.uppload-path")
  ],
  call: [
    document.querySelector("button.uppload-btn"),
    document.querySelector("img.uppload-pic")
  ]
});
uploader.use([new Local({
  maxFileSize: 20000000,
  mimeTypes: ["image/png", "image/jpeg"]
})]);
// Effects
uploader.use([
  new Crop(),
  new Rotate(),
  new Crop(),
  new Blur(),
  new Brightness(),
  new Contrast(),
  new Grayscale(),
  new HueRotate(),
  new Invert(),
  new Saturate(),
  new Sepia()
]);
