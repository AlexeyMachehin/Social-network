import { useState } from 'react';
import classes from './photoButton.module.css';

export default function PhotoButton() {
  const [isImageUploaded, setIsImageUploaded] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Действия, выполняемые после загрузки изображения
    const file = event.target.files?.[0];
    if (file) {
      setIsImageUploaded(file.name);
      // Преобразуем изображение в URL-адрес и сохраняем его в состоянии
      const imageObjectURL = URL.createObjectURL(file);
      setImageUrl(imageObjectURL);
    }
  };

  return (
    <div className={classes.photoButtonContainer}>
      <label className="container mainButton" htmlFor="fileInput">
        {isImageUploaded ? `${isImageUploaded}` : 'Add image'}
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          hidden
        />
      </label>
      {imageUrl && (
        <div className={classes.uploadedImageContainer}>
          <img
            className={classes.uploadedImage}
            src={imageUrl}
            alt="Uploaded"
          />
        </div>
      )}
    </div>
  );
}
