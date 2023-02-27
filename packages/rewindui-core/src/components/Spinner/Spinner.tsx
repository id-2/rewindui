import { SpinnerProps } from '@components/Spinner/Spinner.types';
import { useComponentTheme } from '@theme/theme.context';
import React from 'react';

export const Spinner = (props: SpinnerProps) => {
  const theme = useComponentTheme('Spinner');
  const { size = 'sm', color = 'gray', className = '' } = props;
  const classes = className ? className : theme({ size, color, className });

  return (
    <svg className={classes} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

Spinner.displayName = 'Spinner';
