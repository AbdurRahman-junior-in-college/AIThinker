import React from "react";
import DOMPurify from "isomorphic-dompurify";

const HTMLPreview = ({ html }) => {
  const sanitized = DOMPurify.sanitize(html);
  return (
    <div
      className="prose max-w-none text-gray-900"
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  );
};

export default HTMLPreview;
