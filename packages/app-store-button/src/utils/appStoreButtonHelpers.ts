import { APPLE_ALT_TEXT, GOOGLE_ALT_TEXT } from '../AppStoreButton.constants';
import { ButtonLangs, StoreBrand } from '../AppStoreButton.types';
import appStoreDeWhite from '../images/app-store-de-white.webp';
import appStoreDe from '../images/app-store-de.webp';
import appStoreEnWhite from '../images/app-store-en-white.webp';
import appStoreEn from '../images/app-store-en.webp';
import appStoreEsWhite from '../images/app-store-es-white.webp';
import appStoreEs from '../images/app-store-es.webp';
import appStoreFrWhite from '../images/app-store-fr-white.webp';
import appStoreFr from '../images/app-store-fr.webp';
import googlePlayDe from '../images/google-play-de.webp';
import googlePlayEn from '../images/google-play-en.webp';
import googlePlayEs from '../images/google-play-es.webp';
import googlePlayFr from '../images/google-play-fr.webp';

const getImgProps = (
  store: StoreBrand,
  lang: ButtonLangs,
  theme: 'default' | 'alt',
) => {
  const isAlt = theme === 'alt';

  if (store === 'apple') {
    if (lang === 'de-DE')
      return {
        alt: APPLE_ALT_TEXT.de,
        src: isAlt ? appStoreDeWhite : appStoreDe,
      };
    if (lang === 'en-EN')
      return {
        alt: APPLE_ALT_TEXT.en,
        src: isAlt ? appStoreEnWhite : appStoreEn,
      };
    if (lang === 'es-ES')
      return {
        alt: APPLE_ALT_TEXT.es,
        src: isAlt ? appStoreEsWhite : appStoreEs,
      };
    if (lang === 'fr-FR')
      return {
        alt: APPLE_ALT_TEXT.fr,
        src: isAlt ? appStoreFrWhite : appStoreFr,
      };
  }

  if (store === 'google') {
    if (lang === 'de-DE')
      return {
        alt: GOOGLE_ALT_TEXT.de,
        src: googlePlayDe,
      };
    if (lang === 'en-EN')
      return {
        alt: GOOGLE_ALT_TEXT.en,
        src: googlePlayEn,
      };
    if (lang === 'es-ES')
      return {
        alt: GOOGLE_ALT_TEXT.es,
        src: googlePlayEs,
      };
    if (lang === 'fr-FR')
      return {
        alt: GOOGLE_ALT_TEXT.fr,
        src: googlePlayFr,
      };
  }

  return undefined;
};

export { getImgProps };
