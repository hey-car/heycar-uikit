import { HTMLAttributes } from 'react';

type StoreBrand = 'google' | 'apple';

type ButtonLangs = 'fr-FR' | 'de-DE' | 'en-EN' | 'es-ES';

interface ComponentProps {
  /**
   * Which brand's button to render. Apple or Google.
   */
  store: StoreBrand;
  /**
   * 	Language ISO code for the button
   */
  lang: ButtonLangs;
  /**
   * URL to navigate to on click. By default opens a new tab
   */
  href: string;
  /**
   * The id for testing
   */
  dataTestId?: string;
  /**
   * App button style
   */
  theme?: 'default' | 'alt';
}

type AppStoreButtonProps = ComponentProps & HTMLAttributes<HTMLAnchorElement>;

export { ButtonLangs, ComponentProps, AppStoreButtonProps, StoreBrand };
