import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, StyleSheet, Button } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Ionicons from "react-native-vector-icons/Ionicons";
import IconCamera from "./IconCamera";
import { MainText, ButtonTextLight } from "./Text";
import { LightButton } from "./Button";

const CameraComponent = ({ onPhotoTaken }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [isCameraActive, setCameraActive] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  const handleStartCamera = () => {
    setCameraActive(true);
  };

  const handleTakePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      onPhotoTaken(uri);
    }
  };

  const handleCloseCamera = () => {
    setCameraActive(false);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return (
      <MainText>
        Consenti accesso alla fotocamera per scansionare i tuoi capi.
      </MainText>
    );
  }

  return (
    <>
      {isCameraActive ? (
        <>
          <View style={styles.cameraContainer}>
            <Camera style={styles.camera} type={type} ref={setCameraRef}>
              <TouchableOpacity
                style={styles.flipContainer}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <Ionicons
                  name="camera-reverse-outline"
                  size={24}
                  color="#FFFFFF"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleCloseCamera}
              >
                <Ionicons name="close-outline" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </Camera>
          </View>
          <IconCamera takePhoto={handleTakePhoto} />
        </>
      ) : (
        <View>
          <LightButton onPress={handleStartCamera}>
            <ButtonTextLight>Avvia fotocamera</ButtonTextLight>
          </LightButton>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    width: "80%",
    height: "80%",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 10,
  },
  camera: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  flipContainer: {
    marginTop: 20,
    paddingLeft: 20,
    position: "absolute",
    top: 0,
    left: 0,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
});

export default CameraComponent;
