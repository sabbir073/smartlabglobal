import React, { useState } from "react";

interface InputFieldWrapperProps
  extends React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  type?: "text" | "email" | "textarea"| "password" | "tel";
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  className?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

const InputFieldWrapper: React.FC<InputFieldWrapperProps> = ({
  label,
  type = "text",
  value = "",
  onChange,
  className = "",
  name,
  placeholder,
  required = false,
  error,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // Determine if label should be floating (focused or has value)
  const isFloating = isFocused || (value && value.length > 0);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const labelText = label || placeholder || "";

  return (
    <div className="relative w-full">
      {type === "textarea" ? (
        <>
          {/* Static Label */}
          <label
            htmlFor={name}
            className="block mb-1 text-[14px] md:text-[16px] text-white font-medium"
          >
            {labelText}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>

          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            className={`w-full min-h-12 pt-3 pb-2 px-1 bg-transparent border-b border-[#FFFFFFD6] outline-none resize-none focus:outline-none  text-white placeholder-[#FFFFFFB2] ${className}`}
            {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </>
      ) : (
        <>
          {/* Floating Label */}
          <label
            htmlFor={name}
            className={`absolute left-0 transition-all duration-200 ease-in-out pointer-events-none text-white font-medium text-[14px] md:text-[16px] ${
              isFloating
                ? "top-0 text-xs px-1 -translate-y-1/2"
                : "top-1/2 text-base -translate-y-1/2"
            }`}
          >
            {labelText}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>

          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder=" "
            className={`w-full h-12 px-1 pt-2 bg-transparent border-b border-[#FFFFFFD6] outline-none focus:outline-none active:outline-none transition-all duration-200 text-white ${className}`}
            {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          />

          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </>
      )}
    </div>
  );
};

export default InputFieldWrapper;
