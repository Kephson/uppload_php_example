import './style.css';

import {
  Uppload,
  Local,
  Crop,
  Rotate,
  en,
  xhrUploader,
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
