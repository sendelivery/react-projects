function App() {
  return (
    <div className="App">
      <Instructions />
    </div>
  );
}

const Instructions = () => 
    <>
      <h1>Three Simple Steps</h1>
      <ol>
        <li>Upload Image</li>
        <li>Click on Compress</li>
        <li>Download Compressed Image</li>
      </ol>
    </>

export default App;
