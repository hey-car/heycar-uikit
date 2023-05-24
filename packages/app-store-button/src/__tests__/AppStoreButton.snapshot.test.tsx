import React from 'react';
import { render } from '@testing-library/react';

import AppStoreButton from '../AppStoreButton';
import { ComponentProps } from '../AppStoreButton.types';

const DEFAULT_DATA: ComponentProps = {
  href: 'https://apps.apple.com/uk/app/heycar/id1490142063',
  lang: 'en-EN',
  store: 'apple',
};

describe('AppStoreButton Snapshots tests', () => {
  describe('Apple', () => {
    it('should render default button in german', () => {
      expect(
        render(<AppStoreButton {...DEFAULT_DATA} lang="de-DE" />),
      ).toMatchSnapshot();
    });

    it('should render default button in english', () => {
      expect(render(<AppStoreButton {...DEFAULT_DATA} />)).toMatchSnapshot();
    });

    it('should render default button in spanish', () => {
      expect(
        render(<AppStoreButton {...DEFAULT_DATA} lang="es-ES" />),
      ).toMatchSnapshot();
    });

    it('should render default button in french', () => {
      expect(
        render(<AppStoreButton {...DEFAULT_DATA} lang="fr-FR" />),
      ).toMatchSnapshot();
    });

    it('should render alt button in german', () => {
      expect(
        render(<AppStoreButton {...DEFAULT_DATA} lang="de-DE" theme="alt" />),
      ).toMatchSnapshot();
    });

    it('should render alt button in english', () => {
      expect(
        render(<AppStoreButton {...DEFAULT_DATA} theme="alt" />),
      ).toMatchSnapshot();
    });

    it('should render alt button in spanish', () => {
      expect(
        render(<AppStoreButton {...DEFAULT_DATA} lang="es-ES" theme="alt" />),
      ).toMatchSnapshot();
    });

    it('should render alt button in french', () => {
      expect(
        render(<AppStoreButton {...DEFAULT_DATA} lang="fr-FR" theme="alt" />),
      ).toMatchSnapshot();
    });
  });

  describe('Google', () => {
    const GOOGLE_DATA: ComponentProps = {
      href: 'https://apps.apple.com/uk/app/heycar/id1490142063',
      lang: 'en-EN',
      store: 'google',
    };

    it('should render default button in german', () => {
      expect(
        render(<AppStoreButton {...GOOGLE_DATA} lang="de-DE" />),
      ).toMatchSnapshot();
    });

    it('should render default button in english', () => {
      expect(render(<AppStoreButton {...GOOGLE_DATA} />)).toMatchSnapshot();
    });

    it('should render default button in spanish', () => {
      expect(
        render(<AppStoreButton {...GOOGLE_DATA} lang="es-ES" />),
      ).toMatchSnapshot();
    });

    it('should render default button in french', () => {
      expect(
        render(<AppStoreButton {...GOOGLE_DATA} lang="fr-FR" />),
      ).toMatchSnapshot();
    });
  });
});
