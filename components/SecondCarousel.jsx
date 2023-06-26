import React, { Component } from "react";
import {
  ScrollView,
  Animated,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { CarouselText, CarouselDescription } from "./Text";

const OFFSET = 40;
const ITEM_WIDTH = Dimensions.get("window").width - OFFSET * 2;
const ITEM_HEIGHT = 500;

const cards = [
  {
    id: 0,
    title: "Scarpe",
    posterUrl: require("../assets/carousel-result/scarpe.png"),
    description: "Skate Vans Old School.",
  },
  {
    id: 1,
    title: "Jeans",
    posterUrl: require("../assets/carousel-result/jeans.png"),
    description: "Jeans Levi's 501.",
  },
  {
    id: 2,
    title: "T-Shirt",
    posterUrl: require("../assets/carousel-result/t-shirt.png"),
    description: "T-Shirt bianca semplice.",
  },
  {
    id: 3,
    title: "Cappello",
    posterUrl: require("../assets/carousel-result/cappello.png"),
    description: "Cappello visiera piatta Obey.",
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
                  justifyContent: "center",
                  alignItems: "center",
                }}
                imageStyle={{ borderRadius: 10, resizeMode: "contain" }}
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
