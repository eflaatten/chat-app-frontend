import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Modal from "react-modal";
import { Trash } from "lucide-react";

const ChangeProfilePicture = ({ isOpen, onClose }) => {
  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleRemoveFile = (event) => {
    event.stopPropagation();
    setFile(null);
  };

  const handleSubmit = () => {
    // Handle file upload logic here
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setFile(null);
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className='modal modal-open'
      overlayClassName='modal-overlay'
    >
      <div className='modal-box'>
        <h2 className='text-2xl font-bold mb-4'>Change Profile Picture</h2>
        <div
          {...getRootProps()}
          className={`relative border-dashed border-2 p-6 text-center cursor-pointer rounded-full w-52 h-52 mx-auto flex items-center justify-center ${
            file
              ? "border-transparent"
              : isDragActive
              ? "border-green-500"
              : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          {file ? (
            <>
              <img
                src={URL.createObjectURL(file)}
                alt='Profile'
                className='w-full h-full rounded-full object-cover'
              />
              <button
                className='absolute bottom-3 right-3 m-1 p-1 bg-primary text-primary-content rounded-full'
                onClick={handleRemoveFile}
              >
                <Trash className='h-4 w-4' />
              </button>
            </>
          ) : (
            <p className='text-gray-500'>
              {isDragActive ? "Drop the file here..." : "Drag & Drop"}
            </p>
          )}
        </div>
        <div className='mt-2 flex justify-center'>
          <p className='text-gray-500'>Or</p>
        </div>
        <div className='mt-2 flex justify-center'>
          <input
            type='file'
            onChange={handleFileChange}
            className='hidden'
            id='fileInput'
          />
          <label
            htmlFor='fileInput'
            className='btn btn-secondary transform transition-transform duration-200 hover:scale-105'
          >
            Choose File
          </label>
        </div>
        <div className='modal-action'>
          <button
            onClick={onClose}
            className='btn transform transition-transform duration-200 hover:scale-105'
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className={`btn btn-primary transform transition-transform duration-200 hover:scale-105 ${
              !file ? "btn-disabled" : ""
            }`}
            disabled={!file}
          >
            Upload
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ChangeProfilePicture;
