import { ComponentPropsWithRef, ForwardRefExoticComponent, ReactElement, ReactNode } from 'react';

export type ComboboxMode = 'spacey' | 'tight';
export type ComboboxRadius = 'none' | 'sm' | 'base' | 'md' | 'lg';
export type ComboboxShadow = 'none' | 'sm' | 'base' | 'md' | 'lg';
export type ComboboxSize = 'xs' | 'sm' | 'md' | 'lg';
export type ComboboxTone = 'base' | 'solid' | 'transparent';
export type ComboboxValidation = 'none' | 'invalid' | 'valid' | 'warning';

export interface ComboboxProps extends ComponentPropsWithRef<'div'> {
  clearable?: boolean;
  closeOnEscape?: boolean;
  disabled?: boolean;
  initialValue?: string;
  leftIcon?: ReactElement;
  loading?: boolean;
  maxHeight?: number;
  minWidth?: number;
  mode?: ComboboxMode;
  offset?: number;
  placeholder?: string;
  radius?: ComboboxRadius;
  searchable?: boolean;
  shadow?: ComboboxShadow;
  size?: ComboboxSize;
  tone?: ComboboxTone;
  validation?: ComboboxValidation;
  withRing?: boolean;
}

export interface ComboboxContext {
  mode?: ComboboxMode;
  search?: string;
  selectedLabel?: string | null;
  selectedValue?: string | null;
  setSearch(value: string): void;
  setSelectedLabel(value: string | null): void;
  setSelectedValue(value: string | null): void;
  size?: ComboboxSize;
}

export type ComboboxOptionType = {
  description?: string;
  disabled?: boolean;
  label: string;
  media?: ReactNode;
  value: string;
};

export type ComboboxGroupType = {
  heading: string;
  options: ComboboxOptionType[];
};

export type ComboboxComponent = ForwardRefExoticComponent<ComboboxProps> & {
  displayName?: string;
};
