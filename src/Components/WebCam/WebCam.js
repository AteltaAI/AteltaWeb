import * as cam from "@mediapipe/camera_utils";
import * as mediapipePose from "@mediapipe/pose";
import React, { useEffect, useRef} from "react";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import "./WebCam.css"
import { Pose } from "@mediapipe/pose";
import Webcam from "react-webcam";

async function sendRequest(request_body){
  const API_URL = "http://localhost:8000/calculate";
  try{
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(request_body)
    });
    if (!response.ok){
      throw new Error("Network error try again...");
    }

    const jsonResponse = await response.json();
    return jsonResponse;
  }catch (error){
    console.log("Excepttion occurred, Failed to connect...");
  }
}

/*
const response = fetch("http://localhost:8000/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(request_body)
    });
*/

var frame_counter = 0;
// import Plot from 'react-plotly.js';

const UserPose = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  let camera = null;
  
  function onResults(results) {
    frame_counter = frame_counter + 1;

    let landmarks = results.poseLandmarks;

    // sending landmarks and frame information as json objects to the API 

    const request_body = {};

    request_body["frame_num"] = frame_counter;
    request_body["frame_height"] = webcamRef.current.video.videoWidth;
    request_body["frame_width"] = webcamRef.current.video.videoHeight;
    request_body['keypoints'] = {}

    for(var i = 0; i<33; i++){
      request_body['keypoints'][i] = [landmarks[i].x, landmarks[i].y, landmarks[i].z];
    }
    
    sendRequest(request_body)
    .then(response => {
      console.log("Success", response);
    })
    .catch(error => {
      console.log("Error", error);
    });

    /*
    This is how the API should work: 

    The expected request body should be:

    request_body = {
      frame_num: frame_counter 
      frame_height: frame_height, 
      frame_width: frame_width, 
      keypoints: {
        ...
      }
    }

    So now we need to apply to send this json object to our python bakend web server, through a POST request. 
    */


    // end of API request
    
    // Send request_body to FastAPI backend
    fetch("http://0.0.0.0:8080/get_score/", requestbody)
    .then(response => response.json())

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
            height: '720px', width: '1080px'
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
