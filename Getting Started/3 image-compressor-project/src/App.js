import React from "react";
import imageCompression from "browser-image-compression";
import "./App.css";

const App = () => {
  const createImageObject = (image) => {
    if (image === null) {
      const emptyObj = {
        name: "",
        file: null,
        url: null,
      };
      return emptyObj;
    }

    const imageObj = {
      name: image.name,
      file: image,
      url: URL.createObjectURL(image),
    };
    return imageObj;
  };

  const [options, setOptions] = React.useState(
    {
      maxSizeMB: 7,
      maxWidthOrHeight: 1920,
    }
  );

  const [image, setImage] = React.useState();
  const [compressedImage, setCompressedImage] = React.useState();

  const handleChange = (event) => {
    const imageObj = createImageObject(event.target.files[0])
    /* The URL.creatObjectURL() method takes an object (like our file) and creates a temporary local URL 
       that is tied to the document in which it is created (meaning it won’t remember the URL if you leave 
       the page and come back). */
    
    console.log("input: ", imageObj.file);
    setImage(imageObj);
  };

  async function compressImage() {
    const output = await imageCompression(image.file, options);

    const imageObj = createImageObject(output);

    console.log('output: ', imageObj.file);
    setCompressedImage(imageObj);
  }

  return (
    <>
      <div className="instructions">
        <Instructions />
      </div>
      <div className="key-section">
        {image ? <img src={image.url} alt="User uploaded" /> : <></>}
        <Upload onUploadChange={handleChange} />
      </div>
      <div className="key-section">
        <Compress onCompressClick={compressImage} />
      </div>
      <div className="key-section">
        {compressedImage ? (
          <img src={compressedImage.url} alt="User uploaded" />
        ) : (
          <></>
        )}
        <Download image={compressedImage} />
      </div>
    </>
  );
};

const Upload = ({ onUploadChange }) => (
  <>
    <input type="file" onChange={onUploadChange} accept="image/*" />
  </>
);

const Compress = ({ onCompressClick }) => (
  <>
    <button onClick={onCompressClick}>Compress</button>
  </>
);

const Download = ({ image }) => (
  <>
    {image ? (
      <a href={image.url} download={image.name}>
        Download
      </a>
    ) : (
      <></>
    )}
  </>
);

const Instructions = () => (
  <>
    <h1 className="display-4">Three Simple Steps</h1>
    <ol>
      <li className="font-weight-normal">Upload Image</li>
      <li>Click on Compress</li>
      <li>Download Compressed Image</li>
    </ol>
  </>
);

export default App;
