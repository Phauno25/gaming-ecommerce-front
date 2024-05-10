import React, { type FormHTMLAttributes, type ReactNode } from "react";

type AuthFormProps = {
  title?: string;
  children?: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

const AuthForm = ({ title, children, ...props }: AuthFormProps) => {
  return (
    <div className="container w-1/2 flex flex-col gap-8">
      {title && (
        <div>
          <h3 className=" text-center text-3xl text-white font-extrabold">
            {title}
          </h3>
        </div>
      )}
      <form
        {...props}
        className="w-full flex flex-col justify-center items-center gap-8"
      >
        {children}
      </form>
    </div>
  );
};

export default AuthForm;
