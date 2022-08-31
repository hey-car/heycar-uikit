import getGridClassNames from './getGridClassNames';

describe('Grid utils', () => {
  it('createClassNames util should create correct classes', () => {
    const styles = {
      'order-1': 'order-1_prefix',
      'width-auto': 'width-auto_prefix',
      'offset-mobile-1': 'offset-mobile-1_prefix',
      'offset-tablet-s-1': 'offset-tablet-s-1_prefix',
      'offset-tablet-m-1': 'offset-tablet-m-1_prefix',
      'gutter-mobile-8': 'gutter-mobile-8_prefix',
      'gutter-mobile-s-8': 'gutter-mobile-s-8_prefix',
      'gutter-mobile-m-8': 'gutter-mobile-m-8_prefix',
      'gutter-mobile-l-8': 'gutter-mobile-l-8_prefix',
      'gutter-tablet-12': 'gutter-tablet-12_prefix',
      'gutter-tablet-s-12': 'gutter-tablet-s-12_prefix',
      'gutter-tablet-m-12': 'gutter-tablet-m-12_prefix',
      'gutter-tablet-l-12': 'gutter-tablet-l-12_prefix',
      'gutter-desktop-16': 'gutter-desktop-16_prefix',
      'gutter-desktop-s-16': 'gutter-desktop-s-16_prefix',
      'gutter-desktop-m-24': 'gutter-desktop-m-24_prefix',
      'gutter-desktop-l-24': 'gutter-desktop-l-24_prefix',
    };

    expect(getGridClassNames({}, styles)).toEqual([]);
    expect(
      getGridClassNames(
        {
          order: 1,
          width: 'auto',
          gutter: {
            mobile: { s: 1, m: 8, l: 8 },
            tablet: { s: 12, m: 12, l: 12 },
            desktop: { s: 16, m: 24, l: 24 },
          },
          offset: {
            mobile: 1,
            tablet: {
              s: 1,
              m: 1,
            },
          },
        },
        styles,
      ),
    ).toEqual([
      'order-1_prefix',
      'width-auto_prefix',
      undefined,
      'gutter-mobile-m-8_prefix',
      'gutter-mobile-l-8_prefix',
      'gutter-tablet-s-12_prefix',
      'gutter-tablet-m-12_prefix',
      'gutter-tablet-l-12_prefix',
      'gutter-desktop-s-16_prefix',
      'gutter-desktop-m-24_prefix',
      'gutter-desktop-l-24_prefix',
      'offset-mobile-1_prefix',
      'offset-tablet-s-1_prefix',
      'offset-tablet-m-1_prefix',
    ]);
  });
});
