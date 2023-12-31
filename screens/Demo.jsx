import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { ButtonText, LogoText, MainText } from "../components/Text";
import { DarkButton } from "../components/Button";
import { Select } from "../components/Switch";
import { Div, DivCenter } from "../components/Div";

const Demo = ({ navigation }) => {
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
          <MainText>Scegli il genere dell'outfit:</MainText>
          <View style={styles.containerTwo}>
            <Select />
          </View>
        </Div>
        <DivCenter>
          <MainText style={{ marginBottom: 10 }}>1/3</MainText>
          <DarkButton onPress={() => navigation.navigate("DemoTwo")}>
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export { Demo };
