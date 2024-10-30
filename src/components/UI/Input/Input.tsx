import React, { forwardRef } from "react";
import { StyleInput, ErrorMessage } from "./Input.style";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
  isError: boolean;
}

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ type, placeholder, errorText, isError, ...props }, ref) => {
    return (
      <div>
        <StyleInput
          ref={ref}
          type={type}
          placeholder={placeholder}
          $isError={isError}
          {...props}
        />
        {isError && <ErrorMessage>{errorText}</ErrorMessage>}
      </div>
    );
  }
);

Input.displayName = "Input";
