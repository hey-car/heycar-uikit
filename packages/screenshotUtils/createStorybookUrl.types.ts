// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type KnobValueType = string | boolean | number | any[];

export type KnobsCombinations = {
  [key: string]: KnobValueType | KnobValueType[];
};

export type Knobs = {
  [key: string]: KnobValueType;
};

export type CreateStorybookUrlParams = {
  url?: string;
  packageName?: string;
  knobs?: Knobs;
};
