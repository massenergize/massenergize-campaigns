import { useEffect, useState } from "react";
import { isEmpty } from "../../helpers/utils/string";

const FileUploader = ({
                        text,
                        required,
                        id,
                        accept,
                        defaultValue,
                        onChange,
                      }) => {
  const [values, setValues] = useState({
    preview : null
  });

  const [previewUrl, setPreviewUrl] = useState(defaultValue ? defaultValue : null);

  useEffect(() => {
    setValues({
      ...values,
      preview : !isEmpty(defaultValue) && isEmpty(previewUrl) ? defaultValue : previewUrl
    })
  }, [previewUrl, defaultValue]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    typeof onChange === "function" && onChange(selectedFile, selectedFile.type);

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
    setValues({
      ...values,
      preview : null
    })
    typeof onChange === "function" && onChange(null);
  };

  const preview = values.preview;
  return (
    <div className="file-upload" style={{ position: "relative" }}>
      <label htmlFor={id} className="file-input-label">
        <input
          hidden
          id={id}
          type="file"
          className="file-input"
          onChange={handleFileChange}
          accept={accept ? accept : "image/*"}
        />
        {
          preview && (
            <button
              type="button"
              style={{
                zIndex: "9",
                width: 25,
                height: 25,
                background: "#ff0000",
                position: "absolute",
                borderRadius: 500,
                left: "100%",
                top: 0,
                transform: "translate(-50%, -50%)"
              }}
              onClick={handleRemoveImage}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="18px"
                width="18px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
              </svg>
            </button>
          )
        }
        <div className={"position-relative w-100 h-100"}>
          {
            preview ? (
              <>
                <img src={accept === ".csv" ? "/img/csv-icon.png" : preview} alt="Preview" className="preview-image"/>
              </>
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
