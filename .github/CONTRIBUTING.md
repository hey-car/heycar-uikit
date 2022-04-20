# Contributing

The following is a set of guidelines for contributing to Hey-UI. Please spend several minutes reading these guidelines before you create an issue or pull request.

## Code of Conduct

We have adopted a [Code of Conduct](https://github.com/hey-car/hey-ui/blob/main/CODE_OF_CONDUCT.md) that we expect project participants to follow.
Also, please read our [Structure Convention](https://github.com/hey-car/hey-ui/blob/main/STRUCTURE_CONVENTION.md) and [Style Guide](https://github.com/hey-car/hey-ui/blob/main/STYLEGUIDE_CONVENTION.).
Please read the full text so that you can understand what actions will and will not be tolerated.

## Open Development

All work on Hey-UI happens directly on [GitHub](https://github.com/hey-car/hey-ui). Both core team members and external contributors send pull requests which go through the same review process.

## Branch Organization

According to our [release schedule](changelog#Release-Schedule), we maintain two branches, `main` and `feature`. If you send a bugfix pull request, please do it against the `main` branch, if it's a feature pull request, please do it against the `feature` branch.

`main` - Contains only tested code. Сode gets here from `release/*` and `hotfix/*` branches.

`release/*` - Contains branches formed from the `develop` branch, for future release, e.g. `release/0.0.1`.

`develop` - General branch for developing. Сode gets here from `feature/*` and `bugfix/*` branches.

`feature/*` - Branches are created based on ticket name, e.g. `feature/HEYUI-999-status-button-component`. Every individual ticket must have its corresponding branch, even for small tasks.

`hotfix/*` - These are branches that contains very urgent fixes for production, e.g. `hotfix/HEYUI-999-fix-button-attribute`.

`bugfix/*` - These branches contain bug fixes and can be merged into `develop`, `release` or `feature` braches, e.g. `bugfix/HEYUI-999-fix-button-attribute`.

## Bugs

We are using [GitHub Issues](https://github.com/hey-car/hey-ui/issues) for bug tracking.

Before you report a bug, please make sure you've searched existing issues, and read our [FAQ](/docs/react/faq).

## Your First Pull Request

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don't accidentally duplicate your effort.

If somebody claims an issue but doesn't follow up for more than two weeks, it's fine to take over it but you should still leave a comment.

## Sending a Pull Request

The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.

**Before submitting a pull request**, please make sure the following is done:

1. Fork the repository and create your branch from the [correct branch](#Branch-Organization).
2. Run `npm install` in the repository root.
   > For Windows 10 development environment, if you run into error `gyp err! find vs msvs_version not set from command line or npm config`, please install [the latest Python v3](https://www.python.org/downloads/) and **Desktop development with C++** through [Visual Studio Installer](https://docs.microsoft.com/en-us/visualstudio/install/install-visual-studio?view=vs-2019#step-3---install-the-visual-studio-installer) before running `npm install`
3. If you've fixed a bug or added code that should be tested, add tests!
4. Ensure the test suite passes (npm run test). Tip: `npm test -- --watch TestName` is helpful in development.
5. Run `npm test -- -u` to update the [jest snapshots](http://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest) and commit these changes as well (if there are any updates).
6. Ensure the UI change passes `npm run test:screenshots`，Run `npm run test:screenshots -- -u` to update UI snapshots and commit these changes as well (if there are any updates).
7. Make sure your code lints (npm run lint). Tip: Lint runs automatically when you `git commit` (Use [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)).

Sending a Pull Request to [react-component](https://github.com/react-component/):

Since Hey-UI's components are based on react-component, sometimes you may need to send pull request to the corresponding react-component repository. If it's a bugfix pull request, after it's merged, the core team will release a patch release for that component as soon as possible, then you only need to reinstall Hey-ui in your project to get the latest patch release. If it's a feature pull request, after it's merged, the core team will release a minor release, then you need raise another pull request to [Hey-UI](https://github.com/hey-car/hey-ui/) to update dependencies, document and TypeScript interfaces (if needed).

## Development Workflow

After cloning Hey-UI, run `npm install` to fetch its dependencies. Then, you can run several commands:

1. `npm start` runs Storybook Hey-UI website locally.
2. `npm run lint` checks the code style.
3. `npm test` runs the complete test suite. (Make sure the `NODE_ENV` environment variable is unset, or it may causing some problems.)
4. `npm run build` build packages to the `dist` directory.
