import clsx from "clsx";
import React, { forwardRef, useId } from "react";
import { type InputHTMLAttributes } from "react";
import { Controller } from "react-hook-form";

type InputProps = {
  label?: string;
  helperText?: string;
  error?: boolean | ((arg: any) => boolean);
} & InputHTMLAttributes<HTMLInputElement>;

const InputField = forwardRef(
  ({ label, helperText, error, ...props }: InputProps, ref) => {
    const defaultId = useId();
    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label htmlFor={props.name} className="block">
            {label}
          </label>
        )}
        <input
          id={props.id || defaultId}
          ref={ref as any}
          {...props}
          className={clsx(
            "px-4 py-2 border-none rounded-md bg-neutral-950 outline-none",
            {
              "focus:outline-orange-500": !error,
            },
            { "outline-red-700 outline focus:outline-red-500": error }
          )}
        />
        {helperText && (
          <span className={clsx({ "text-red-500": error }, "text-sm")}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";
export default InputField;
