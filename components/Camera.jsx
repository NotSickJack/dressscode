import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Ionicons from "react-native-vector-icons/Ionicons";
import IconCamera from "./IconCamera";
import { MainText } from "./Text";

const CameraComponent = ({ onPhotoTaken }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

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

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      onPhotoTaken(uri);
    }
  };

  return (
    <>
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
          <Ionicons name="camera-reverse-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </Camera>
      <IconCamera takePhoto={takePhoto} />
    </>
  );
};

const styles = StyleSheet.create({
  camera: {
    width: "80%",
    height: "80%",
    top: 0,
    left: 0,
  },
  cameraActions: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 16,
  },
  flipContainer: {
    marginTop: 20,
    paddingLeft: 20,
  },
});

export default CameraComponent;
