import { useState, useRef } from 'react';

export const useFileUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    const file = files[0];
    if (file && (file.type === 'application/pdf' || file.type.includes('document') || file.type.includes('word'))) {
      setUploadedFile(file);
      setIsUploading(true);
      
      // Simulate upload process
      setTimeout(() => {
        setIsUploading(false);
      }, 2000);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setIsUploading(false);
  };

  return {
    dragActive,
    uploadedFile,
    isUploading,
    handleDrag,
    handleDrop,
    handleChange,
    handleFiles,
    removeFile,
    fileInputRef
  };
};
