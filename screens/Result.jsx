import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { ButtonText, LogoText, TextUnderline } from "../components/Text";
import { DarkButton, ButtonTryAgain } from "../components/Button";
import { DivCenter } from "../components/Div";
import SecocondCarousel from "../components/SecondCarousel";

const Result = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <LogoText style={styles.title}>
          Dress<Text style={{ color: "#fff" }}>Code</Text>
        </LogoText>
        <SecocondCarousel />

        <DivCenter>
          <ButtonTryAgain onPress={() => navigation.navigate("Demo")}>
            <TextUnderline>Riprova</TextUnderline>
          </ButtonTryAgain>
          <DarkButton onPress={() => navigation.navigate("Media")}>
            <ButtonText>avanti</ButtonText>
          </DarkButton>
        </DivCenter>
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
  form: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
});

export { Result };
