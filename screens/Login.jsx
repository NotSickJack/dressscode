import React, { useState } from "react";
import { Alert, StyleSheet, View, ImageBackground, Text } from "react-native";
import { supabase } from "../supabase";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/Back";
import { DarkButton, LightButton } from "../components/Button";
import {
  ButtonText,
  ButtonTextLight,
  LabelText,
  LogoText,
} from "../components/Text";
import { Div, DivCenter } from "../components/Div";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation(); // Ottieni l'istanza di navigazione

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert("Errore", "Email o password errati.");
      setLoading(false);
    } else {
      navigation.navigate("Welcome"); // Effettua la navigazione verso la pagina "Demo"
    }
  }

  async function signUpWithEmail() {
    navigation.navigate("Register"); // Effettua la navigazione verso la pagina "Register"
  }

  async function sendPasswordRecoveryEmail() {
    setLoading(true);

    try {
      const { error } = await supabase.auth.api.resetPasswordForEmail();

      if (error) {
        throw new Error(error.message);
      }

      Alert.alert(
        "Email inviata",
        "Ti è stata inviata un'email con le istruzioni per il recupero della password."
      );
    } catch (error) {
      Alert.alert("Errore", error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <Div>
        <View style={{ position: "absolute", left: 20, top: 50 }}>
          <BackButton />
        </View>

        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Input
            label={<LabelText>Email</LabelText>}
            leftIcon={{ type: "font-awesome", name: "envelope" }}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="email@address.com"
            autoCapitalize={"none"}
            inputStyle={{ color: "#1a0047" }}
            labelStyle={{ color: "#1a0047" }}
            placeholderTextColor="#1a0047"
            inputContainerStyle={styles.inputContainer}
          />
        </View>
        <View style={styles.verticallySpaced}>
          <Input
            label={<LabelText>Password</LabelText>}
            leftIcon={{ type: "font-awesome", name: "lock" }}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize={"none"}
            inputStyle={{ color: "#1a0047" }}
            labelStyle={{ color: "#1a0047" }}
            placeholderTextColor="#1a0047"
            inputContainerStyle={styles.inputContainer}
          />
        </View>
      </Div>
      <DivCenter>
        <LightButton
          title="Sign in"
          disabled={loading}
          onPress={signInWithEmail}
        >
          <ButtonTextLight>Accedi</ButtonTextLight>
        </LightButton>
        <DarkButton
          title="Sign up"
          disabled={loading}
          onPress={() => signUpWithEmail()}
        >
          <ButtonText>registrati</ButtonText>
        </DarkButton>
        <Text
          style={styles.forgotPasswordText}
          onPress={sendPasswordRecoveryEmail}
        >
          Hai dimenticato la password?
        </Text>
      </DivCenter>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  verticallySpaced: {
    width: "100%",
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "center",
  },
  mt20: {
    marginTop: 20,
  },
  inputContainer: {
    borderBottomColor: "#1a0047",
  },
});
