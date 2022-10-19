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
      'gutter-tablet-12': 'gutter-tablet-12_prefix',
      'gutter-desktop-16': 'gutter-desktop-16_prefix',
    };

    const gutterStyles = {
      'gutter-tablet-s-12': 'gutter-tablet-s-12_prefix',
      'gutter-tablet-l-16': 'gutter-tablet-l-16_prefix',
      'gutter-desktop-s-16': 'gutter-desktop-s-16_prefix',
      'gutter-desktop-m-16': 'gutter-desktop-m-16_prefix',
      'gutter-desktop-l-24': 'gutter-desktop-l-24_prefix',
    };

    expect(getGridClassNames({}, styles)).toEqual([]);
    expect(
      getGridClassNames(
        { gutter: { mobile: undefined, tablet: { s: undefined } } },
        styles,
      ),
    ).toEqual([]);
    expect(
      getGridClassNames(
        {
          order: 1,
          width: 'auto',
          gutter: {
            mobile: 8,
            tablet: 12,
            desktop: 16,
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
      'gutter-mobile-8_prefix',
      'gutter-tablet-12_prefix',
      'gutter-desktop-16_prefix',
      'offset-mobile-1_prefix',
      'offset-tablet-s-1_prefix',
      'offset-tablet-m-1_prefix',
    ]);

    expect(getGridClassNames({}, styles)).toEqual([]);

    expect(
      getGridClassNames(
        {
          gutter: {
            mobile: 1,
            tablet: { s: 12, l: 16 },
            desktop: { s: 16, m: 16, l: 24 },
          },
        },
        gutterStyles,
      ),
    ).toEqual([
      '',
      'gutter-tablet-s-12_prefix',
      'gutter-tablet-l-16_prefix',
      'gutter-desktop-s-16_prefix',
      'gutter-desktop-m-16_prefix',
      'gutter-desktop-l-24_prefix',
    ]);
  });
});
