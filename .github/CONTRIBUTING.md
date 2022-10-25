# Contributing 👩‍💻🧑‍💻👨‍💻

Thank you for your interest in contributing to our library! Before coding, please check the following guidelines and helpful information.

### Guidelines

You are welcome to create new components or update existing ones. But, before you start, please take some time and **read carefully the guidelines explained in this page 🥸**

If you are a new developer at **heycar**, make sure to check the **[Package structure convention](/docs/guidelines-package-structure-convention--page)** and **[Code style guide](/docs/guidelines-code-style-guide-convention--page)**.
There you will see specific tips on accessing and configuring your environment specifically to Front-end development.

### Step-by-step contribution manual

1. Create a branch name according to the purpose and the name of the ticket (**[Tickets](#tickets)**) exp. feat/HEYUI-9999-new-component (**[Branches naming](#branches-naming)**).
2. Make any changes to the particular package or create a new one (**[Development Workflow](#development-workflow)**)
   - The new package should start from the 1.0.0 version
3. When the work was done, you should add file contents to the index using the command `git add`.
   - If your changes affected different packages, you should divide the changes, this means changed files need to be added separately.
4. Do not forget to update documentation/tests/etc regarding your changes.
5. For the committing changes use the `npm run cm` command, which uses the [Commitizen Wizard](https://github.com/commitizen/cz-cli) (**[Commit Message Guidelines](#commit-message-guidelines)**).
6. When you finished committing changes, push them to the remote repository and create PR **[Creating a pull request](#creating-a-pull-request)**.
7. Automatically tests and checks changes and generates a link on the Storybook, that should be provided to the designer team for the confirmed changes (**[Screenshot testing](/docs/guidelines-screenshot-testing--page)**).
8. After getting all confirmation, it is possible to merge the PR to the main branch.
   - If you have more than one commit you should use the Rebase and marge method to merge. Because all of the comments should be recognized and added to the changelogs of the different packages.
9. All of the commit title and details text for the commit will be automatically added to the changelog file by the name of the packages and the versions of the packages will be bumped as well by the purpose and the name of the commit changes
   (**[Releases](#releases)**).

### Releases

- Important!: All releases should be done automatically by merging to the main branch.
- if needed you can do it manually, but it is not recommended, to use for that the command `npm run pub:patch`
- or you can publish the package directly from the particular package executed for it with the command `npm-publish`

### Basic requirements

There are some requirements and criteria for the whole **heycar-uikit** library. Make sure you are aware of them before starting development.

- It must support all required browsers.

- It must provide React components ready to use by all of **heycar's** web applications.

- Components should be simple, i.e., they must not contain any business logic, state management, or dependencies that would conflict with or dictate web applications development.

- Components must have sufficient high-quality documentation. This means that each new component must have their corresponding Story, containing examples, available props, and ways of using the component.

- Components must be fully accessible and WCAG-compliant.

- The component library must allow brand customization and theme.

- The component library must provide global styles and typography.

- Components must easily support internationalization

### Tickets

Any new ticket creation bug/feature/story regarding GDS component library should happen on Hey-UI jira project.

### Branches naming

For proper release cycle and code support in this repository, you must use the **[AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)**
also known as **[conventional-changelog](https://github.com/ajoslin/conventional-changelog)** workflow when creating new branches and releasing new code.

Below is a brief explanation of branch naming:

`feat/*` - Branches are created based on ticket name, e.g. `feat/HEYUI-999-status-button-component`. Every individual ticket must have its corresponding branch, even for small tasks.

`fix/*` - These are branches that contains very urgent fixes for production, e.g. `fix/HEYUI-999-fix-button-attribute`.

### Creating a pull request

When creating your pull request, pay attention to the PR template and the requirements described there.

If your PR is not yet ready to be reviewed, make sure it is a draft or labeled as a `work in progress`.

Don't forget to properly name and label your PR. Examples: `feat: new button [#HEYUI-999]`, `bugfix: fixing header props [#HEYUI-000]`.

In order for it to be merged, at least two approvals are necessary.

The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.

**Before submitting a pull request**, please make sure to follow

- [Code style guide](/docs/guidelines-code-style-guide-convention--page)
- [Package structure convention](/docs/guidelines-package-structure-convention--page)
- [Development Workflow](/docs/guidelines-contributing--page#development-workflow)

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
3. `npx husky install` to install husky hooks.
4. `npm run lint` checks the code style. It's highly recommended to enable ESLint in your IDE.
5. `npm test` runs the complete test suite. (Make sure the `NODE_ENV` environment variable is unset, or it may causing some problems.). If you've fixed a bug or added code that should be tested, add tests. Tip: `npm test -- --watch TestName` is helpful in development.
6. Please pay special attention if any [jest snapshots](http://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest) where changes and commit these changes as well (if there are any desired updates).
7. Run **[Screenshot tests](/docs/guidelines-screenshot-testing--page)** and ensure changes are passing. Add new screenshot tests when any new visual effect was added.
8. `npm start` runs Storybook heycar-uikit website locally. The recommended way to test your changes manually would be through Storybook Canvas.
9. `npm run build` build packages to the `dist` directory.

## More information

If you have questions or need more information about **heycar-uikit**, please go to **#global-design-system** in internal heycar Slack workspace or open a [Discussion in Github](https://github.com/hey-car/heycar-uikit/discussions) if you are outside heycar.
