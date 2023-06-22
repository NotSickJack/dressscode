import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { ButtonText, LogoText } from "../components/Text";
import { Dropdown } from "../components/Dropdown";
import { Select } from "../components/Switch";

const DemoThird = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <LogoText style={styles.title}>
          Dress<Text style={{ color: "#fff" }}>Code</Text>
        </LogoText>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    alignItems: "center",
    marginTop: 60,
  },
});

export { DemoThird };
