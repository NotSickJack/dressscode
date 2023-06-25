import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

const SelectColor = () => {
  const [switchStates, setSwitchStates] = useState(Array(9).fill(false));
  const [selectedCount, setSelectedCount] = useState(0);

  const toggleSwitch = (index) => {
    const newSwitchStates = [...switchStates];
    newSwitchStates[index] = !newSwitchStates[index];

    const selected = newSwitchStates.filter((state) => state);
    if (selected.length > 3) {
      return;
    }

    setSwitchStates(newSwitchStates);
    setSelectedCount(selected.length);
  };

  const getSwitchColors = (label) => {
    const colorMap = {
      Bianco: {
        trackColor: "#767577",
        thumbColor: "#f4f3f4",
        trackColorTwo: "#ffffff",
      },
      Nero: {
        trackColor: "#767577",
        thumbColor: "#f4f3f4",
        trackColorTwo: "#000000",
      },
      Grigio: {
        trackColor: "#00ff00",
        thumbColor: "#ffffff",
        trackColorTwo: "#808080",
      },
      Rosso: {
        trackColor: "#00ff00",
        thumbColor: "#ffffff",
        trackColorTwo: "#ff0000",
      },
      Blu: {
        trackColor: "#00ff00",
        thumbColor: "#ffffff",
        trackColorTwo: "#0000ff",
      },
      Verde: {
        trackColor: "#00ff00",
        thumbColor: "#ffffff",
        trackColorTwo: "#008f39",
      },
      Giallo: {
        trackColor: "#00ff00",
        thumbColor: "#ffffff",
        trackColorTwo: "#ffff00",
      },
      Viola: {
        trackColor: "#00ff00",
        thumbColor: "#ffffff",
        trackColorTwo: "#8f00ff",
      },
      Arancione: {
        trackColor: "#00ff00",
        thumbColor: "#ffffff",
        trackColorTwo: "#ff7514",
      },
    };

    return colorMap[label] || { trackColor: "#767577", thumbColor: "#f4f3f4" }; // Default
  };

  const renderSwitches = () => {
    const switches = [
      { label: "Bianco" },
      { label: "Nero" },
      { label: "Grigio" },
      { label: "Rosso" },
      { label: "Blu" },
      { label: "Verde" },
      { label: "Giallo" },
      { label: "Viola" },
      { label: "Arancione" },
    ];

    return switches.map((switchObj, index) => {
      const { trackColor, thumbColor, trackColorTwo } = getSwitchColors(
        switchObj.label
      );

      return (
        <View style={styles.itemContainer} key={index}>
          <Text style={styles.label}>{switchObj.label}</Text>
          <View style={styles.switchContainer}>
            <Switch
              trackColor={{ false: trackColor, true: trackColorTwo }}
              thumbColor={switchStates[index] ? thumbColor : thumbColor}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => toggleSwitch(index)}
              value={switchStates[index]}
              disabled={selectedCount >= 3 && !switchStates[index]}
            />
          </View>
        </View>
      );
    });
  };

  return <View style={styles.container}>{renderSwitches()}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 80,
    marginRight: 80,
    backgroundColor: "#1a0047",
    borderWidth: 1,
    borderColor: "#1a0047",
    borderRadius: 25,
    padding: 10,
  },
  label: {
    flex: 1,
    color: "#fff",
    fontFamily: "PPneuemachinaRegular",
    fontWeight: 800,
  },
  switchContainer: {
    marginLeft: 10,
  },
});

export { SelectColor };
