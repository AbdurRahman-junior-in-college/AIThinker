"use client";

import React from "react";
import html2pdf from "html2pdf.js";

const DownloadPdfBtn = ({ title }) => {
  const handleDownLoadBtn = () => {
    const element = document.getElementById("blog-content");
    console.log(element)
    html2pdf().from(element).save(`${title}.pdf`);
  };
  return (
    <button
      onClick={handleDownLoadBtn}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      Download
    </button>
  );
};

export default DownloadPdfBtn;
