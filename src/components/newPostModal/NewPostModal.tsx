// import { useState, forwardRef } from 'react';
// import { useSpring, animated } from 'react-spring';
// import { Box, Button, Fab, IconButton, TextField } from '@mui/material';
// import Modal from '@mui/material/Modal';
// import classes from './newPostModal.module.css';
// import { PhotoCamera } from '@mui/icons-material';
// import PhotoButton from '../photoButton/PhotoButton';

// interface FadeProps {
//   children?: React.ReactElement;
//   in: boolean;
//   onEnter?: () => void;
//   onExited?: () => void;
// }

// const Fade = forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
//   const { in: open, children, onEnter, onExited, ...other } = props;
//   const style = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: open ? 1 : 0 },
//     onStart: () => {
//       if (open && onEnter) {
//         onEnter();
//       }
//     },
//     onRest: () => {
//       if (!open && onExited) {
//         onExited();
//       }
//     },
//   });

//   return (
//     <animated.div ref={ref} style={style} {...other}>
//       {children}
//     </animated.div>
//   );
// });

// export default function NewPostModal() {
//   const [isModalOpen, setOpen] = useState(false);

//   return (
//     <>
//       <button
//         onClick={() => setOpen(true)}
//         className={`container mainButton ${classes.newPostButton}`}>
//         New post
//       </button>
//       <Modal
//         className={classes.modalWrapper}
//         aria-labelledby="spring-modal-title"
//         aria-describedby="spring-modal-description"
//         open={isModalOpen}
//         onClose={() => setOpen(false)}
//         closeAfterTransition>
//         <Fade in={isModalOpen}>
//           <Box className={`container ${classes.textModal}`}>
//             <div className={classes.exitButtonWrapper}>
//               <label className="container mainButton" htmlFor="fileInput">
//                 Add photo
//                 <input id="fileInput" type="file" hidden />
//               </label>

//               <button
//                 onClick={() => setOpen(false)}
//                 className={classes.exitButton}>
//                 X
//               </button>
//             </div>
//             <PhotoButton />
//             <form style={{ width: '100%' }}>
//               <TextField
//                 className={classes.input}
//                 fullWidth
//                 multiline
//                 variant="outlined"
//               />

//               <button
//                 className={`container mainButton ${classes.createPostButton}`}>
//                 OK
//               </button>
//             </form>
//           </Box>
//         </Fade>
//       </Modal>
//     </>
//   );
// }

import { useState, forwardRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Box, Button, Fab, IconButton, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import classes from './newPostModal.module.css';
import { PhotoCamera } from '@mui/icons-material';
import PhotoButton from '../photoButton/PhotoButton';

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => void;
  onExited?: () => void;
}

const Fade = forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

export default function NewPostModal() {
  const [isModalOpen, setOpen] = useState(false);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null);

  const handleCameraButtonClick = async () => {
    try {
      // Получаем доступ к камере
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      // Устанавливаем mediaStream в состоянии
      setMediaStream(stream);
    } catch (err) {
      console.error(err);
    }
  };

  const handleTakePhotoClick = () => {
    if (!canvasRef || !mediaStream) {
      return;
    }

    // Создаем элемент video и устанавливаем srcObject в полученный mediaStream
    const video = document.createElement('video');
    video.srcObject = mediaStream;

    // Когда видео загружено, отображаем его на canvas и делаем снимок
    video.addEventListener('loadedmetadata', () => {
      const canvas = canvasRef;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext('2d');
      ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Освобождаем mediaStream и скрываем модальное окно
      setMediaStream(null);
      setOpen(false);
    });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`container mainButton ${classes.newPostButton}`}>
        New post
      </button>
      <Modal
        className={classes.modalWrapper}
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={isModalOpen}
        onClose={() => setOpen(false)}
        closeAfterTransition>
       <Fade in={isModalOpen}>
          <Box className={classes.modalContent}>
            <h2 id="spring-modal-title">Create a new post</h2>
            <TextField
              className={classes.input}
              label="Title"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              className={classes.input}
              label="Content"
              variant="outlined"
              size="small"
              fullWidth
              multiline
              rows={4}
            />
            <div className={classes.mediaContainer}>
              {mediaStream ? (
                <canvas
                  className={classes.canvas}
                  ref={(ref) => setCanvasRef(ref)}
                />
              ) : (
                <button onClick={handleCameraButtonClick}>
                 апрпар
                </button>
              )}
              <Button
                className={classes.takePhotoButton}
                variant="outlined"
                disabled={!mediaStream || !canvasRef}
                onClick={handleTakePhotoClick}>
                Take photo
              </Button>
            </div>
            <Button variant="contained" color="primary" fullWidth>
              Post
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
