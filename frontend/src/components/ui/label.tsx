import * as React from "react";

const Label = ({ className, ...props }) => (
  <label className={`text-sm font-medium text-gray-700 ${className}`} {...props} />
);

export { Label };
