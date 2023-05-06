/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useRef } from 'react';

export default function PhotoButton(): JSX.Element {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleClick = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });

      setStream(mediaStream);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTakePhoto = () => {
    const video = videoRef.current;

    if (!video) return;

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    context?.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL('image/png');

    setPhoto(dataUrl);

    video.pause();

    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const handleSavePhoto = () => {
    if (!photo) return;

    const link = document.createElement('a');
    link.href = photo;
    link.download = 'photo.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {!stream && <button onClick={handleClick}>Включить камеру</button>}
      {stream && (
        <div>
          <video id="videoPreview" ref={videoRef} autoPlay playsInline />
          <button onClick={handleTakePhoto}>Сделать фото</button>
        </div>
      )}
      {photo && (
        <div>
          <img src={photo} alt="Фото" />
          <button onClick={handleSavePhoto}>Сохранить фото</button>
        </div>
      )}
    </div>
  );
}
