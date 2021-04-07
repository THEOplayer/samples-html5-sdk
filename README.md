# samples-npm-html5-sdk

This repository contains sample projects that setup the THEOplayer HTML5 video player SDK through NPM through various popular bundlers.
These projects serve as bootstrap templates, and might be insightful to app developers.

The available sample projects:

* Webpack
    * [JavaScript](webpack/javascript/README.md)
    * [TypeScript](webpack/typescript/README.md)
* Parcel
    * [JavaScript](parcel/javascript/README.md)
* Rollup
    * [JavaScript](rollup/javascript/README.md)
    
## Usage

1. Navigate to a specific sample project folder using your terminal or command prompt, for example `webpack/javascript/`.
2. Run `npm install` to install the dependencies.
3. Enter a valid value for the `license` string in `src/index.js` (or `src/index.ts`).
Refer to the Frequently Asked Questions below if you're unsure on how to proceed with this step.
4. Run `npm run build` to create a production-level bundle, or `npm run build-dev` to create a development-level bundle.
5. Run `npm run serve` to start a local web server.
6. Open http://localhost:8080 in your browser.

The video below demonstrates how to use the `webpack/javascript/` sample project.

## Frequently Asked Questions

* Are there any prerequisites to using this repository and its sample projects?
    * Yes, there are prerequisites.
    You must have a valid THEOplayer license to successfully use the sample projects.
    Refer to the "Create an SDK" and "Configure license" sections in our [getting started guide](http://localhost:8000/getting-started/01-sdks/01-web/00-getting-started-extended.md#create-an-sdk) for more information.

* Where do I find my value for the `license` string in `src/index.js`?
    * You can acquire a license at https://portal.theoplayer.com/getting-started.
    Log in, build a Web SDK (or navigate to an existing one), and copy the license string to your clipboard.
    Then, paste this value in `src/index.js`. The green rectangle in the screenshot below points out where you can find this string on your SDK page.
