export interface SwitchProps {
  /**
   * Controls the state of the switch. If true, the switch is displayed as checked
   */
  checked: boolean;
  /**
   * Function that will be called every time the Switch value is changed. The `boolean` property `event.target.checked` represent the new/target value of the Switch.
   */
  onChange: () => void;
  /**
   * Additional `class` names to be added
   */
  className?: string;
  /**
   * Controls if the Switch is disabled
   */
  disabled?: boolean;
}
