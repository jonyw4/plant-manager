import React from 'react';

export type RadioGroupContextValue = any;
export type RadioGroupContextData =
    | [
          RadioGroupContextValue,
          React.Dispatch<React.SetStateAction<RadioGroupContextValue>>
      ]
    | undefined;

export const RadioGroupContext = React.createContext<RadioGroupContextData>(
    undefined
);
