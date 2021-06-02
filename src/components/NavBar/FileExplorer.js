import React from 'react';
import File from '../File.jsx';
import axios from 'axios';

export default function FileExplorer(props) {
  const renderFile = (name) => {
    axios
      .post('/fs/individual', {
        name: name,
        username: props.username,
        project: props.project,
      })
      .then((res) => {
        const iframe = document.getElementById('indcomp');
        iframe.src = iframe.src;
      })
      .catch((err) => console.log(err));
  };

  const returnArr = () => {
    const arr = [];
    props.files.forEach((file) => {
      if (file.name !== 'index.js') {
        arr.push(<File name={file.name} renderFile={renderFile} />);
      }
    });
    return arr;
  };
  return (
    <div className='FileExplorer'>
      {props.username !== 'demo' ? (
        <button
          className='FileExplorerButton'
          onClick={() => props.useLoadStatus(false)}
        >
          Back
        </button>
      ) : (
        ''
      )}

      <br></br>
      <h2>Files Uploaded</h2>
      {props.files ? returnArr() : ''}
    </div>
  );
}
