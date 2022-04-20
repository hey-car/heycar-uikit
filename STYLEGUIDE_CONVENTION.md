# Code style guide

## Table of Contents

1. [React](#react)
2. [TypeScript](#typescript)
3. [CSS](#css)

## React

### JSX

Prefer normal functions (non arrow functions or classes):

```JSX
// bad
class Listing extends React.Component {
  render() {
    return <div>{this.props.hello}</div>;
  }
}

// bad (relying on function name inference is discouraged)
const Listing = ({ hello }) => (
  <div>{hello}</div>
);

// good
function Listing({ hello }) {
  return <div>{hello}</div>;
}
```

### Use extra event handler

```JSX
//bad
function FooComponent({ onClick }) {
 return <button onClick={()=>{
   ...
   onClick();
 }} />
}

//good
function FooComponent({ onClick }) {
 const handleButtonClick = () => {
  ...
  onClick();
 }

 return <button onClick={handleButtonClick} />
}
```

### Props Naming

Avoid using DOM component prop names for different purposes.

> Why? People expect props like `style` and `className` to mean one specific thing.
> Varying this API for a subset of your app makes the code less readable and less maintainable, and may cause bugs.

```JSX
// bad
<ExampleComponent style="fancy" />

// bad
<ExampleComponent className="fancy" />

// good
<ExampleComponent variant="fancy" />
```

### Props event naming

```JSX
// bad
function ExampleComponent({
  click,
  submit,
  ...
}) {
  return ...
}

// bad
function ExampleComponent({
  handleClick,
  handleSubmit,
  ...
}) {
  return ...
}

// good
function ExampleComponent({
  onClick,
  onSubmit,
  ...
}) {
  return ...
}

```

## TypeScript

### Handler event naming

The naming of the handler method contains three parts.

_handle_ _name of element_ _name of event_

```typescript
// bad
const buttonclickHandler = (event) => ...

// bad
const handleClick = (event) => ...

// good
const handleButtonClick = (event) => ...

// also good
const handleFormSubmit = (event) => ...
```

### Variable Naming

Boolean variables should start with one of these prefixes: `is`, `should`, `has`, `can`, `did`, `will`.

### Function Naming

A function or method that returns something must start with a prefix `get`

```typescript
function getNumber7() {
  return 7;
}
```

## CSS

[BEM](https://en.bem.info/methodology/quick-start/) is a front-end naming method for organizing and naming CSS classes.
The Block, Element, Modifier methodology is a popular naming convention for class names in HTML and CSS.
It helps to write clean CSS by following some simple rules.

There are three main parts of BEM.

1. `Block` which holds everything (elements) inside and acts as a scope.
2. `Element` which acts as a specific part of the component.
3. `Modifier` which adds additional styles to a specific element(s).

### Block

A functionally independent page component that can be reused. In HTML, blocks are represented by the `class` attribute.

```HTML
<!-- `header` block -->
<header class="header">
    <!-- Nested `logo` block -->
    <div class="logo"></div>

    <!-- Nested `search-form` block -->
    <form class="search-form"></form>
</header>
```

### Element

A composite part of a block that can't be used separately from it.
Identical elements in the same block have the same names. For example, all input fields in the search block are called `search-form__input`.

```HTML
<!-- `search-form` block -->
<form class="search-form">
    <!-- `input` element in the `search-form` block -->
    <input class="search-form__input">

    <!-- `button` element in the `search-form` block -->
    <button class="search-form__button">Search</button>
</form>
```

### Modifier

An entity that defines the appearance, state, or behavior of a block or element.
The modifier name describes its appearance ("What size?" or "Which theme?" and so on — `size_s` or `theme_islands`),
its state ("How is it different from the others?" — `disabled`, `focused`, etc.) and its behavior ("How does it behave?" or "How does it respond to the user?" — such as `directions_left-top`)

```HTML
<!-- The `search-form` block has the `focused` Boolean modifier -->
<form class="search-form search-form_focused">
    <input class="search-form__input">

    <!-- The `button` element has the `disabled` Boolean modifier -->
    <button class="search-form__button search-form__button_disabled">Search</button>
</form>
```
