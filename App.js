import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "62749ba1b92a5062a5dfcdb429263cad";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      console.log(data);
      this.setState({
        isLoading: false,
        condition: data.weather[0].main,
        temp: data.main.temp,
        location: data.name,
      });
    } catch (error) {
      Alert.alert("Can't fetch api");
      console.log(error);
    }
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition, location } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather
        temp={Math.round(temp)}
        condition={condition}
        location={location}
      />
    );
  }
}
