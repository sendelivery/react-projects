import React from "react";
import "./App.css";

const App = () => {
  const [image, setImage] = React.useState(null);

  const handleChange = (event) => {
    /* The URL.creatObjectURL() method takes an object (like our file) and creates a temporary local URL 
       that is tied to the document in which it is created (meaning it won’t remember the URL if you leave 
       the page and come back). This URL can be used to set the the src property of a <img/> element. */
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <>
      <div className="App">
        <Instructions />
      </div>
      <div className="key-section">
        <Upload onUploadChange={handleChange} />
        <img src={image} alt="User uploaded" />
      </div>
      <div className="key-section">
        <Compress />
      </div>
      <div className="key-section">
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

const Compress = () => <>Compress</>;

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
