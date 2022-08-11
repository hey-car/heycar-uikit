import getCollapseStyles from '../utils/getCollapseStyles';

const collapseContent = {
  current: {
    scrollHeight: 100,
  },
};
const openStyleState = {
  height: '100px',
};
const closeStyleState = {
  overflow: 'hidden',
  height: '0',
};

describe('getCollapseStyles', () => {
  it('open: true', async () => {
    const styles = getCollapseStyles(
      collapseContent as React.RefObject<HTMLDivElement>,
      true,
    );

    expect(styles).toMatchObject(openStyleState);
  });

  it('open: false', async () => {
    const styles = getCollapseStyles(
      collapseContent as React.RefObject<HTMLDivElement>,
      false,
    );

    expect(styles).toMatchObject(closeStyleState);
  });

  it('Empty Ref', async () => {
    const styles = getCollapseStyles(
      {} as React.RefObject<HTMLDivElement>,
      true,
    );

    expect(styles).toMatchObject({});
  });
});
