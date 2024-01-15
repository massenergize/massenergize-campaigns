# This is the MassEnergize Campaigns Web Frontend

A [React application](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[//]: # (## To get started [&#40;Development setup&#41;]&#40;#development-setup&#41;)
## To get started (Development setup)

1. **Clone the repository** [here](https://github.com/massenergize/massenergize-campaigns/)

2. **Install the dependencies by running the following command**

- **Please note that** you need to have [Node.js](https://nodejs.org/en/) installed on your machine. Install the latest
  version of Node.js.
- You also need to have [npm](https://www.npmjs.com/) installed on your machine. It comes bundled with Node.js. 
- **Please ensure that you use npm in order NOT TO create a `yarn.lock` file which will conflict with the `package-lock.json` file**.

```bash
npm install
```

3. **Run the development server by running the following command**

```bash
npm run start
```
or 
```bash
yarn start
```

4. **Open** [http://localhost:3000](http://localhost:3000) **with your browser to see the result**.

## Project Structure

The project structure is as follows:

```
./
└── public
├── src
│   ├── api
│   ├── assets
│   ├── components
│   └── config
│   │   ├── i18n
│   │   └── routes
│   ├── guards
│   ├── helpers
│   ├── high-order-components
│   ├── hooks
│   ├── layout-components
│   ├── layouts
│   ├── lib
│   │   ├── bubbbly-balloon
│   │   ├── reduxoid
│   │   └── dicey-dialog
│   ├── mocks
|   ├── redux
│   ├── pages
│   ├── sections
│   ├── seo
│   ├── store
|   ├── user-portal
│   └──views
└── test
```

You can start editing the pages or add pages to the `/src/pages/`.
Pages are automatically compiled and updated as you edit them.

Read more about the contents of the directories in contributing
guide [here](https://github.com/Obsidian-Achernar/money-transfer-fr/blob/main/.github/CONTRIBUTING.md#project-structure)
to learn more about how to contribute to this project and the rules to follow.

### Core Dependencies

The following are the core dependencies used in this project

- [Next.js](https://nextjs.org/) - The React Framework
- [React](https://reactjs.org/) - The JavaScript Library
- [Redux](https://redux.js.org/) - The State Management Library
- [Redux Saga](https://redux-saga.js.org/) - The Side Effect Management Library
- [Bootstrap React](https://react-bootstrap.github.io/) - The React Bootstrap Library
- [Date fns](https://momentjs.com/) - The Date Library
- [Framer Motion](https://www.framer.com/motion/) - The Animation Library
- [Yup]() The Validation Library
- [React Hook Form](https://react-hook-form.com/) - The Form Library
- [Font Awesome](https://fontawesome.com/) - The Icon Library
- [Swr](https://swr.vercel.app/) - The Data Fetching Library
- [React Phone number Input](http://catamphetamine.gitlab.io/react-phone-number-input/) - The Phone Number Input Library

## GitHub Actions

We use GitHub Actions for pull request checks. Any pull request triggers checks
such as linting, unit tests and E2E tests.

## Testing 🧪

### Jest ⚡️

For lower level tests of utilities and individual components, we use `jest`. We
have DOM-specific assertion helpers via
[`@testing-library/jest-dom`](https://testing-library.com/jest-dom).

There are
[5 questions every unit test must answer](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d)
and [Eric Elliott](https://mobile.twitter.com/_ericelliott) created a testing
framework called [RITEway](https://github.com/paralleldrive/riteway) that forces
you to write **R**eadable, **I**solated, and **E**xplicit tests. The framework
only exposes a single `assert` test function, which performs a deep equality
check.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc` with ignored files in `.eslintignore`. You can
run the linter with `yarn lint` or `npm run lint`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. The Prettier config is in `.prettierrc`.

### Deployment

This project is deployed on AWS Amplify. The build settings are configured in `amplify.yml`.
The production tip deployment is done on every push to the `main` branch.
The staging tip deployment is done on every push to the `staging` branch.
Special feature deployments can be done by pushing to the `feature/<feature-name>` branch and setting
the `feature/<feature-name>` branch as the deployment branch on AWS Amplify.

### Sentry

We use [Sentry](https://sentry.io/) for error tracking. The Sentry DSN is configured in the `next.config.js` file.

### Google Analytics

We use [Google Analytics](https://analytics.google.com/) for analytics. The Google Analytics ID is configured in
the `/src/config/firebase.js` file.

### Firebase

We use [Firebase](https://firebase.google.com/) for authentication and push notifications. The firebase config is configured in the `/src/config/firebase/` file. with
initialization in the `/src/helpers/firebase.js` file.

### Sirv

_Let's be honest, using `next/image` is a pain. The opinions about forcing image widths and heights make it very
annoying._

We therefore use [Sirv](https://sirv.com) for image optimization. Using Sirv, we can serve images with the correct content type
and
optimized for web. Images are automatically compressed and resized to fit the device screen size.
The `srcset` attribute is automatically added to serve different images to different devices. To use sirv images, in as
image tags in components,
use the SirvImage component in the `/src/components/SirvImage` folder.
The SirvImage component takes the following
props:

- `src`: The image source (required)
- `alt`: The image alt text (required)
- `className`: The image class name (optional)
- `width`: The image width (optional)
- `height`: The image height (optional)
- `role`: The image role (optional but required for accessibility if the file type is an `SVG`)

```jsx
<SirvImage src={imageSrc} alt={imageAlt}/>
```

The sirv base url is configured in the `APP_PATHS` object in `/src/config/routes/index.js` file.
It can thus be used in other places in the app, programmatically to fetch images from sirv.

### Next Image

Next Image is not completely abandoned. It is still used for some images that are not hosted on sirv, and also more importantly, if we can supply all the required props to the image component.
To use next image, in as image tags in components, use the NextImage component in the `/src/components/NextImage` folder. It wraps the next image component and takes the following props:

- `src`: The image source (required)
- `alt`: The image alt text (required)
- `className`: The image class name (optional)
- `width`: The image width (optional)
- `height`: The image height (optional)
- `size`: The image size (optional), this is used to set the width and height of the image to the same value
- `role`: The image role (optional but required for accessibility if the file type is an `SVG`)
- `layout`: The image layout (optional), this is used to set the layout of the image. It can be `fill`, `fixed`, `intrinsic`, `responsive` or `none`. The default is `responsive`
- `priority`: The image priority (optional), this is used to set the priority of the image. It can be `true` or `false`. The default is `false`
- `quality`: The image quality (optional), this is used to set the quality of the image. It can be a number between `0` and `100`. The default is `75`
- `loading`: The image loading (optional), this is used to set the loading of the image. It can be `lazy`, `eager` or `auto`. The default is `lazy`
- `objectFit`: The image object fit (optional), this is used to set the object fit of the image. It can be `fill`, `contain`, `cover`, `none` or `scale-down`. The default is `cover`
- `objectPosition`: The image object position (optional), this is used to set the object position of the image. It can be `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left`, `left`, `top-left` or `center`. The default is `center`
```jsx
<NextImage src={imageSrc} alt={imageAlt}/>
```


### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!


