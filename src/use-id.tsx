import * as React from "react";

const Input: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & {
    hideLabel?: boolean;
    label: string;
    hasError?: boolean;
    error?: string;
    full?: boolean;
  }
> = ({
  hideLabel = false,
  hasError = false,
  full = true,
  label,
  error,
  ...rest
}) => {
  const id = React.useId();
  return (
    <div className="mt-4">
      <label
        htmlFor={id}
        className={`block text-sm font-medium ${hideLabel ? "sr-only" : ""}`}
      >
        {label}
      </label>
      <input
        id={id}
        className={`mt-2 rounded-lg border px-3 py-2 text-sm font-medium focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 ${
          full ? "w-full" : ""
        }`}
        {...rest}
      />
      {/* ErrorMessage */}
      {hasError && (
        <span className="mt-2 block text-xs font-medium text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};

export const Form: React.FC = () => {
  return (
    <div className="mx-auto max-w-xl px-4 pt-16 md:pt-20 lg:pt-28">
      <form className="rounded-lg px-4 py-8 shadow-lg">
        <Input label="First Name" />
        <Input label="Last Name" />
        <Input label="Email" type="email" />

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-indigo-500 px-3 py-2 text-white focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 focus-visible:ring"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
