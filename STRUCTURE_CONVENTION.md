# Package structure convention

## Filename & Folders

Name files with `camelCase` or `pascalCase`. E.g. `Accordion.tsx`, `MyControl.tsx`, `utils.ts`, `map.ts` etc.

## Package folder structure

```
+-- exampleComponent
    +-- CHANGELOG.md
    +-- package.json
    +-- tsconfig.json
    +-- src
        +-- components
            +-- InternalExampleComponent
                +-- InternalExampleComponent.tsx
                ...
                +-- index.ts
        +-- utils
            +-- getSomething.ts
        +-- hooks
            +-- useExampleComponent.ts
            +-- useExampleComponent.types.ts
            +-- useExampleComponent.constants.ts
            ...
            +-- index.ts
        +-- docs
            +-- ExampleComponent.stories.ts
            +-- Description.mdx
            +-- AnyDoc.mdx
        +-- styles
            +-- default.module.css
            +-- size.module.css
            +-- any.module.css
        +-- __image_snapshots__
            +-- test-snapshot.png
            +-- any-snapshot.png
        +-- __snapshots__
            +-- ExampleComponent.test.tsx.snap
        +-- __tests__
            +-- ExampleComponent.test.tsx
            +-- exampleComponent.screenshots.test.tsx
            +-- ExampleComponent.mock.ts
        +-- ExampleComponent.tsx
        +-- ExampleComponent.types.ts
        +-- ExampleComponent.constants.ts
        ...
        +-- index.ts
```

## Package or module exporting

Each package or module should export the default entity according to a particular package or module.
Other elements such as types, utils, or any helpers of the package or module should be exported as a named export.

`ExampleComponent.tsx`

```JSX
function ExampleComponent() {
    return ...
}

export default ExampleComponent;
```

`ExampleComponent.types.ts`

```JSX

export interface ExampleComponentProps {
 ...
}

export interface ExampleComponentInterface {
 ...
}

```

`ExampleComponent/index.ts`

```typescript
export { default } from './ExampleComponent';

export * from './ExampleComponent.types.ts';
```

## Import package

```JSX
import ExampleComponent, {
  ExampleComponentProps,
  AnyThing,
} from '@heycar-uikit/ExampleComponent';
```

## Component Naming

Use the filename as the component name.
For example, `ExampleComponent.tsx` should have a reference name of `ExampleComponent`.
However, for root components of a directory, use `index.ts` as the filename and use the directory
name as the component name:

```typescript
// bad
import ExampleComponent from './ExampleComponent/ExampleComponent';

// bad
import ExampleComponent from './ExampleComponent/index';

// good
import ExampleComponent from './ExampleComponent';
```
