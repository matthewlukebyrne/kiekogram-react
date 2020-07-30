import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // Allowed types
  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0]; // targets one file

    if(selected && types.includes(selected.type)){
      setFile(selected);
      setError(''); // reset to empty string
    } else {
      setFile(null);
      setError('please select the correct image file!');
    }
  }

  // Reactive to event changechandler above
  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
        <p>Add</p>
      </label>
      <div className = "output">
        { error && <div className="error"> { error } </div> }
        { file && <div> { file.name } </div>}
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  )
}

export default UploadForm;