import * as React from "react";

const Dialog = ({ open, onClose, children }) => {
  return open ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        {children}
        <button onClick={onClose} className="mt-2 p-2 bg-red-500 text-white rounded">
          Close
        </button>
      </div>
    </div>
  ) : null;
};

export { Dialog };
