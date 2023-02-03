# Basic PHP image upload example using uppload.js.org

Basic PHP file upload example using [uppload.js.org][1] JavaScript library building it via webpack.

It shows the full functionality of [uppload.js.org][1] working together with a PHP backend and allows to create your custom builds.

Using [DDEV local][2] based on [Docker][3] it is set up in five minutes on your local device.

To start with [DDEV local][2] (if not already done) [please read the documentation on how install][4] it on your OS.


> Be careful using the PHP script in a production environment without knowing what you do!
>
> It is not secured as normally needed and you should not use the PHP script as it is in a public website!


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
Run project while browsing to [uppload-php.ddev.site][6] on your local machine.

### PHP files
The file ```upload.php``` is doing the file upload with easiest PHP functions.

The file ```cron.php``` could be used to delete all files in upload folder after x minutes.

## Demo
There are different demo versions in the project:
- [Image upload example with crop, resize and rotate function][7] (language: EN)
- [Image upload example with crop, resize and rotate function][8] (language: DE)
- [Image upload example with all editor functions][9] (language: EN)
- [Image upload example as inline object with crop and rotate function][10] (language: EN)

Public demo:
- [Public available demo][11]


[1]: https://uppload.js.org/
[2]: https://ddev.readthedocs.io/
[3]: https://www.docker.com/
[4]: https://ddev.readthedocs.io/en/stable/users/install/
[5]: https://www.npmjs.com/
[6]: https://uppload-php.ddev.site
[7]: https://uppload-php.ddev.site/index.html
[8]: https://uppload-php.ddev.site/index_de.html
[9]: https://uppload-php.ddev.site/index_full.html
[10]: https://uppload-php.ddev.site/index_inline.html
[11]: https://uppload-php.hrr.digital/
