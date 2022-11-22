# samples-nextjs-typescript-npm

This sample project demonstrates how the THEOplayer Web SDK (included through [NPM](https://www.npmjs.com/package/theoplayer)) could be used in a [Next.js](https://nextjs.org/) TypeScript project.

## License

This projects falls under the license as defined in https://github.com/THEOplayer/license-and-disclaimer.

## Background

This project was created through [`yarn create next-app --typescript`](https://nextjs.org/docs/api-reference/create-next-app).
Then, we
 * Modified `package.json`
    * to load `theoplayer` as a `dependency`
    * to load `copyfiles` as a `devDependency`, so we could add a `create-static-theo` script that
    copies the THEOplayer library files from `node_modules/theoplayer/` to `public/vendor/theoplayer/`,
    allowing us to refer the `libraryLocation`.
 * Created `/components/THEOplayerWrapper.tsx` to represent a custom THEOplayer component.
 * Modified `/pages/index.tsx` to use `<THEOplayerWrapper>` through [dynamic loading](https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr).
 THEOplayer should be rendered on the client-side, because it requires client-side browser APIs.
 
 ## Usage
 
 To test this project,
 
 1. Run `yarn` (or `npm i`) to install the dependencies.
 2. Run `yarn create-static-theo` (or `npm run create-static-theo`) to copy your THEOplayer files to `/public/vendor/theoplayer/`.
 3. Adjust `next.config.js` and enter your THEOplayer license string. 
 If you don't have a license string, then create a Web SDK at [https://portal.theoplayer.com](portal.theoplayer.com) to acquire one.
 4. Run `yarn dev` (or `npm run dev`) to start the local development web server.
