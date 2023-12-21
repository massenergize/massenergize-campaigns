import { useState } from "react";

const FileUploader = ({
                        text,
                        required,
                        id,
                        accept,
                        defaultValue,
                        onChange,
                      }) => {
  const [previewUrl, setPreviewUrl] = useState(
    defaultValue ? defaultValue : null
  );

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    typeof onChange === "function" && onChange(selectedFile);

    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(selectedFile);
    }
  };

  const handleRemoveImage = () => {
    setPreviewUrl(null);
    typeof onChange === "function" && onChange(null);
  };

  return (
    <div className="file-upload" style={{ position: "relative" }}>
      <div style={{ position: "relative" }}>
        {
          previewUrl && (
          <button
            type="button"
            style={{
              zIndex: "9",
              width: "40px",
              height: "40px",
              background: "red",
              position: "absolute",
              borderRadius: "500px",
            }}
            onClick={handleRemoveImage}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
            </svg>
          </button>
        )}
      </div>
      <label htmlFor={id} className="file-input-label">
        <input
          id={id}
          type="file"
          className="file-input"
          onChange={handleFileChange}
          accept={accept ? accept : "image/*"}
        />
        <div>
          {previewUrl ? (
            <img
              src={
                accept === ".csv"
                  ? "https://cdn2.vectorstock.com/i/1000x1000/40/71/csv-file-document-icon-vector-24704071.jpg"
                  : previewUrl
              }
              alt="Preview"
              className="preview-image"
            />
          ) : (
            <span style={{ position: "absolute", top: "2.6rem", left: "2.5rem", }}>
							<svg
                stroke="#D1D5DB"
                fill="#D1D5DB"
                strokeWidth="0"
                viewBox="0 0 20 20"
                height="4em"
                width="4em"
                xmlns="http://www.w3.org/2000/svg"
              >
								<path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
							</svg>
						</span>
          )}
        </div>
      </label>

      <p style={{ color: "#9CA3AF", textAlign: "center", }}>
        {text} {required && "*"}
      </p>
    </div>
  );
};

export default FileUploader;
