import * as React from "react";

const Button = React.forwardRef(({ className, ...props }, ref) => (
  <button ref={ref} className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`} {...props} />
));
Button.displayName = "Button";

export { Button };
