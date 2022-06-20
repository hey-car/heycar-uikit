const fonts = `
  @font-face {
    font-family: 'Objektiv';
    font-display: swap;
    src: url('./static/objektivmk3_rg.ttf') format('ttf'),
      url('./static/objektivmk3_rg.ttf') format('ttf');
    font-weight: 200;
    font-style: normal;
    letter-spacing: 0;
  }

  /*
    We use the same definition with font-weight: normal.
    Otherwise this gets mapped to 400 which we don't support.
    Instead the browser will make a lighter version bigger.
  */
  @font-face {
    font-family: 'Objektiv';
    font-display: swap;
    src: url('./static/objektivmk3_rg.ttf') format('ttf'),
      url('./static/objektivmk3_rg.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
    letter-spacing: 0;
  }

  @font-face {
    font-family: 'Objektiv';
    font-display: swap;
    src: url('./static/objektivmk3_md.ttf') format('ttf'),
      url('./static/objektivmk3_md.ttf') format('ttf');
    font-weight: 300;
    font-style: normal;
    letter-spacing: 0;
  }

  @font-face {
    font-family: 'Objektiv';
    font-display: swap;
    src: url('./static/objektivmk3_bd.ttf') format('ttf'),
      url('./static/objektivmk3_bd.ttf') format('ttf');
    font-weight: 500;
    font-style: normal;
    letter-spacing: 0;
  }

  /*
    We use the same definition with font-weight: bold.
    Otherwise this gets mapped to 700 which we don't support.
    Instead the browser will take a lighter font and will just make it bolder.
  */
  @font-face {
    font-family: 'Objektiv';
    font-display: swap;
    src: url('./static/objektivmk3_bd.ttf') format('ttf'),
      url('./static/objektivmk3_bd.ttf') format('ttf');
    font-weight: bold;
    font-style: normal;
    letter-spacing: 0;
  }
`;

export default fonts;
