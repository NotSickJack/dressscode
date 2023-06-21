import { StyleSheet, View, ImageBackground, Text, CheckBox } from "react-native";
import { ButtonText, LogoText } from "../components/Text";
import { Dropdown } from "../components/Dropdown";

const Demo = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <LogoText style={styles.title}>
          Dress<Text style={{ color: "#fff" }}>Code</Text>
        </LogoText>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </Text>
        <View style={styles.containerTwo}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </Text>
          <Dropdown />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    alignItems: "center",
    marginTop: 60,
  },
  subtitle: {
    alignItems: "center",
    marginTop: 20,
  },
  containerTwo: {
    alignItems: "center",
    marginTop: 220,
    width: "100%",
  },
});

export { Demo };
