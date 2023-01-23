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
  bind: document.querySelector("img.upload-pic"),
  call: document.querySelector("button.upload-btn")
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
