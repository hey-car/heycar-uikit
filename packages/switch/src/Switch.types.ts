export interface SwitchProps {
  /**
   * If true, the switch is displayed as checked
   */
  checked?: boolean;
  /**
   * Function that will be called every time the Switch value is changed. The argument `isChecked` represent the new/target value of the `checked` attribute.
   */
  onChange?: (isChecked: boolean) => void;
}
