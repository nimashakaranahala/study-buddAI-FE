import React, { useState } from 'react';
import { uploadFiles } from '../api';
import  useUserContext  from '../src/contexts/useUserContext';
import GenerateQuiz from './GenerateQuiz';

interface UploadFileProps {
  quiz_name?: string;
}

function UploadFile({ quiz_name }: UploadFileProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  
  const { loggedInUser } = useUserContext();
  const currentUser = loggedInUser.user_id.toString();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('user_id', currentUser);
    if (quiz_name) {
      formData.append('quiz_name', quiz_name);
    }

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
      <h3>Now upload your study notes</h3>

      <label htmlFor="file-upload">Upload PDF:</label>
      <input
        id="file-upload"
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        disabled={uploading}
        title="Choose a PDF file to upload"
      /> <br />
      <button type="button" onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {message && <p>{message}</p>}
      {message === "Upload successful!" && <GenerateQuiz/> }
    </div>
  );
}

export default UploadFile;
