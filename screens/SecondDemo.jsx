import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { ButtonText, LogoText, MainText } from "../components/Text";
import { DarkButton } from "../components/Button";
import { SelectColor } from "../components/SelectColor";
import BackButton from "../components/Back";
import { Div, DivCenter } from "../components/Div";

const DemoTwo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ position: "absolute", left: 20, top: 50 }}>
          <BackButton />
        </View>
        <LogoText style={styles.title}>
          Dress<Text style={{ color: "#fff" }}>Code</Text>
        </LogoText>
        <Div>
          <MainText>Puoi scegliere fino a tre colori:</MainText>
          <SelectColor />
        </Div>
        <DivCenter>
          <MainText style={{ marginBottom: 10 }}>2/3</MainText>
          <DarkButton onPress={() => navigation.navigate("DemoThree")}>
            <ButtonText>Avanti</ButtonText>
          </DarkButton>
        </DivCenter>
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
});

export { DemoTwo };
