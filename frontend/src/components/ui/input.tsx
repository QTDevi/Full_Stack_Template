import * as React from "react";

const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input ref={ref} className={`border px-3 py-2 rounded ${className}`} {...props} />
));
Input.displayName = "Input";

export { Input };
