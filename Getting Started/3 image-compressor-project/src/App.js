import React from "react";
import imageCompression from "browser-image-compression";
import "./App.css";

const App = () => {
  const [options, setOptions] = React.useState(
    {
      maxSizeMB: 7,
      maxWidthOrHeight: 1920,
    }
  );

  const [imageURL, setImageURL] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [compressedImage, setCompressedImage] = React.useState(null);

  const handleChange = (event) => {
    /* The URL.creatObjectURL() method takes an object (like our file) and creates a temporary local URL 
       that is tied to the document in which it is created (meaning it won’t remember the URL if you leave 
       the page and come back). This URL can be used to set the the src property of a <img/> element. */
    setImageURL(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0]);
    console.log('input: ', event.target.files[0]);
  };

  async function compressImage() {
    const output = await imageCompression(image, options);
    console.log('output: ', output);
    setCompressedImage(URL.createObjectURL(output));
  }

  return (
    <>
      <div className="App">
        <Instructions />
      </div>
      <div className="key-section">
        <img src={imageURL} alt="User uploaded" />
        <Upload onUploadChange={handleChange} />
      </div>
      <div className="key-section">
        <Compress onCompressClick={compressImage} />
      </div>
      <div className="key-section">
        <img src={compressedImage} alt="User uploaded" />
        <Download />
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

const Download = () => <>Download</>;

const Instructions = () => (
  <>
    <h1>Three Simple Steps</h1>
    <ol>
      <li>Upload Image</li>
      <li>Click on Compress</li>
      <li>Download Compressed Image</li>
    </ol>
  </>
);

export default App;
