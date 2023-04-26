import React, { FC } from 'react';

import { defaultData } from '../__tests__/Header.mock';
import {
  englishStyle,
  frenchStyle,
  germanStyle,
  spanishStyle,
} from '../__tests__/navigationItems.mock';
import Header from '../Header';
import { HeaderProps } from '../Header.types';

interface HeaderCanvasProps
  extends Pick<
    HeaderProps,
    'LinkComponent' | 'logoHref' | 'trackingFn' | 'locale' | 'dataTestId'
  > {
  searchItemConfig: boolean;
  favoritesItemConfig: boolean;
  favoritesCount: number;
  langItemConfig: boolean;
  accountItemConfig: boolean;
  callItemConfig: boolean;
  navigation: string;
  auxiliaryDetails: boolean;
}

const mapLabelsToValues = (canvasArgs: HeaderCanvasProps) => {
  const favoritesCount = canvasArgs.favoritesCount;

  const headerProps: Record<string, any> = {
    ...canvasArgs,
  };

  delete headerProps.favoritesCount;

  if (canvasArgs.searchItemConfig === true) {
    headerProps.searchItemConfig = defaultData.searchItemConfig;
  } else {
    headerProps.searchItemConfig = undefined;
  }

  if (canvasArgs.favoritesItemConfig === true) {
    headerProps.favoritesItemConfig = defaultData.favoritesItemConfig;

    headerProps.favoritesItemConfig.favoritesNumber = favoritesCount;
  } else {
    headerProps.favoritesItemConfig = undefined;
  }

  if (canvasArgs.langItemConfig === true) {
    headerProps.langItemConfig = defaultData.langItemConfig;
    // } else if (canvasArgs.langItemConfig === 'Custom Lang select') {
    //   headerProps.langItemConfig = {
    //     currentLang: 'tr-TR',
    //     options: [
    //       {
    //         langCode: 'tr-TR',
    //         label: 'Turkish',
    //         shortName: 'Tur',
    //         href: '#tr-TR',
    //       },
    //       {
    //         langCode: 'yo-NG',
    //         label: 'Yoruba',
    //         shortName: 'Yor',
    //         href: '#yo-NG',
    //       },
    //       {
    //         langCode: 'pl-PL',
    //         label: 'Polish',
    //         shortName: 'Pol',
    //         href: '#pl-PL',
    //       },
    //       {
    //         langCode: 'pt-BR',
    //         label: 'Portuguese',
    //         shortName: 'Prt',
    //         href: '#pt-BR',
    //       },
    //     ],
    //   };
  } else {
    headerProps.langItemConfig = undefined;
  }

  if (canvasArgs.accountItemConfig === true) {
    headerProps.accountItemConfig = defaultData.accountItemConfig;
  } else {
    headerProps.accountItemConfig = undefined;
  }

  if (canvasArgs.callItemConfig === true) {
    headerProps.callItemConfig = defaultData.callItemConfig;
  } else {
    headerProps.callItemConfig = undefined;
  }

  if (canvasArgs.navigation === 'French Style') {
    headerProps.navigation = frenchStyle;
  } else if (canvasArgs.navigation === 'German Style') {
    headerProps.navigation = germanStyle;
  } else if (canvasArgs.navigation === 'Spanish Style') {
    headerProps.navigation = spanishStyle;
  } else {
    headerProps.navigation = englishStyle;
  }

  if (canvasArgs.auxiliaryDetails === true) {
    headerProps.auxiliaryDetails = defaultData.auxiliaryDetails;
  } else {
    headerProps.auxiliaryDetails = undefined;
  }

  return headerProps as HeaderProps;
};

export const HeaderCanvas: FC<HeaderCanvasProps> = canvasProps => {
  const props = mapLabelsToValues(canvasProps);

  return <Header {...props} />;
};
