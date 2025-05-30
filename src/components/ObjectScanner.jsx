import React, { useRef, useState, useEffect } from "react";
import * as tmImage from "@teachablemachine/image";

const MODEL_URL = process.env.PUBLIC_URL + "/tm-model/";

export default function ObjectScanner() {
  const webcamRef = useRef(null);
  const [label, setLabel] = useState("Loading...");
  const [model, setModel] = useState(null);
  const [webcam, setWebcam] = useState(null);

  useEffect(() => {
    const init = async () => {
      const loadedModel = await tmImage.load(MODEL_URL + "model.json", MODEL_URL + "metadata.json");
      const cam = new tmImage.Webcam(200, 200, true); // flip = true
      await cam.setup();
      await cam.play();
      webcamRef.current.appendChild(cam.canvas);
      setWebcam(cam);
      setModel(loadedModel);
      predict(cam, loadedModel);
    };
    init();
  }, []);

  const predict = async (cam, model) => {
    cam.update();
    const predictions = await model.predict(cam.canvas);
    const highest = predictions.reduce((prev, curr) => (curr.probability > prev.probability ? curr : prev));
    if (highest.probability > 0.85) {
      setLabel(highest.className);
    } else {
      setLabel("Detecting...");
    }
    requestAnimationFrame(() => predict(cam, model));
  };

  return (
    <div className="scanner-container">
      <div ref={webcamRef} />
      <h2>Detected: {label}</h2>
      {label === "Pillow" && <p>🛏 Add neck support with a firmer pillow.</p>}
      {label === "Chair" && <p>🪑 Replace it with a reading nook or softer seating.</p>}
      {label === "Table" && <p>🧹 Try to declutter your bedside table.</p>}
    </div>
  );
}