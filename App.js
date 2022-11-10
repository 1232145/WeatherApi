import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import SearchInput from './components/SearchInput';
import getImageWeather from './components/GetWeatherImage';
import styles from './AppStyles'
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function App() {
  const [location, setLocation] = useState("New York")
  const [locationState, setLocationState] = useState({
    condition: "",
    degree: ""
  })
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (place) => {
    setLocation(place);
  }

  const fetchLocationId = async () => {
    try {
      setLoading(true)
      const locationData = await axios.get(`http://api.weatherapi.com/v1/current.json?key=04a36f7225034db68e6211103220311&q=${location}&aqi=no`)
      const newLocationState = {
        condition: `${locationData.data.current.condition.text}`,
        degree: `${locationData.data.current.feelslike_c}`
      }
      setLocationState(newLocationState)
      setLocation(locationData.data.location.name);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLocationId()
  }, [])

  useEffect(() => {
    fetchLocationId();
  }, [location, error])

  useEffect(() => {
    setLocation('New York')
    setTimeout(() => setError(false), 3000)
  }, [error])

  return (
    loading ?  
    (
    <View style={[styles.detailsContainer, styles.loadingScreen]}>
      <StatusBar barStyle="light-content" />
      <ActivityIndicator size="large" color="#00ff00" animating={loading} />
      <Text style={[styles.largeText, styles.text]}>Loading</Text>
    </View>
    ) : 
    (
      (error ? 
        (
        <View style={styles.detailsContainer}>
          <StatusBar barStyle="light-content" />
          <Text style={[styles.largeText, styles.text, styles.error]}>Error: Could not find city, please re-type</Text>
        </View>
        ) :
        (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <ImageBackground
            source={getImageWeather(`${locationState.condition}`)}
            style={styles.imageContainer}
            imageStyle={styles.image}
          >
            <StatusBar barStyle="light-content" />
            <View style={styles.detailsContainer}>
              <Text style={[styles.largeText, styles.text]}>{location}</Text>
              <Text style={[styles.smallText, styles.text]}>{locationState.condition}</Text>
              <Text style={[styles.largeText, styles.text]}>{locationState.degree}°</Text>
              <SearchInput placeholder="Search any city" styles={styles} handleSubmit={handleSubmit}
              />
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
        )
      )
    )
  );
}
