// import { useRef, useEffect, useState } from "react";
// import * as faceapi from "face-api.js";

// function FaceExpression() {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [expressions, setExpressions] = useState(null);

//   useEffect(() => {
//     const loadModels = async () => {
//       await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
//       await faceapi.nets.faceExpressionNet.loadFromUri("/models");
//     };

//     const startVideo = async () => {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       videoRef.current.srcObject = stream;
//     };

//     loadModels().then(startVideo);
//   }, []);

//   const handleVideoPlay = () => {
//     const interval = setInterval(async () => {
//       if (videoRef.current && canvasRef.current) {
//         const detections = await faceapi
//           .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
//           .withFaceExpressions();

//         if (detections && detections.length > 0) {
//           // Update expressions
//           setExpressions(detections[0].expressions);

//           // Resize canvas to match video dimensions
//           const video = videoRef.current;
//           const canvas = canvasRef.current;
//           const displaySize = { width: video.videoWidth, height: video.videoHeight };
//           faceapi.matchDimensions(canvas, displaySize);

//           // Clear canvas
//           const ctx = canvas.getContext("2d");
//           ctx.clearRect(0, 0, canvas.width, canvas.height);

//           // Draw detections and bounding boxes
//           const resizedDetections = faceapi.resizeResults(detections, displaySize);
//           faceapi.draw.drawDetections(canvas, resizedDetections);
//         }
//       }
//     }, 200);

//     return () => clearInterval(interval);
//   };

//   return (
//     <div className="text-center w-1/2 h-auto relative">
//       <video
//         ref={videoRef}
//         autoPlay
//         muted
//         onPlay={handleVideoPlay}
//         className="w-full rounded-lg shadow-lg"
//       ></video>
//       <canvas
//         ref={canvasRef}
//         className="absolute top-0 left-0 w-full h-full"
//       ></canvas>
//       <div className="mt-4">
//         <h2 className="text-lg font-semibold">Detected Expressions:</h2>
//         {expressions ? (
//           <ul className="mt-2 text-left">
//             {Object.entries(expressions).map(([expression, value]) => (
//               <li key={expression} className="capitalize">
//                 {expression}: {(value * 100).toFixed(2)}%
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No expression detected.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default FaceExpression;
