import * as cam from "@mediapipe/camera_utils";
import * as mediapipePose from "@mediapipe/pose";
import React, { useEffect, useRef} from "react";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import "./WebCam.css"
import { Pose } from "@mediapipe/pose";
import Webcam from "react-webcam";
// import Plot from 'react-plotly.js';

const UserPose = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  let camera = null;
  
  function onResults(results) {
    let landmarks = results.poseLandmarks;
    console.log(landmarks)
    canvasRef.current.width = webcamRef.current.video.videoWidth;
    canvasRef.current.height = webcamRef.current.video.videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
      results.image, 0, 0,
      canvasElement.width,
      canvasElement.height
    );
    drawConnectors(
      canvasCtx,
      results.poseLandmarks,
      mediapipePose.POSE_CONNECTIONS,
      { color: "white", lineWidth: 3 }
    );
    drawLandmarks(canvasCtx, results.poseLandmarks, {
      color: "red",
      lineWidth: 1,
      radius: 3,
    });
    canvasCtx.restore();
  }

  useEffect(() => {
    const userPose = new Pose({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
      },
    });
    userPose.setOptions({
      selfieMode: true,
      modelComplexity: 0,
      smoothLandmarks: true,
      enableSegmentation: false,
      smoothSegmentation: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    userPose.onResults(onResults);
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await userPose.send({ image: webcamRef.current.video });
        },
      });
      camera.start();
    }
  }, []);
  return (
    <div className="web-cam">
      <div className="web-cam-cont">
        <Webcam
          ref={webcamRef}
          style={{
            display: 'none'
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            height: '400px'
          }}
        ></canvas>
        {/* <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      /> */}
        <div className="landmark-grid-container"></div>
      </div>
    </div>
  );
};

export default UserPose;
