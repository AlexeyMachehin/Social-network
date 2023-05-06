import { useState } from 'react';
import classes from "./photoButton.module.css"

// export default function PhotoButton() {
//   const [isImageUploaded, setIsImageUploaded] = useState('');

//   const handleImageUpload = (event: any) => {
//     // Действия, выполняемые после загрузки изображения
//     console.log(event);
//     setIsImageUploaded(event.target.files[0].name);
//   };

//   return (
//     <label className="container mainButton" htmlFor="fileInput">
//       {isImageUploaded ? `${isImageUploaded}` : 'Add photo'}
//       <input
//         id="fileInput"
//         type="file"
//         accept="image/*"
//         onChange={handleImageUpload}
//         hidden
//       />
//     </label>
//   );
// }


export default function PhotoButton() {
  const [isImageUploaded, setIsImageUploaded] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = (event: any) => {
    // Действия, выполняемые после загрузки изображения
    const file = event.target.files[0];
    setIsImageUploaded(file.name);

    // Преобразуем изображение в URL-адрес и сохраняем его в состоянии
    const imageUrll = URL.createObjectURL(file);
    setImageUrl(imageUrll);
  };

  return (
    <div className={classes.photoButtonContainer}>
      <label className="container mainButton" htmlFor="fileInput">
        {isImageUploaded ? `${isImageUploaded}` : 'Add photo'}
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
          <img className={classes.uploadedImage} src={imageUrl} alt="Uploaded" />
        </div>
      )}
    </div>
  );
}
