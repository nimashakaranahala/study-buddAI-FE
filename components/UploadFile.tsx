import React, { useEffect, useState } from "react";
import { uploadFiles } from "../api";
import useUserContext from "../src/contexts/useUserContext";
import GenerateQuiz from "./GenerateQuiz";
import animation from "../src/assets/loading.json"
import Lottie from "lottie-react"

interface UploadFileProps {
  quizName?: string;
}

function UploadFile({ quizName }: UploadFileProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [fileId, setFileId] = useState<number | null>(null)

  const { loggedInUser } = useUserContext();
  const currentUser = loggedInUser.user_id.toString();

  // useEffect(() => {
  //   if (message) {
  //       setMessage("")
  //     return
  //   }
  // }, [message])
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
        setMessage("No file selected!");
        setTimeout(()=> {
          setMessage("");
        },3000 )
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_id", currentUser);
    if (quizName) {
      formData.append("quiz_name", quizName);
    }

    try {
      setUploading(true);
      setMessage("");
      const response = await uploadFiles(formData);
      setFileId(response.data.file_id)
      setMessage("Upload successful!");
    } catch (error) {
      console.error(error);
      setMessage("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  if(uploading) return <Lottie animationData={animation} loop={true} autoplay={true} className="loading-animation" />;

  
  return (
    <div className="upload-container">
      <h3 className="upload-title">2. Upload your notes</h3>
      <label className="upload-label" htmlFor="file-upload">
        Choose PDF
      </label>
      <input
        className="hide-file-input"
        id="file-upload"
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        disabled={uploading}
        title="Choose a PDF file to upload"
      />{" "}
      <br />
      {file && <p className="selected-file-name">{file.name}</p>}
      <button
        className="upload-btn"
        type="button"
        onClick={handleUpload}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {message && (
        <p
          className={`upload-msg ${message === "Upload successful!" ? "success" : "error"
          }`}
        >
          {message}
        </p>
      )}
      {message === "Upload successful!" && <GenerateQuiz fileId={fileId} quizName={quizName} />}
    </div>
  );
}

export default UploadFile;
