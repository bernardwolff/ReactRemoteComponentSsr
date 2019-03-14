# ReactRemoteComponentSsr

This repo shows how to load a React component over the network and render it server-side in a Next.js app. You can use this to create a reusable component library, without requiring the consumers of the library to reinstall when you make changes.

## Limitations

* fetch'ing data inside the component does not work (as a workaround, fetch the data in the consumer app, and pass in as a prop)
* bundling the css with the component does not work (although you can make it work with mini-css-extract-plugin)
* using some third-party libraries don't work (e.g. react-slick)
