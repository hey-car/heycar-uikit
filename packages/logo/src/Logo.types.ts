export type LogoProps = {
  size: number;
  color?: string;
};

interface FillColor {
  fill: string;
  undermark: string;
}

interface Color {
  [primary: string]: FillColor;
  secondary: FillColor;
  tertiary: FillColor;
}

export const Colors: Color = {
  primary: {
    fill: 'white',
    undermark: '#00CEA5',
  },
  secondary: {
    fill: '#052962',
    undermark: '#00CEA5',
  },

  tertiary: {
    fill: '#052962',
    undermark: 'white',
  },
};
