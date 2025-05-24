import React, { useRef, useEffect } from 'react';

const ScanningScreen = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'environment' } })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error('Camera access denied:', err);
      });
  }, []);

  return (
    <div style={styles.container}>
      <video ref={videoRef} style={styles.video} autoPlay playsInline muted />

      <div style={styles.overlay}>
        <div style={styles.scanFrame}>
          <div style={{ ...styles.corner, ...styles.topLeft }} />
          <div style={{ ...styles.corner, ...styles.topRight }} />
          <div style={{ ...styles.corner, ...styles.bottomLeft }} />
          <div style={{ ...styles.corner, ...styles.bottomRight }} />
        </div>

        <div style={styles.bottomSection}>
          <div style={styles.text}>Scanning completed</div>
          <button style={styles.button}>Get your recommendations</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 1,
  },
  overlay: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
  },
  scanFrame: {
    position: 'relative',
    width: '80vw',
    maxWidth: 320,
    height: '60vh',
    borderRadius: 16,
    marginBottom: 40,
  },
  corner: {
    width: 30,
    height: 30,
    position: 'absolute',
    borderColor: 'white',
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderTopStyle: 'solid',
    borderLeftStyle: 'solid',
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderTopStyle: 'solid',
    borderRightStyle: 'solid',
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderBottomStyle: 'solid',
    borderLeftStyle: 'solid',
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderBottomStyle: 'solid',
    borderRightStyle: 'solid',
  },
  bottomSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    paddingBottom: 40,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: '12px 24px',
    border: 'none',
    fontWeight: 'bold',
    fontSize: 16,
    cursor: 'pointer',
  },
};

export default ScanningScreen;
