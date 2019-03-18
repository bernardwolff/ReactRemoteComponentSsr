# ReactRemoteComponentSsr

This repo shows how to load a React component over the network and render it server-side in a Next.js app. You can use this to create a reusable component library, without requiring the consumers of the library to reinstall when you make changes.

## How to run
1. In the my-component-library folder, run the following command to build and bundle the component library.
```
yarn run buildcomponentlib
```
2. In the my-component-library folder, run the following command to host the component library bundle.
```
yarn run start
```
3. In the my-app folder, run the following command to run the consuming Next.js app.
```
npm run dev
```
4. In your browser, go to http://localhost:3000/


## Limitations

* fetch'ing data inside the component does not work (as a workaround, fetch the data in the consumer app, and pass in as a prop)
* bundling the css with the component does not work (although you can make it work with mini-css-extract-plugin)
* using some third-party libraries don't work (e.g. react-slick)
