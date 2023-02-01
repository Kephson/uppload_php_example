import './style.css';
import {de_master} from "../i18n/de_master.ts";

import {
  Uppload,
  Local,
  Crop,
  Rotate,
  xhrUploader,
} from "uppload";

const uploader = new Uppload({
  lang: de_master,
  uploader: xhrUploader({
    endpoint: "https://uppload-php.ddev.site/upload.php",
    fileKeyName: "upload-01"
  }),
  bind: [
    document.querySelector("img.upload-pic"),
    document.querySelector("input.path")
  ],
  call: document.querySelector("button.upload-btn"),
  compressionToMime: "image/jpeg",
  maxWidth: 2000,
  maxHeight: 2000
});
uploader.use([new Local({
  maxFileSize: 10000000,
  mimeTypes: ["image/png", "image/jpeg"]
})]);
// Effects
uploader.use([
  new Crop(),
  new Rotate()
]);
