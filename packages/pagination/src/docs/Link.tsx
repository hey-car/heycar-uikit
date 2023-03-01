import React from 'react';

interface LinkProps {
  link: string;
}
const Link: React.FC<LinkProps> = ({ link, children, ...rest }) => (
  <a href={link} {...rest}>
    {children}
  </a>
);

export default Link;
