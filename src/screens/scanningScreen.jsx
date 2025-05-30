import React, { useEffect, useRef, useState } from "react";
import * as tmImage from "@teachablemachine/image";
import { useNavigate } from "react-router-dom";

const ScanningScreen = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [model, setModel] = useState(null);
  const [webcam, setWebcam] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const MODEL_PATH = "/tm-model/";
  const stableLabelRef = useRef(null);
  const stableStartTimeRef = useRef(null);
  const hasNavigatedRef = useRef(false);

  useEffect(() => {
    const initModel = async () => {
      const modelURL = MODEL_PATH + "model.json";
      const metadataURL = MODEL_PATH + "metadata.json";

      const loadedModel = await tmImage.load(modelURL, metadataURL);
      const newWebcam = new tmImage.Webcam(320, 240, true);
      await newWebcam.setup();
      await newWebcam.play();
      setModel(loadedModel);
      setWebcam(newWebcam);

      if (videoRef.current) {
        videoRef.current.innerHTML = "";
        videoRef.current.appendChild(newWebcam.canvas);
        newWebcam.canvas.style.width = "100%";
        newWebcam.canvas.style.height = "100%";
        newWebcam.canvas.style.objectFit = "cover";
        newWebcam.canvas.style.borderRadius = "16px";
      }

      requestAnimationFrame(() => loop(newWebcam, loadedModel));
    };

    initModel();
  }, []);

  const loop = async (webcamInstance, modelInstance) => {
    webcamInstance.update();
    await predict(webcamInstance, modelInstance);
    requestAnimationFrame(() => loop(webcamInstance, modelInstance));
  };

  const predict = async (webcamInstance, modelInstance) => {
    const predictionList = await modelInstance.predict(webcamInstance.canvas);
    setPredictions(predictionList);

    const validProductLabels = ["Chair", "Table", "Pillow"];
    const confidentPredictions = predictionList
      .filter((p) => validProductLabels.includes(p.className) && p.probability > 0.9)
      .sort((a, b) => b.probability - a.probability)
      .slice(0, 1);

    if (confidentPredictions.length > 0) {
      const topLabel = confidentPredictions[0].className;
      const now = Date.now();

      if (stableLabelRef.current === topLabel) {
        if (now - stableStartTimeRef.current > 2000 && !hasNavigatedRef.current) {
          hasNavigatedRef.current = true;
          navigate("/recommendations", {
            state: { label: topLabel.toLowerCase() },
          });
        }
      } else {
        stableLabelRef.current = topLabel;
        stableStartTimeRef.current = now;
      }
    } else {
      stableLabelRef.current = null;
      stableStartTimeRef.current = null;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay} />
      <div style={styles.scanFrame}>
        <div ref={videoRef} style={styles.video} />
        {["topLeft", "topRight", "bottomLeft", "bottomRight"].map((corner) => (
          <div
            key={corner}
            style={{
              ...styles.corner,
              ...styles[corner],
              animation: "pulse 1.2s infinite",
            }}
          />
        ))}
      </div>

      <div style={styles.bottomSection}>
        <div style={styles.text}>Scanning for items...</div>
        <div style={styles.predictions}>
          {predictions
            .sort((a, b) => b.probability - a.probability)
            .slice(0, 3)
            .map((p) => (
              <div key={p.className}>
                {p.className}: {(p.probability * 100).toFixed(1)}%
              </div>
            ))}
        </div>
        <button
          style={styles.button}
          onClick={() =>
            navigate("/recommendations", { state: { label: "manual" } })
          }
        >
          Manual Recommendation
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#000",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 1,
  },
  scanFrame: {
    position: "absolute",
    top: "8%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80vw",
    maxWidth: 320,
    height: "60vh",
    borderRadius: 16,
    overflow: "hidden",
    zIndex: 2,
  },
  video: {
    width: "100%",
    height: "100%",
    zIndex: 2,
  },
  corner: {
    width: 30,
    height: 30,
    position: "absolute",
    borderColor: "white",
    zIndex: 3,
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTop: "4px solid white",
    borderLeft: "4px solid white",
  },
  topRight: {
    top: 0,
    right: 0,
    borderTop: "4px solid white",
    borderRight: "4px solid white",
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottom: "4px solid white",
    borderLeft: "4px solid white",
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottom: "4px solid white",
    borderRight: "4px solid white",
  },
  bottomSection: {
    position: "absolute",
    bottom: 90,
    width: "100%",
    textAlign: "center",
    zIndex: 4,
    color: "white",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
  predictions: {
    marginTop: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: "12px 24px",
    border: "none",
    fontWeight: "bold",
    fontSize: 16,
    cursor: "pointer",
    marginTop: 10,
  },
};

const styleTag = document.createElement("style");
styleTag.innerHTML = `
@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.6; }
  100% { transform: scale(1); opacity: 1; }
}`;
document.head.appendChild(styleTag);

export default ScanningScreen;
