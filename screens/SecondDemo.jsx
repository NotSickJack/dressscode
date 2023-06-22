import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { ButtonText, LogoText, MainText } from "../components/Text";
import { DarkButton } from "../components/Button";
import { SelectColor } from "../components/SelectColor";

const DemoTwo = ({ navigation }) => {
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
          <MainText style={{ marginTop: 10 }}>
            Puoi scegliere fino a tre colori:
          </MainText>
          <SelectColor />
        </View>
        <View style={styles.containerThree}>
          <DarkButton onPress={() => navigation.navigate("DemoThree")}>
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
  subtitle: {
    alignItems: "center",
    marginTop: 20,
  },
  containerTwo: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  containerThree: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
});

export { DemoTwo };
