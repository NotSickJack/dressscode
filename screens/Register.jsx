import React, { useState } from "react";
import { Alert, StyleSheet, View, ImageBackground } from "react-native";
import { supabase } from "../supabase";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/Back";
import { DarkButton } from "../components/Button";
import { ButtonText, LabelText } from "../components/Text";
import { DivCenter } from "../components/Div";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      username: username,
    });

    if (error) {
      Alert.alert("Errore", "Inserire tutti i campi.");
      setLoading(false);
    } else {
      Alert.alert(
        "Registrazione avvenuta",
        "Un link di conferma è stato inviato al tuo indirizzo email. Conferma il link e effettua il login."
      );
      navigation.navigate("Login");
    }
  }

  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={[styles.container, { flex: 1, justifyContent: "center" }]}>
        <View style={{ position: "absolute", left: 20, top: 50 }}>
          <BackButton />
        </View>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Input
            label={<LabelText>Username</LabelText>}
            leftIcon={{ type: "font-awesome", name: "user" }}
            onChangeText={(text) => setUsername(text)}
            value={username}
            placeholder="Username"
            autoCapitalize="none"
            inputStyle={{ color: "#1a0047" }}
            labelStyle={{ color: "#1a0047" }}
            placeholderTextColor="#1a0047"
            inputContainerStyle={styles.inputContainer}
          />
        </View>
        <View style={[styles.verticallySpaced]}>
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
      </View>
      <DivCenter>
        <DarkButton
          title="Register"
          disabled={loading}
          onPress={signUpWithEmail}
        >
          <ButtonText>Registrati</ButtonText>
        </DarkButton>
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
