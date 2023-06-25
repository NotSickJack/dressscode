import {
  StyleSheet,
  View,
  ImageBackground,
  SafeAreaView,
  Text,
} from "react-native";
import { ButtonText, ButtonTextLight, LogoText } from "../components/Text";
import { DarkButton, LightButton } from "../components/Button";
import { DivCenter } from "../components/Div";
import AdvanceCardCarousel from "../components/Carousel";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <LogoText style={styles.title}>
          Dress<Text style={{ color: "#fff" }}>Code</Text>
        </LogoText>
        <AdvanceCardCarousel />
        <DivCenter>
          <LightButton onPress={() => navigation.navigate("Login")}>
            <ButtonTextLight>Login</ButtonTextLight>
          </LightButton>
          <DarkButton onPress={() => navigation.navigate("Register")}>
            <ButtonText>Registrati</ButtonText>
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

export { Home };
