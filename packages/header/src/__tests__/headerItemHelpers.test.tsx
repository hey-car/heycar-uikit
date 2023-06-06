/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';

import {
  France,
  Germany,
  Language,
  Netherlands,
  Spain,
  UK,
} from '@heycar-uikit/icons';

import {
  getCurrentLang,
  getFlagIcon,
  hasHeaderItems,
} from '../utils/headerItemHelpers';

describe('headerItemHelpers', () => {
  describe('getFlagIcon', () => {
    it('returns correct components for default languages', () => {
      const de = getFlagIcon('de-DE');
      const en = getFlagIcon('en-GB');
      const fr = getFlagIcon('fr-FR');
      const es = getFlagIcon('es-ES');
      const nl = getFlagIcon('nl-NL');

      expect(de).toEqual(<Germany />);
      expect(en).toEqual(<UK />);
      expect(fr).toEqual(<France />);
      expect(es).toEqual(<Spain />);
      expect(nl).toEqual(<Netherlands />);
    });

    it('returns Language icon for any other value', () => {
      const tr = getFlagIcon('tr-TR');
      const string = getFlagIcon('random string');

      expect(tr).toEqual(<Language />);
      expect(string).toEqual(<Language />);
    });
  });

  describe('getCurrentLang', () => {
    it('returns lang obj from default languages given a valid ISO code', () => {
      const de = getCurrentLang('de-DE');

      expect(de?.langCode).toEqual('de-DE');
      expect(de?.label).toEqual('Deutsch');
      expect(de?.shortName).toEqual('Deu');
      expect(de?.href).toEqual('#de-DE');
    });

    it('returns lang obj from given language list when given a valid ISO code', () => {
      const trObj = {
        langCode: 'tr-TR',
        label: 'Turkish',
        shortName: 'Trk',
        href: '#tr-TR',
      };
      const tr = getCurrentLang('tr-TR', [trObj]);

      expect(tr?.langCode).toEqual(trObj.langCode);
      expect(tr?.label).toEqual(trObj.label);
      expect(tr?.shortName).toEqual(trObj.shortName);
      expect(tr?.href).toEqual(trObj.href);
    });

    it('tries to find and return an icon to match lang', () => {
      const trObj = {
        langCode: 'tr-TR',
        label: 'Turkish',
        shortName: 'Trk',
        href: '#tr-TR',
      };
      const tr = getCurrentLang('tr-TR', [trObj]);
      const de = getCurrentLang('de-DE');

      expect(tr?.icon).toEqual(<Language />);
      expect(de?.icon).toEqual(<Germany />);
    });

    it('returns undefined if not given a valid ISO code or ISO code doesnt match the language list', () => {
      const tr = getCurrentLang('tr-TR');
      const string = getCurrentLang('kjdhjkd');

      expect(tr).toEqual(undefined);
      expect(string).toEqual(undefined);
    });
  });

  describe('hasHeaderItems', () => {
    it('returns hasXXXX as true if config object is present and hide property is falsy', () => {
      const { hasSearch, hasFaves, hasLang, hasAccount, hasCall } =
        hasHeaderItems(
          { label: 'search', hide: false, Component: <a /> },
          { label: 'favs', hide: undefined },
          { currentLang: 'en-GB', hide: false },
          { label: 'account' },
          { label: 'call', hide: false },
        );

      expect(hasSearch).toEqual(true);
      expect(hasFaves).toEqual(true);
      expect(hasLang).toEqual(true);
      expect(hasAccount).toEqual(true);
      expect(hasCall).toEqual(true);
    });

    it('returns hasXXXX as false if config object missing or hide property is true', () => {
      const { hasSearch, hasFaves, hasLang, hasAccount, hasCall } =
        hasHeaderItems(
          { label: 'search', hide: true, Component: <a /> },
          undefined,
          { currentLang: 'en-GB', hide: true },
          undefined,
          undefined,
        );

      expect(hasSearch).toEqual(false);
      expect(hasFaves).toEqual(false);
      expect(hasLang).toEqual(false);
      expect(hasAccount).toEqual(false);
      expect(hasCall).toEqual(false);
    });
  });
});
