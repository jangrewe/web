import React from 'react';

export interface LabelProps {
  error?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export const InputWrapper = ({
  error,
  disabled,
  children,
}: LabelProps): JSX.Element => (
  <div
    className={`flex w-full border-y border rounded-md ${
      disabled
        ? 'bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-gray-400 border-gray-400'
        : ''
    } ${
      error
        ? 'border-red-500'
        : disabled
        ? 'border-gray-200'
        : ' focus-within:border-primary hover:border-primary'
    }`}
  >
    {children}
  </div>
);
