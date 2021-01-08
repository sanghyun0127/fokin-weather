import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "흐림",
    subtitle: "오늘은 조금 흐려요",
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "집에 있는게 신상에 좋다!",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
  },
};

/*
https://openweathermap.org/weather-conditions
여기 Derscription 다 설정해줘야 에러 안남
*/

export default function Weather({ temp, condition, location }) {
  return (
    <LinearGradient
      colors={weatherOptions["Clouds"].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={144}
          name={weatherOptions["Clouds"].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.title}>{weatherOptions["Clouds"].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions["Clouds"].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  conditions: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmoshere",
    "Clear",
    "Clouds",
    "Haze",
    "Dust",
    "Mist",
  ]).isRequired,
  location: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  temp: {
    fontSize: 42,
    color: "white",
  },

  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 48,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 32,
    fontWeight: "600",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  location: {
    color: "white",
    fontSize: 24,
    alignItems: "center",
  },
});
