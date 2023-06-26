import React from "react";
import { Feather } from "@expo/vector-icons";
import { LightButton } from "./Button";

const IconCamera = ({ takePhoto }) => {
  return (
    <LightButton onPress={takePhoto} style={{ marginTop: 20 }}>
      <Feather name="camera" size={30} color="#1a0047" />
    </LightButton>
  );
};

export default IconCamera;
