import React from 'react';
// import type {} from 'react/jsx-runtime';
import { useState } from 'react'; 
import { uploadFiles } from '../api';

function UploadFile() {
    const [file, setFile] = useState<File | null>(null)
    const [uploading, setUploading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")

    const handleFileChange = (event:React.ChangeEvent<HTMLInputElement>)=> {
        if(event.target.files && event.target.files[0]) {
            setFile(event.target.files[0])
        }
    }
    setUploading(true)
    setMessage('')

    const handleUpload = async ()=> {
        if(!file) {
            setMessage('No file selected')
            return
        }
   
    const formData = new FormData()
    formData.append('pdf', file)

    try {
      setUploading(true);
      setMessage('');
      await uploadFiles(formData);  
      setMessage('Upload successful!');
    } catch (error) {
      console.error(error);
      setMessage('Upload failed.');
    } finally {
      setUploading(false);
    }
  };


return (
    <div>
      <h2>Upload your study notes</h2>
      <form action="" method="post">
      <label htmlFor="file-upload">Upload PDF:</label>
      <input
        id="file-upload"
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        disabled={uploading}
        title="Choose a PDF file to upload"
      />
      <button type='button' onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {message && <p>{message}</p>}
      </form>
    </div>
  );
};


export default UploadFile;