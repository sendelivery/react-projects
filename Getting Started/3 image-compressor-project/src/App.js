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
      <div className="instructions mt-5">
        <Instructions />
      </div>
      <div className="row m-5">
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div>
            {image ? <img src={image.url} alt="User uploaded" /> : <></>}
          </div>
          <div className="bg-dark rounded m-3 p-3">
            <Upload onUploadChange={handleChange} />
          </div>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-12 mb-5 mt-5 col-sm-12 d-flex justify-content-center align-items-baseline">
          <Compress onCompressClick={compressImage} />
        </div>

        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div>
            {compressedImage ? (
              <img src={compressedImage.url} alt="User uploaded" />
            ) : (
              <></>
            )}
          </div>
          <div className="d-flex justify-content-center">
            <Download image={compressedImage} />
          </div>
        </div>
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
    <button className="btn btn-dark" onClick={onCompressClick}>Compress</button>
  </>
);

const Download = ({ image }) => (
  <>
    {image ? (
      <a className="btn btn-dark bg-dark rounded m-3 w-75" href={image.url} download={image.name}>
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