import React from 'react';

import Pagination from './Pagination';
import PaginationItem from './PaginationItem';

export interface OverridableComponent {
  <C extends React.ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: C;
    } & React.ComponentPropsWithRef<C>,
  ): JSX.Element | null;
}

export const Test: OverridableComponent = ({ component, ...rest }) => {
  return <div {...rest}></div>;
};

interface Test2Component {
  (props: { string: string }): JSX.Element | null;
}
const Test2: Test2Component = ({ string }) => {
  return <div>{string}</div>;
};

const MyLink = ({ href }: { href: string }) => {
  return <a href={href}>This is a link</a>;
};

export const App: React.FC = () => {
  return (
    <div>
      <Test component={MyLink} href={'test'}></Test>
      <Test2 string={'s'}></Test2>
      {/*<Pagination totalPages={10}  />*/}
    </div>
  );
};

interface LinkProps {
  link: string;
}
const Link: React.FC<LinkProps> = ({ link, children }) => (
  <div>
    <a href={link}>{children}</a>
  </div>
);

export const PaginationTest = () => {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      This is test
      <Pagination
        currentPage={5}
        renderItem={item => (
          <PaginationItem
            Component={Link}
            link={`this is a link number ${item.page}`}
            {...item}
          />
        )}
        totalPages={10}
      />
    </div>
  );
};
