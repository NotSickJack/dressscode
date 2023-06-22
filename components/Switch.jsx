import React, { useState } from "react";
import { View, Switch, StyleSheet, Text, TouchableOpacity } from "react-native";

const Select = () => {
  const [switch1Enabled, setSwitch1Enabled] = useState(false);
  const [switch2Enabled, setSwitch2Enabled] = useState(false);
  const [switch3Enabled, setSwitch3Enabled] = useState(false);

  const toggleSwitch1 = () => {
    setSwitch1Enabled(!switch1Enabled);
    setSwitch2Enabled(false);
    setSwitch3Enabled(false);
  };

  const toggleSwitch2 = () => {
    setSwitch1Enabled(false);
    setSwitch2Enabled(!switch2Enabled);
    setSwitch3Enabled(false);
  };

  const toggleSwitch3 = () => {
    setSwitch1Enabled(false);
    setSwitch2Enabled(false);
    setSwitch3Enabled(!switch3Enabled);
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Uomo</Text>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: "#767577", true: "#f4f3f4" }}
            thumbColor={switch1Enabled ? "#5c159d" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch1}
            value={switch1Enabled}
          />
        </View>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.label}>Donna</Text>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: "#767577", true: "#f4f3f4" }}
            thumbColor={switch2Enabled ? "#5c159d" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={switch2Enabled}
          />
        </View>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.label}>Unisex</Text>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: "#767577", true: "#f4f3f4" }}
            thumbColor={switch3Enabled ? "#5c159d" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch3}
            value={switch3Enabled}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
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
    color: "#fff",
    fontFamily: "PPneuemachinaRegular",
    fontWeight: 800,
    flex: 1,
  },
  switchContainer: {
    marginLeft: 10,
  },
});

export { Select };
