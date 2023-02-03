import './style.css';

import {
  Uppload,
  Local,
  Crop,
  Rotate,
  xhrUploader,
  en,
  Preview
} from "uppload";

const uploader = new Uppload({
  lang: en,
  uploader: xhrUploader({
    endpoint: "/upload.php",
    fileKeyName: "upload-01"
  }),
  bind: [
    document.querySelector("img.uppload-pic"),
    document.querySelector("input.uppload-path")
  ],
  call: [
    document.querySelector("button.uppload-btn"),
    document.querySelector("img.uppload-pic")
  ],
  inline: true
});
uploader.use([new Local({
  maxFileSize: 20000000,
  mimeTypes: ["image/png", "image/jpeg"]
})]);
// Effects
uploader.use([
  new Crop(),
  new Rotate(),
  new Preview()
]);
