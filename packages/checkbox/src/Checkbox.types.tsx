export interface CheckboxProps {
  label: string;
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  onChange: (checked: boolean) => void;
}
