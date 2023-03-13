import React from "react";

const variantClasses = {
  h1: "sm:text-[26px] md:text-[28px] text-[30px]",
  h2: "sm:text-[18px] md:text-[20px] text-[22px]",
  h3: "text-[16px]",
  h4: "text-[14px]",
  h5: "font-normal text-[12px]",
  h6: "text-[10px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
