# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [5.0.0](https://github.com/hey-car/heycar-uikit/compare/@heycar-uikit/switch@4.1.1...@heycar-uikit/switch@5.0.0) (2023-04-26)


### Build System

* **bump versions:** bumping versions ([#193](https://github.com/hey-car/heycar-uikit/issues/193)) ([08bdb77](https://github.com/hey-car/heycar-uikit/commit/08bdb771e58c3bbecfd370bf3df8d3e2c7b490f2))


### BREAKING CHANGES

* **bump versions:** styles now need to be imported separately





## [4.1.1](https://github.com/hey-car/heycar-uikit/compare/@heycar-uikit/switch@4.1.0...@heycar-uikit/switch@4.1.1) (2023-04-06)

**Note:** Version bump only for package @heycar-uikit/switch





# [4.1.0](https://github.com/hey-car/heycar-uikit/compare/@heycar-uikit/switch@4.0.0...@heycar-uikit/switch@4.1.0) (2023-03-20)


### Features

* **button:** the icon inside the button is centered ([#170](https://github.com/hey-car/heycar-uikit/issues/170)) ([d8d6d52](https://github.com/hey-car/heycar-uikit/commit/d8d6d52656b9f643db4d93f4c3dcd276c56d508c))





# [4.0.0](https://github.com/hey-car/heycar-uikit/compare/@heycar-uikit/switch@3.0.0...@heycar-uikit/switch@4.0.0) (2023-03-16)


### Features

* **badge:** restrict to 3 colors ([#165](https://github.com/hey-car/heycar-uikit/issues/165)) ([3a1f408](https://github.com/hey-car/heycar-uikit/commit/3a1f408fb15f6d61f960496723c7077daa1c1dd8))
* **switch:** added new hover and active states to switch ([#168](https://github.com/hey-car/heycar-uikit/issues/168)) ([20942f7](https://github.com/hey-car/heycar-uikit/commit/20942f785cb9f59c0333f3a4eb60372aca47e0ea))


### BREAKING CHANGES

* **badge:** using a color other than primary, secondary or tertiary will render the badge in
primary state

HEYUI-268

* defaults to primary styling the if the color prop value is not recognised

* feat(badge): restric to 3 colors

The Badge should only be used in primary, secondary or tertiary
* **badge:** using a color other than primary, secondary or tertiary will render the badge in
primary state

HEYUI-268

* update various tests

* update test





# [3.0.0](https://github.com/hey-car/heycar-uikit/compare/@heycar-uikit/switch@2.2.4...@heycar-uikit/switch@3.0.0) (2023-01-17)


### Features

* **grid:** add container component ([#128](https://github.com/hey-car/heycar-uikit/issues/128)) ([9eb07f3](https://github.com/hey-car/heycar-uikit/commit/9eb07f398b991bb8b98cc7b7c073496febfdc78b))


### BREAKING CHANGES

* **grid:** `Component` prop is renamed as `component` for grid Row, Column and Container

* docs(grid): add default value in docs

* feat: adjust row widths

* revert(grid): remove nested grid styles

* test: update screenshot tests

* chore: run npm install

Co-authored-by: mwagdi <mahmoud.elawadi@hey.car>





## [2.2.4](https://github.com/hey-car/heycar-uikit/compare/@heycar-uikit/switch@2.2.3...@heycar-uikit/switch@2.2.4) (2023-01-06)


### Bug Fixes

* **grid column:** fix the paddings ([#126](https://github.com/hey-car/heycar-uikit/issues/126)) ([b73afae](https://github.com/hey-car/heycar-uikit/commit/b73afaeeec8dc79c4de2d37c56fd11cb2d4fae5a))





## [2.2.3](https://github.com/hey-car/heycar-uikit/compare/@heycar-uikit/switch@2.2.2...@heycar-uikit/switch@2.2.3) (2023-01-04)


### Bug Fixes

* **grid:** update version as 2.0.0 and use the global variables for gaps ([#125](https://github.com/hey-car/heycar-uikit/issues/125)) ([b80fc26](https://github.com/hey-car/heycar-uikit/commit/b80fc26be86b14988cbd4cde636baf11d6de8acb))





## [2.2.2](https://github.com/hey-car/heycar-uikit/compare/@heycar-uikit/switch@2.2.1...@heycar-uikit/switch@2.2.2) (2022-11-30)


### Bug Fixes

* **input:** placeholder font weight to 400 ([#119](https://github.com/hey-car/heycar-uikit/issues/119)) ([40c585b](https://github.com/hey-car/heycar-uikit/commit/40c585b3b472c0c9197037fca4f3aee0eaf95dda))





## [2.2.1](https://github.com/hey-car/heycar-uikit/compare/@heycar-uikit/switch@2.2.0...@heycar-uikit/switch@2.2.1) (2022-11-15)


### Bug Fixes

* **input:** add z-index for input label ([#116](https://github.com/hey-car/heycar-uikit/issues/116)) ([be68f40](https://github.com/hey-car/heycar-uikit/commit/be68f40b3fd5bf90fd2c84d265427897ec44b87b))





# [2.2.0](https://github.com/hey-car/heycar-uikit/compare/@heycar-uikit/switch@2.1.0...@heycar-uikit/switch@2.2.0) (2022-11-07)


### Features

* **switch:** add tab index for accessibility with tab key on switch ([#95](https://github.com/hey-car/heycar-uikit/issues/95)) ([494af3a](https://github.com/hey-car/heycar-uikit/commit/494af3a128bebc7f283a67d96b30e650d6588537))





# [2.1.0](https://github.com/hey-car/heycar-uikit/compare/@heycar-uikit/switch@2.0.0...@heycar-uikit/switch@2.1.0) (2022-10-13)


### Features

* **accordion:** add onExpandedChange and onTransitionEnd ([#96](https://github.com/hey-car/heycar-uikit/issues/96)) ([c247b71](https://github.com/hey-car/heycar-uikit/commit/c247b719f9d6669a5aa9fd7f4ac2e264b7764350))





# [2.0.0](https://github.com/hey-car/heycar-uikit/compare/@heycar-uikit/switch@1.4.0...@heycar-uikit/switch@2.0.0) (2022-10-04)


### Features

* **grid:** change all dimensions according to the latest design ([#72](https://github.com/hey-car/heycar-uikit/issues/72)) ([74afd1d](https://github.com/hey-car/heycar-uikit/commit/74afd1d6004cafc0a4de003253cbaebfc6b1e0a1))


### BREAKING CHANGES

* **grid:** change all dimensions as the latest design

* test(grid): add null check tests for getGridClassNames util to improve test coverage

Add null check tests for getGridClassNames util to improve test coverage

* fix(grid): fix undefined result for classnames

fix undefined result for classnames

* fix(grid): fix undefined result for classnames

fix undefined result for classnames

* feat(grid): implement the margins according to grid design

Implement the margins according to grid design

* test(grid): update screenshot tests

update screenshot tests

* feat(grid): remove default padding on grid component

remove default padding on grid component

* feat(grid): add default margin in storybook

Add default margin size in stroybook

* chore: publish

 - @heycar-uikit/accordion@1.4.1
 - @heycar-uikit/button@1.9.1
 - @heycar-uikit/chip@0.3.1
 - @heycar-uikit/grid@2.0.0
 - @heycar-uikit/icons@1.8.1
 - @heycar-uikit/switch@1.4.1
 - @heycar-uikit/themes@1.8.1
 - @heycar-uikit/typography@1.4.1





# [1.4.0](https://github.com/hey-car/heycar-uikit/compare/@heycar-uikit/switch@1.3.2...@heycar-uikit/switch@1.4.0) (2022-09-30)


### Features

* **input:**  first implementation the input component ([#84](https://github.com/hey-car/heycar-uikit/issues/84)) ([87fbe55](https://github.com/hey-car/heycar-uikit/commit/87fbe5549048e44006781092e9e5707b6e63534d))





## [1.3.2](https://github.com/hey-car/heycar-uikit/compare/@heycar-uikit/switch@1.3.0...@heycar-uikit/switch@1.3.2) (2022-09-16)

**Note:** Version bump only for package @heycar-uikit/switch





# [1.3.0](https://github.com/hey-car/heycar-uikit/compare/@heycar-uikit/switch@1.2.0...@heycar-uikit/switch@1.3.0) (2022-09-14)


### Features

* **form-control:** the first implementation of the FormControl ([#82](https://github.com/hey-car/heycar-uikit/issues/82)) ([a677e41](https://github.com/hey-car/heycar-uikit/commit/a677e416511f411ee1389e42081963dd127254a9))





# [1.2.0](https://github.com/hey-car/heycar-uikit/compare/@heycar-uikit/switch@1.1.0...@heycar-uikit/switch@1.2.0) (2022-09-01)


### Features

* **badge:** The first implantation of badge component ([#42](https://github.com/hey-car/heycar-uikit/issues/42)) ([2ca5a7e](https://github.com/hey-car/heycar-uikit/commit/2ca5a7ea897c4cdeccaadca4f4d1592be40fe6e7))
* **collapse:** the first version of the collapse component ([#51](https://github.com/hey-car/heycar-uikit/issues/51)) ([b8d3f3f](https://github.com/hey-car/heycar-uikit/commit/b8d3f3f88cdfde98bb0f6364973895a5e9969182))





# [1.1.0](https://github.com/hey-car/heycar-uikit/compare/@heycar-uikit/switch@1.1.0...@heycar-uikit/switch@1.1.0) (2022-08-03)


### Features

* **badge:** The first implantation of badge component ([#42](https://github.com/hey-car/heycar-uikit/issues/42)) ([2ca5a7e](https://github.com/hey-car/heycar-uikit/commit/2ca5a7ea897c4cdeccaadca4f4d1592be40fe6e7))





# [1.1.0](https://github.com/hey-car/heycar-uikit/compare/@heycar-uikit/switch@1.1.0...@heycar-uikit/switch@1.1.0) (2022-08-03)


### Features

* **badge:** The first implantation of badge component ([#42](https://github.com/hey-car/heycar-uikit/issues/42)) ([2ca5a7e](https://github.com/hey-car/heycar-uikit/commit/2ca5a7ea897c4cdeccaadca4f4d1592be40fe6e7))





# 1.1.0 (2022-07-27)


### Features

* **switch:** initial implementation of the switch component ([#41](https://github.com/hey-car/heycar-uikit/issues/41)) ([fae4001](https://github.com/hey-car/heycar-uikit/commit/fae40014e387fd6a84275fdee825b265b798b7d3))
