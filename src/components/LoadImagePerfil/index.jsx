import React from 'react';
import ImageUploader from 'react-images-uploading';

const LoadImagePerfil = ({ onImageChange }) => {
  const onDrop = (pictureFiles, pictureDataURLs) => {
    if (pictureFiles.length > 0) {
      onImageChange(pictureFiles[0], pictureDataURLs[0]);
    }
  };

  return (
    <ImageUploader
      withIcon={true}
      buttonText="Elige una imagen"
      onChange={onDrop}
      singleImage={true}
      withPreview={false}
    />
  );
};

export default LoadImagePerfil;