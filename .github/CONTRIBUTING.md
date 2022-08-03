# Contributing 👩‍💻🧑‍💻👨‍💻

Thank you for your interest in contributing to our library! Before coding, please check the following guidelines and helpful information.

### Guidelines

You are welcome to create new components or update existing ones. But, before you start, please take some time and **read carefully the guidelines explained in this page 🥸**

If you are a new developer at **heycar**, make sure to check the **[Package structure convention](/docs/guidelines-package-structure-convention--page)** and **[Code style guide](/docs/guidelines-code-style-guide-convention--page)**.
There you will see specific tips on accessing and configuring your environment specifically to Front-end development.

#### Basic requirements

There are some requirements and criteria for the whole **heycar-uikit** library. Make sure you are aware of them before starting development.

- It must support all required browsers.

- It must provide React components ready to use by all of **heycar's** web applications.

- Components should be simple, i.e., they must not contain any business logic, state management, or dependencies that would conflict with or dictate web applications development.

- Components must have sufficient high-quality documentation. This means that each new component must have their corresponding Story, containing examples, available props, and ways of using the component.

- Components must be fully accessible and WCAG-compliant.

- The component library must allow brand customization and theme.

- The component library must provide global styles and typography.

- Components must easily support internationalization

## Bugs

We are using [GitHub Issues](https://github.com/hey-car/heycar-uikit/issues) for bug tracking.

Before you report a bug, please make sure you've searched existing issues, and read our [FAQ](/docs/react/faq).

#### Release cycle

For proper release cycle and code support in this repository, you must use the **[git-flow](https://www.gitkraken.com/learn/git/git-flow)** workflow when creating new branches and releasing new code.
Below is a brief explanation of branch naming:

`main` - Contains only tested code. Сode gets here from `release/*` and `hotfix/*` branches.

`feature/*` - Branches are created based on ticket name, e.g. `feature/HEYUI-999-status-button-component`. Every individual ticket must have its corresponding branch, even for small tasks.

`hotfix/*` - These are branches that contains very urgent fixes for production, e.g. `hotfix/HEYUI-999-fix-button-attribute`.

`bugfix/*` - These branches contain bug fixes and can be merged into `develop`, `release` or `feature` braches, e.g. `bugfix/HEYUI-999-fix-button-attribute`.

## Creating a pull request

When creating your pull request, pay attention to the PR template and the requirements described there.

If your PR is not yet ready to be reviewed, make sure it is a draft or labeled as a `work in progress`.

Don't forget to properly name and label your PR. Examples: `feature: new button [#HEYUI-999]`, `bugfix: fixing header props [#HEYUI-000]`.

In order for it to be merged, at least two approvals are necessary.

The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.

**Before submitting a pull request**, please make sure to follow
* [Code style guide](/docs/guidelines-code-style-guide-convention--page)
* [Package structure convention](/docs/guidelines-package-structure-convention--page)
* [Development Workflow](/docs/guidelines-contributing--page#development-workflow)

### Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted.
This leads to **more readable messages** that are easy to follow when looking through the **project history**.
But also, we use the git commit messages to **generate the change log**.

The commit message formatting can be added using a typical git workflow or through the use of a CLI wizard ([Commitizen](https://github.com/commitizen/cz-cli)).
To use the wizard, run `npm run cm` in your terminal after staging your changes in git.

Follow this commands:

```bash
$ git add .
$ npm run cm # run the commitizen utility to create a commit
$ git push
```

#### Commit Message Scope

The scope could be following the name of the package of the commit change. For example `button`, `input`, etc...

## Development Workflow

1. Fork the repository and create your branch from the [correct branch](#Release-cycle).
2. `npm install` to fetch its dependencies.
3. `npm run lint` checks the code style. It's highly recommended to enable ESLint in your IDE.
4. `npm test` runs the complete test suite. (Make sure the `NODE_ENV` environment variable is unset, or it may causing some problems.). If you've fixed a bug or added code that should be tested, add tests. Tip: `npm test -- --watch TestName` is helpful in development.
5. Please pay special attention if any [jest snapshots](http://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest) where changes and commit these changes as well (if there are any desired updates).
6. Run **[Screenshot tests](/docs/guidelines-screenshot-testing--page)** and ensure changes are passing. Add new screenshot tests when any new visual effect was added.
7. `npm start` runs Storybook heycar-uikit website locally. The recommended way to test your changes manually would be through Storybook Canvas.
8. `npm run build` build packages to the `dist` directory.

## More information

If you have questions or need more information about **heycar-uikit**, please go to **#global-design-system** in internal heycar Slack workspace or open a [Discussion in Github](https://github.com/hey-car/heycar-uikit/discussions) if you are outside heycar.
