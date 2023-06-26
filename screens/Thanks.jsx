import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { ButtonText, LogoText, MainText } from "../components/Text";
import { DarkButton } from "../components/Button";
import { Div, DivCenter } from "../components/Div";

const Thanks = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <LogoText style={styles.title}>
          Dress<Text style={{ color: "#fff" }}>Code</Text>
        </LogoText>
        <Div>
          <MainText>Grazie per aver provato la demo di DressCode. </MainText>
          <MainText>❤️</MainText>
        </Div>
        <DivCenter>
          <DarkButton onPress={() => navigation.navigate("Home")}>
            <ButtonText>Fine</ButtonText>
          </DarkButton>
        </DivCenter>
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
});

export { Thanks };
