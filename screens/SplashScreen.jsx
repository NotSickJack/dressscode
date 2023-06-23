import React, { useEffect, useRef } from "react";
import {
  View,
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SplashText, SplashTextTwo } from "../components/Text";
import { useFonts } from "expo-font";

const SplashScreen = () => {
  let [fontsLoaded] = useFonts({
    PPneuemachinaBold: require("../assets/font/PPNeueMachina-InktrapBold.ttf"),
    PPneuemachinaRegular: require("../assets/font/PPNeueMachina-PlainRegular.ttf"),
  });
  let [fontsLoaded2] = useFonts({
    FoundersGroteskMedium: require("../assets/font/FoundersGrotesk-Medium.ttf"),
    FoundersGroteskRegular: require("../assets/font/FoundersGrotesk-Regular.ttf"),
  });
  const slideAnimDress = useRef(new Animated.Value(-200)).current;
  const slideAnimCode = useRef(new Animated.Value(200)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    const slideAnimationDress = Animated.timing(slideAnimDress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    });

    const slideAnimationCode = Animated.timing(slideAnimCode, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    });

    const fadeAnimation = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });

    const navigateToHome = () => {
      navigation.navigate("Home"); // Sostituisci 'Home' con il nome corretto della tua pagina Home
    };

    // Esegui l'animazione e naviga verso la Home dopo 2 secondi
    Animated.sequence([
      Animated.parallel([
        slideAnimationDress,
        slideAnimationCode,
        fadeAnimation,
      ]),
      Animated.delay(2000),
    ]).start(navigateToHome);
  }, []);

  return (
    fontsLoaded &&
    fontsLoaded2 && (
      <ImageBackground
        source={require("../assets/bg.png")}
        style={styles.container}
      >
        <View style={styles.textContainer}>
          <Animated.View
            style={[
              {
                transform: [{ translateX: slideAnimDress }],
                opacity: fadeAnim,
              },
            ]}
          >
            <SplashText>Dress</SplashText>
          </Animated.View>
          <Animated.View
            style={[
              { transform: [{ translateX: slideAnimCode }], opacity: fadeAnim },
            ]}
          >
            <SplashTextTwo>Code</SplashTextTwo>
          </Animated.View>
        </View>
      </ImageBackground>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});

export { SplashScreen };
