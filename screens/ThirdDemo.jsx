import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { ButtonText, LogoText } from "../components/Text";
import { Dropdown } from "../components/Dropdown";
import { DarkButton } from "../components/Button";

const DemoThird = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <LogoText style={styles.title}>
          Dress<Text style={{ color: "#fff" }}>Code</Text>
        </LogoText>
        <View style={styles.containerTwo}>
          <Dropdown />
        </View>
        <View style={styles.containerThree}>
          <DarkButton onPress={() => navigation.navigate("Result")}>
            <ButtonText>Avanti</ButtonText>
          </DarkButton>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    alignItems: "center",
    marginTop: 60,
  },
  containerTwo: {
    alignItems: "center",
    height: "60%",
    justifyContent: "center",
  },
  containerThree: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    height: "30%",
  },
});

export { DemoThird };
