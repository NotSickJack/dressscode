import React, { Component } from "react";
import {
  ScrollView,
  Animated,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { CarouselText, CarouselDescription } from "./Text";

const OFFSET = 50;
const ITEM_WIDTH = Dimensions.get("window").width - OFFSET * 2;
const ITEM_HEIGHT = 420;

const cards = [
  {
    id: 0,
    title: "Scarpe",
    posterUrl: require("../assets/carousel-home/armadio.jpg"),
    description:
      "Inquadra i tuoi capi con la fotocamera,\n al resto ci pensiamo noi, scannerizziamo i tuoi capi e li cataloreghemo per categorie.",
  },
  {
    id: 1,
    title: "Pantaloni",
    posterUrl: require("../assets/carousel-home/abbinamenti.jpg"),
    description:
      "Non sai cosa indossare?\nLasciati ispirare dal nostro algoritmo, i migliori look pensati esclusivamente per te.",
  },
  {
    id: 2,
    title: "Maglia",
    posterUrl: require("../assets/carousel-home/decluttering.jpg"),
    description:
      "Hai troppi vestiti? \n Ti avviseremo quando non utilizzi più un'abito, così potrai metterlo in vendita.",
  },
];

export default function SecondCarousel() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={{ flex: 2 }}>
      <ScrollView
        horizontal={true}
        decelerationRate={"normal"}
        snapToInterval={ITEM_WIDTH}
        style={{ marginTop: 50, paddingHorizontal: 0 }}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        disableIntervalMomentum
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={12}
      >
        {cards.map((item, idx) => {
          const inputRange = [
            (idx - 1) * ITEM_WIDTH,
            idx * ITEM_WIDTH,
            (idx + 1) * ITEM_WIDTH,
          ];

          const translate = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 1, 0.85],
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
          });

          return (
            <Animated.View
              key={idx}
              style={{
                width: ITEM_WIDTH,
                height: ITEM_HEIGHT,
                marginLeft: idx === 0 ? OFFSET : undefined,
                marginRight: idx === cards.length - 1 ? OFFSET : undefined,
                opacity: opacity,
                transform: [{ scale: translate }],
              }}
            >
              <ImageBackground
                source={item.posterUrl}
                style={{
                  flex: 1,
                  resizeMode: "cover",
                  justifyContent: "center",
                }}
                imageStyle={{ borderRadius: 10 }}
              />
              <CarouselText>{item.title}</CarouselText>
              <CarouselDescription>{item.description}</CarouselDescription>
            </Animated.View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
