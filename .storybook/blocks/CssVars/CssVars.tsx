import React, { FC} from 'react';
import cn from 'classnames';
import { Example } from 'storybook-addon-live-examples';

type Props = {
  css: string;
  title?: string;
};

const rootBlockRegexp = /:root {([^}]*)}/g;

export const CssVars: FC<Props> = ({ css, title }) => {
  const getVars = () => {

    let rootBlockMatch = rootBlockRegexp.exec(css);
    const rootBlocks = [];

    while (rootBlockMatch) {
      rootBlocks.push(rootBlockMatch[1]);
      rootBlockMatch = rootBlockRegexp.exec(css);
    }

    let result = rootBlocks.reduce((acc, item, index) => {
      const isLast = index === rootBlocks.length - 1;
      const divider = isLast ? '' : '\n';

      return `${acc}${item}${divider}`;
    }, ':root {');

   return  result += '}';
  }

  return (
    <div>
      {title && <h2 className={cn('sbdocs', 'sbdocs-h2')}>{title}</h2>}
      <Example code={getVars()} language="css" />
    </div>
  );
};
