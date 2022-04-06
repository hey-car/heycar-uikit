import React, { ReactNode } from 'react';

type TableProps = {
  header: ReactNode[];
  rows: ReactNode[][];
};

export const Table = ({ header, rows }: TableProps): JSX.Element => (
  <table>
    <thead>
      {header.map(cell => <th>{cell}</th>)}
    </thead>
    <tbody>
      {rows.map(row => (
        <tr>
          {row.map(cell => <td>{cell}</td>)}
        </tr>
      ))}
    </tbody>
  </table>
);
