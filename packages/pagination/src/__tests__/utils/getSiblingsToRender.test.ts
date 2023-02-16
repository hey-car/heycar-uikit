import { getSiblingsToRender } from '../../utils/getSiblingsToRender';

describe('getSiblingsToRender', () => {
  it('should return empty array if total page number is 1 or 2', () => {
    expect(getSiblingsToRender(1, 1)).toEqual([]);
    expect(getSiblingsToRender(2, 1)).toEqual([]);
  });

  it('should return 2 if total page number is 3', () => {
    const siblings = getSiblingsToRender(3, 1);

    expect(siblings).toEqual([2]);
  });

  it('should return 2, 3 if total page number is 4 and current page is 1', () => {
    const siblings = getSiblingsToRender(4, 1);

    expect(siblings).toEqual([2, 3]);
  });

  it('should return 2, 3 if total page number is 5 and current page is 1', () => {
    const siblings = getSiblingsToRender(5, 1);

    expect(siblings).toEqual([2, 3]);
  });

  it('should return 2, 3, 4 if total page number is 5 and current page is 3', () => {
    const siblings = getSiblingsToRender(5, 3);

    expect(siblings).toEqual([2, 3, 4]);
  });

  it('should return 4, 5 if total page number is 6 and current page is 6', () => {
    const siblings = getSiblingsToRender(6, 6);

    expect(siblings).toEqual([4, 5]);
  });

  it('should return 2, 3 if total page number is 6 and current page is 1', () => {
    const siblings = getSiblingsToRender(6, 1);

    expect(siblings).toEqual([2, 3]);
  });

  it('should return 3, 4, 5 if total page number is 7 and current page is 4', () => {
    const siblings = getSiblingsToRender(7, 4);

    expect(siblings).toEqual([3, 4, 5]);
  });
});
