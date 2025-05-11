import React, { useRef, useEffect, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

const ScanningScreen = () => {
  const videoRef = useRef(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    let model;

    const startVideo = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    };

    const detect = async () => {
      if (videoRef.current && model) {
        const predictions = await model.detect(videoRef.current);
        const found = predictions.find((pred) =>
          ["chair", "couch", "bed", "dining table"].includes(pred.class)
        );
        if (found) {
          setLabel(`Detected: ${found.class}`);
        } else {
          setLabel("Scanning...");
        }
      }
      requestAnimationFrame(detect);
    };

    cocoSsd.load().then((loadedModel) => {
      model = loadedModel;
      startVideo().then(() => detect());
    });

    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div style={styles.container}>
      <video ref={videoRef} style={styles.video} autoPlay playsInline muted />
      <div style={styles.overlay}>
        <div style={styles.scanFrame}>
          <div style={styles.cornerTopLeft}></div>
          <div style={styles.cornerTopRight}></div>
          <div style={styles.cornerBottomLeft}></div>
          <div style={styles.cornerBottomRight}></div>
        </div>
        <div style={styles.text}>{label}</div>
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
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
  },
  overlay: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 20px",
  },
  scanFrame: {
    position: "relative",
    width: "80vw",
    maxWidth: 320,
    height: "60vh",
    borderRadius: 16,
    marginBottom: 40,
  },
  corner: {
    width: 30,
    height: 30,
    position: "absolute",
    borderColor: "white",
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderTopStyle: "solid",
    borderLeftStyle: "solid",
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderTopStyle: "solid",
    borderRightStyle: "solid",
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderBottomStyle: "solid",
    borderLeftStyle: "solid",
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderBottomStyle: "solid",
    borderRightStyle: "solid",
  },
  bottomSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    paddingBottom: 40,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: "12px 24px",
    border: "none",
    fontWeight: "bold",
    fontSize: 16,
    cursor: "pointer",
  },
};

export default ScanningScreen;
