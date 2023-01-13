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

    it('should set `full width` class', () => {
      const { container } = render(
        <Dropdown
          fullWidth={true}
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

      expect(container.firstElementChild).toHaveClass('fullWidth');
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

      if (ul.firstChild) fireEvent.click(ul.firstChild);

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

      if (ul.firstChild) fireEvent.click(ul.firstChild);

      expect(cb).toBeCalledTimes(1);
    });

    it('should call `onBlur` prop', () => {
      const cb = jest.fn();
      const cb1 = jest.fn();
      const dataTestId = 'testId';
      const { container } = render(
        <Dropdown
          dataTestId={dataTestId}
          onBlur={cb}
          onClick={cb1}
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

      if (ul.firstChild) fireEvent.click(ul.firstChild);
      if (ul.firstChild) fireEvent.blur(ul.firstChild);

      expect(cb).toBeCalledTimes(1);
    });

    it('should set `options` through prop', () => {
      const dataTestId = 'testId';
      const options = [
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
      ];
      const { getByTestId } = render(
        <Dropdown
          dataTestId={dataTestId}
          options={[...options]}
          value={{
            value: 'mango',
            label: 'Mango',
          }}
        />,
      );

      const ul = getByTestId(dataTestId) as HTMLUListElement;

      expect(ul.childElementCount).toBe(options.length);
    });
  });
});
