import {
  StyleSheet,
  View,
  ImageBackground,
  SafeAreaView,
  Text,
} from "react-native";
import {
  ButtonText,
  ButtonTextLight,
  LogoText,
  InputText,
  TextUnderline,
} from "../components/Text";
import { DarkButton, ButtonTryAgain } from "../components/Button";
import { Div } from "../components/Div";
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
        {/* <View style={styles.form}> */}
        {/*   <SafeAreaView> */}
        {/*     <InputText placeholder="Email" /> */}
        {/*     <InputText secureTextEntry={true} placeholder="Password" /> */}
        {/*   </SafeAreaView> */}
        {/* </View> */}
        <Div>
          <ButtonTryAgain onPress={() => navigation.navigate("Demo")}>
            <TextUnderline>Riprova</TextUnderline>
          </ButtonTryAgain>
          <DarkButton onPress={() => navigation.navigate("Demo")}>
            <ButtonText>RIPROVA</ButtonText>
          </DarkButton>
        </Div>
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
