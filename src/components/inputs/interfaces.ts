export type Change = any;

export interface InputGroupProps {
  id: string;
  label: string;
  colSpan?: number | string;
  inputElement: any;
  subtitle?: any;
  required?: boolean;
  extraClasses?: string;
  placeholder?: string;
  hasError?: boolean;
  errorMessage?: string;
}

export interface InputProps {
  id: string;
  type?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean
  onBlur?:any;
  onChange?:any;
  classNames?: string;
}