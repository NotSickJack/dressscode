import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconCamera = ({ takePhoto }) => {
  return (
    <TouchableOpacity onPress={takePhoto} style={{ marginTop: 10 }}>
      <Feather name="camera" size={40} color="black" />
    </TouchableOpacity>
  );
};

export default IconCamera;
