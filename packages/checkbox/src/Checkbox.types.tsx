export interface CheckboxProps {
  label: string;
  checked: boolean;
  className?: string;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}
