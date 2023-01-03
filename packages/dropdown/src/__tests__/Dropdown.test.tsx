/* eslint-disable prettier/prettier */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Dropdown from '../Dropdown';

describe('Dropdown', () => {
  describe('Prop tests', () => {
    it('should set value', () => {
      const { container } = render(
        <Dropdown
          onChange={() => { }}
          options={[
            {
              value: 'pomelo',
              label: 'Pomelo',
            },
            {
              value: 'apple',
              label: 'Apple',
            },
            {
              value: 'mango',
              label: 'Mango',
            },
          ]}
          value={{
            value: 'mango',
            label: 'Mango',
          }}
        />,
      );

      expect(container.querySelector('span')).toHaveTextContent('Mango');
    });


    it('should set options', () => {
      const { container } = render(
        <Dropdown
          onChange={() => { }}
          options={[
            {
              value: 'pomelo',
              label: 'Pomelo',
            },
            {
              value: 'apple',
              label: 'Apple',
            },
            {
              value: 'mango',
              label: 'Mango',
            },
          ]}
          value={{
            value: 'mango',
            label: 'Mango',
          }}
        />,
      );

      expect(container.getElementsByTagName('li')).toHaveLength(3);
    });
  });

  describe('State tests', () => {
    it('should set state disabled', () => {
      const { container } = render(
        <Dropdown
          disabled={true}
          onChange={() => { }}
          options={[
            {
              value: 'pomelo',
              label: 'Pomelo',
            },
            {
              value: 'apple',
              label: 'Apple',
            },
            {
              value: 'mango',
              label: 'Mango',
            },
          ]}
          value={{
            value: 'mango',
            label: 'Mango',
          }}
        />,
      );

      expect(container.querySelector('span')).toHaveClass('disabled');
    });
  });

  describe('Callbacks tests', () => {
    it('should call `onChange` prop', () => {
      const cb = jest.fn();
      const dataTestId = 'testId';
      const { getByTestId } = render(
        <Dropdown
          dataTestId={dataTestId}
          onChange={cb}
          options={[
            {
              value: 'pomelo',
              label: 'Pomelo',
            },
            {
              value: 'apple',
              label: 'Apple',
            },
            {
              value: 'mango',
              label: 'Mango',
            },
          ]}
          value={{
            value: 'mango',
            label: 'Mango',
          }}
        />,
      );

      const ul = getByTestId(dataTestId) as HTMLUListElement;

      if(ul.firstChild) fireEvent.click(ul.firstChild);

      expect(cb).toBeCalledTimes(1);
    });

    it('should call `onClick` prop', () => {
      const cb = jest.fn();
      const dataTestId = 'testId';
      const { container } = render(
        <Dropdown
          dataTestId={dataTestId}
          onClick={cb}
          options={[
            {
              value: 'pomelo',
              label: 'Pomelo',
            },
            {
              value: 'apple',
              label: 'Apple',
            },
            {
              value: 'mango',
              label: 'Mango',
            },
          ]}
          value={{
            value: 'mango',
            label: 'Mango',
          }}
        />,
      );

      const ul = container as HTMLUListElement;

      if(ul.firstChild) fireEvent.click(ul.firstChild);

      expect(cb).toBeCalledTimes(1);
    });

    it('should call `onBlur` prop', () => {
      const cb = jest.fn();
      const { container } = render(
        <Dropdown
          onBlur={cb}
          options={[
            {
              value: 'pomelo',
              label: 'Pomelo',
            },
            {
              value: 'apple',
              label: 'Apple',
            },
            {
              value: 'mango',
              label: 'Mango',
            },
          ]}
          value={{
            value: 'mango',
            label: 'Mango',
          }}
        />,
      );

      fireEvent.blur(container);

      expect(cb).toBeCalledTimes(1);
    });

    // it('should not call `onChange` prop if disabled', async () => {
    //   const cb = jest.fn();
    //   const { getByTestId } = render(
    //     <Input dataTestId={dataTestId} disabled={true} onChange={cb} />,
    //   );

    //   const input = getByTestId(dataTestId) as HTMLInputElement;

    //   await userEvent.type(input, '123');

    //   expect(cb).not.toBeCalled();
    // });
  });
});
