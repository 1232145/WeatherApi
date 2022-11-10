import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#818589',
    },
    searchInputContainer: {
      height: 40,
      marginTop: 20,
      backgroundColor: '#666',
      marginHorizontal: 40,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    error: {
      color: 'red'
    },
    text: {
      textAlign: 'center',
      color: 'white',
      ...Platform.select({
        ios: {
          fontFamily: 'AvenirNext-Regular',
        },
        android: {
          fontFamily: 'Roboto',
        }
      })
    },
    largeText: {
      fontSize: 44,
    },
    smallText: {
      fontSize: 18,
    },
    textInput: {
      flex: 1,
      color: 'white',
    },
    imageContainer: {
      flex: 1, //causing the problem
    },
    image: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
    },
    detailsContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    loadingScreen: {
      backgroundColor: '#000000',
      color: 'white',
    }
  });

export default styles;