# OA Pay Contributing Guide

Hi! We're thrilled that you'd like to contribute to this project. Your help is essential for keeping it great.
Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

## Table of Contents

- [Committing Changes](#committing-changes)
- [Commonly used NPM scripts](#commonly-used-npm-scripts)
- [Code of Conduct](#code-of-conduct)
- [Testing](https://github.com/massenergize/massenergize-campaigns/blob/main/README.MD#testing)
- [Project Conventions](#project-convention)
- [Code Style](#code-style)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Project Structure](https://github.com/massenergize/massenergize-campaigns/blob/main/README.MD#project-structure)

### Pull Request Guidelines

- The `main` branch is basically just a snapshot of the latest stable release. All development should be done in
  dedicated branches. **DO NOT submit PRs against the `main` branch.**

- Checkout a topic branch from the relevant branch, e.g. `dev`, and merge back against that branch.

- Work in the `src` folder and **DO NOT** check in `.next` in the commits.

- It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before
  merging.

- Make sure ```bash yarn test``` passes. (
  see [https://github.com/massenergize/massenergize-campaigns/blob/main/README.md#development-setup](#development-setup))

- If adding new feature:
    - Add accompanying test case.
    - Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have it
      _"green-lighted"_ before working on it.

- If fixing a bug:
    - If you are resolving a special issue, add `(fix #xxxx[,#xxx])` (#xxxx is the issue id) in your PR title for a
      better release log, e.g. `update entities encoding/decoding (fix #3899)`.
    - Provide detailed description of the bug in the PR. Live demo preferred.
    - Add appropriate test coverage if applicable.

### Development Setup

You will need [Node.js](http://nodejs.org) **version 14.20.0**
This is due to an issue in the latest version of node-sass causing the builds to fail.

After cloning the repo, run:

``` bash
$ npm install # or yarn
```

### Committing Changes

Commit messages should follow
the [commit message convention](https://github.com/massenergize/massenergize-campaigns/blob/main/.github/COMMIT_CONVENTION.md)
so
that changelogs can be automatically generated. Commit messages will be automatically validated upon commit. If you are
not familiar with the commit message convention, you can use `npm run commit` instead of `git commit`, which provides an
interactive CLI for generating proper commit messages. You have to have husky installed to lint your commit messages.

### Commonly used NPM scripts

``` bash
# watch and auto re-build .next/*
$ yarn dev

# watch and auto re-run unit tests in silent mode
$ npm run test:watch

# build all dist files, including npm packages
$ yarn build

# run the full test suite, include linting / type checking
$ npm test
```

There are some other scripts available in the `scripts` section of the `package.json` file.

The default test script will do the following: lint with ESLint -> type check with Flow -> unit tests with coverage ->
e2e tests. **Please make sure to have this pass successfully before submitting a PR.** Although the same tests will be
run against your PR on the CI server, it is better to have it working locally beforehand.

### Project Structure

- **`.husky`**: contains [husky](https://typicode.github.io/husky/#/) configuration for git hooks.
- **`.github`**: contains GitHub related files, such as issue templates, PR templates, and contributing guidelines (this
  file) and workflows (AKA Github actions).
- **`.next`**: if it exists, it contains the output of the build process. It is ignored by git. **PLEASE DO NOT COMMIT
  THIS FOLDER.**
- **`node_modules`**: contains all your npm dependencies. **PLEASE DO NOT COMMIT THIS FOLDER.**
- **`cypress`**: contains end-to-end tests.
- **`public`**: contains static assets.
- **`selenium`**: contains selenium tests.
- **`src`**: contains the source code, obviously. The codebase is written in ES2015 with support for TypeScript.
  The code is organized into the following folders:
    - **`_mocks`**: contains mocks data for testing and development.
    - **`api`**: contains API routes. [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed
      on [http://localhost:8084/api/hello](http://localhost:8084/api/hello). This endpoint can be edited.
      The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated
      as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
    - **`assets`**: contains static assets.
        - **`backgrounds`**: contains background images.
        - **`fonts`**: contains fonts.
        - **`icons`**: contains icons.
        - **`img`**: contains images.
            - **`icons`**: contains icons.
            - **`illustrations`**: contains illustrations.
        - **`styles`**: contains styles.
            - **`scss`**: contains SCSS files.
                - **`bootstrap`**: contains Bootstrap SCSS files.
                - **`includes`**: contains SCSS includes.
                - **`notifications`**: contains notification SCSS files.
    - **`components`**: contains React components.
    - **`config`**: contains configuration files.
    - **`constants`**: contains constants.
    - **`contexts`**: contains React contexts.
    - **`guards`**: contains route guards.
    - **`helpers`**: contains helper functions and utilities.
    - **`high-order-components`**: contains high order components.
    - **`hooks`**: contains React hooks.
    - **`layout-components`**: contains layout components, the building blocks of layouts.
    - **`layouts`**: contains page layout structure components.
    - **`lib`**: contains libraries, mostly for third-party integrations and libraries that are not available on npm.
    - **`pages`**: contains React components that are mapped to routes.
    - **`sections`**: contains sections, the building blocks of pages.
    - **`seo`**: contains SEO components.
    - **`store`**: contains Reduxoid store. Reduxoid is a simple implementation of Redux based on **React Context API**
      and the **useReducer** hook.
        - **`actions`**: contains Reduxoid actions.
        - **`data`**: contains Reduxoid data.
            - **`models`**: contains Reduxoid models (data types) from which data is generated.
        - **`reducers`**: contains Reduxoid reducers.
    - **`views`**: contains views, the building blocks of sections. Views are page like components that are not mapped
      to routes and hence can be used as the only component in a page or as sections in other pages.

- **`test`**: contains all testing setup and mocks of packages. The unit tests are written
  with [Jest](https://facebook.github.io/jest/), and the e2e tests are written with [Cypress](https://www.cypress.io/)
  and [Selenium](https://www.selenium.dev/).

### Project Conventions

- **Use JavaScript**: We use [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for the source code.
  This is a superset of ECMAScript 2015 (ES6) and provides a better development experience with IDE type hinting and
  autocomplete.

- **Use Typescript**: We use [Typescript](https://www.typescriptlang.org/) for static type checking. This is a
  superset of JavaScript that adds static type annotations. It allows us to catch errors at compile time instead of
  runtime, and also provides a better development experience with IDE type hinting and autocomplete.

- **All Objects literals should be written in alphabetical order**: This is to make it easier to find properties in
  objects. Eslint will complain if you don't do this. You can use the `npm run lint:fix` command to automatically fix
  this

- **Use ES2015 modules**: We use ES2015 modules for all source code except for code that won't be transpiled. This is
  the official module system for JavaScript
  and is supported in all modern browsers and Node.js.

- **Use Reduxoid for state management**: Reduxoid is a state management library that is inspired by Redux and VueX. It
  is designed to be used with React and build on top of the React Context API. It is a very simple library that is easy
  to understand and use. It is also very
  lightweight. It is a good choice for a small to medium-sized application.

- **Use useReducer**: We use useReducer for state management in situations where a number of related states update
  together. This reduces the over-use or abuse of useState. It also makes it easier to manage several state changes
  based on ACTIONS.

- **Use useRef**: We use useRef for simple forms where form values are not required to be rendered. This is because
  useRef does not trigger a re-render when the value changes. When useState is used, the component is re-rendered
  anytime the value changes, for example, when the user types in a form field. This is not desirable in a lot of cases.

### Code Style

We like to keep our code style consistent. The following rules are rules we currently enforce, mostly by eslint.
Prettier was previously used to enforce code style, but it was removed because it doesn't ensure that function
definitions have a space between the function name and the opening parenthesis. This is a common mistake that is hard to
catch. We may add Prettier back in the future.
But **for now, we will stick with eslint and the rules below.**

- **Use the right casing for names**: Use:

+ **kebab-case** for file names
+ **PascalCase** for components
+ **PascalCase** for classes
+ **camelCase** for variables. This is the convention used in the official React documentation.
+ **UPPER_CASE** for constants, enums, config objects, config keys.
+ **snake_case** **only when forced by a 3rd party library**

- **Use semicolons (STRICTLY)**: We use semicolons at the end of every statement. Only optional if a statement is the
  last in a block. This is to avoid any ambiguity in the code. Eslint will complain if you don't do this. You can use
  the `npm run lint:fix` command to automatically fix this.

- **Use single quotes for strings**: We use single quotes for strings. This is not a strict rule, but common practice
  in the JavaScript community as popularized by AirBnb's JavaScript style guide as it makes code look clean.
  That said, there are cases where double quotes make more sense so _use your best judgment_.
  Nonetheless, like in C++, **we strictly enforce the use of single quotes for variables that are intended to hold on
  one character**.

- **Use trailing commas for multiline arrays and objects**: This is to avoid unnecessary git diffs when adding new lines
  to the end of an array or object. You can use the `npm run lint:fix`
  command to automatically fix this.

- **Use `===` and `!==` over `==` and `!=`**: This is to avoid any type coercion bugs. Eslint will complain if you don't
  do this. You can use the `npm run lint:fix` command to automatically fix this.

- **Use the right spacing**:

+ Use 2 spaces for indentation. This is the standard in the JavaScript community.
+ Use 1 space before the opening bracket of an inline element.
+ Use 1 space before the opening bracket of function definitions.
+ Leave no space before the opening bracket of a function call.
+ Use 1 space after the colon in an object property.
+ Use 1 space before and after the arrow in an arrow function. This is for readability and consistency with the rest of
  the codebase.
+ Use 1 space before and after the equal sign in an assignment statement. This is for readability and consistency with
  the rest of the codebase.
+ Use reasonable vertical spacing to separate blocks and groups of code. This is to improve readability and avoid
  unnecessary scrolling.

- **Use descriptive identifiers (names of variables, functions classes etc.)**: This is to make the code more readable
  and
  understandable. This is especially important for variables that are used in complex expressions. For example, instead
  of using `a` and `b` for variables in a complex expression, use `total` and `discount` instead.

- **Importing modules**: We use the following convention for importing modules:
  Import modules in the following order:

1. Node.js built-in modules
2. 3rd party modules
3. Local modules

_In Components:_

1. Node.js built-in modules
2. 3rd party modules
3. 3rd party components
4. Layouts
5. Layout components
6. Section components
7. Components
8. Contexts
9. Hooks
10. Config
11. Image files
12. Other files

### Project Configuration

Since this project is based on [Next.js](https://nextjs.org/), it is configured using the `next.config.js` file. The
file is well documented and should be easy to understand. The following are some of the important configurations:

- **`basePath`**: This is the base path of the application. It is used to prefix all routes. It is set to "". This
  means that all routes are prefixed with the root path. For example, the route for the home page is `/`. If the
  `basePath` is set to `/app`, then the route for the home page will be `/app/`.
- **`compress`**: This is used to enable gzip compression for all static files. It is set to true by default.

- **`compiler`**: This is used to configure the compiler. It is set to `babel` by default.

- **`productionBrowserSourceMaps`**: This is used to enable source maps for production builds.
  It is set to the value of `process.env.NEXT_PRODUCTION_BROWSER_SOURCE_MAPS` by default.

- **`eslint`**: This is used to configure eslint. It is set to ignore builds. This is because the code is already
  linted before it is committed to the repository and further linting during the build process is redundant.

- **`env`**: This is used to configure environment variables. Due to a quirk in Next.js, the environment variables
  must be prefixed with `NEXT_PUBLIC_` for them to be available in the browser.
  Also, the only officially supported environments are `development`, `production`, and `test`. We thus use the dotenv
  npm package to load environment variables from all `.env` files and make them available in the env object.

- **`trailingSlash`**: This is used to configure the trailing slash for routes. It is set to `false`.

- **`webpack`**: This is used to configure webpack.

- **`sentry`**: This is used to configure Sentry.

- **`redirects`** and **`rewrites`**: These are used to configure redirects and rewrites. They are set as async methods
  that return an array of objects.
  Redirected and rewritten routes are configured in the `/src/config/routes/redirects.js`
  and `/src/config/routes/rewrites.js` files respectively.
  The objects are in the format of `{ source, destination, permanent }`.
  The`source` is the route to be redirected or rewritten. The `destination` is the route to redirect to or rewrite to.
  The `permanent` is a boolean that indicates whether the redirect is permanent or not. It is set to `false` by default.

#### The following are the list of options available for the @link next.config.js file

- amp,
- analyticsId,
- assetPrefix,
- basePath,
- cleanDistDir,
- compiler,
- compress,
- crossOrigin,
- devIndicators,
- distDir,
- env,
- eslint,
- excludeDefaultMomentLocales,
- experimental,
- exportPathMap,
- future,
- generateBuildId,
- generateEtags,
- headers,
- httpAgentOptions,
- i18n,
- images,
- onDemandEntries,
- optimizeFonts,
    + This is a custom option that is not part of the Next.js config
      It is used to optimize the font files for the web
      It is set to true by default
- output,
- outputFileTracing,
- pageExtensions,
- poweredByHeader,
- productionBrowserSourceMaps,
- publicRuntimeConfig,
- reactStrictMode,
- redirects,
- rewrites,
- sassOptions,
- serverRuntimeConfig,
- staticPageGenerationTimeout,
- swcMinify,
- trailingSlash,
- typescript,
- useFileSystemPublicRoutes,
- webpack

### Code of Conduct

Please maintain a safe and respectful environment for all contributors and participants. We expect all contributors and
participants to abide by
our [Code of Conduct](https://github.com/massenergize/massenergize-campaigns/blob/main/.github/CODE_OF_CONDUCT.md)
