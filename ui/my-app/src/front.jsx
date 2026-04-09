import React from 'react';

function Front() {
  const handleDownload = async () => {
    try {
      const response = await fetch("http://localhost:8080/download", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to download file");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "logs.txt"; // or whatever filename you want
      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Logs</button>
    </div>
  );
}

export default Front