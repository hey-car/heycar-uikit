import {
  BreakpointObjectKeysType,
  BreakpointObjectType,
  BreakpointsKeysType,
  ResponsivePropertyType,
} from '../Grid.types';

function getGridClassNames(
  props: Record<string, ResponsivePropertyType | undefined>,
  styles: Record<string, string>,
) {
  const classNames: string[] = [];

  Object.keys(props).forEach(name => {
    const prop = props[name];

    if (!prop) return;

    if (typeof prop !== 'object') {
      classNames.push(styles[`${name}-${prop}`]);

      return;
    }
    (Object.keys(prop) as BreakpointsKeysType[]).forEach(breakpoint => {
      if (!prop[breakpoint]) return;

      if (typeof prop[breakpoint] === 'object') {
        const propBreakpointObject = prop[breakpoint] as BreakpointObjectType;

        (
          Object.keys(propBreakpointObject) as BreakpointObjectKeysType[]
        ).forEach(size => {
          const value = propBreakpointObject[size];

          if (!value) return;

          classNames.push(styles[`${name}-${breakpoint}-${size}-${value}`]);
        });
      } else {
        const value = prop[breakpoint];

        classNames.push(
          styles[`${name}-${breakpoint}-${value}`]
            ? styles[`${name}-${breakpoint}-${value}`]
            : '',
        );
      }
    });
  });

  return classNames;
}

export default getGridClassNames;
