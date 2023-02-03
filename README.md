# Basic PHP example while using uppload.js.org

Basic PHP file upload example using [uppload.js.org][1] JavaScript library building it via webpack.

It shows the full functionality of [uppload.js.org][1] working together with a PHP backend and allows to create your custom builds.

Using [DDEV local][2] based on [Docker][3] it is set up in five minutes on your local device.

To start with [DDEV local][2] (if not already done) [please read the documentation on how install][4] it on your OS.

## Build and test project with DDEV local

Run ```ddev start``` to start the project with DDEV local.

Run ```ddev npm install``` to install all [NPM][5] dependencies.

### Build test
Run ```ddev npm run test``` to check if a build with webpack could work.

### Build production files
Run ```ddev npm run build``` to build the files to use in a production mode.

### Build development files
Run ```ddev npm run dev``` to build the files to use in a development mode.

### Run project
Run project while browsing to https://uppload-php.ddev.site on your local machine.


[1]: https://uppload.js.org/
[2]: https://ddev.readthedocs.io/
[3]: https://www.docker.com/
[4]: https://ddev.readthedocs.io/en/stable/users/install/
[5]: https://www.npmjs.com/
