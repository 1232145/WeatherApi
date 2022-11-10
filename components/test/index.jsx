import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import * as ImageManipulator from 'expo-image-manipulator';
import { useState } from 'react';

export default function ShareApp() {
  const [image, setImage] = useState(null);

  const handleImagePick =  async () => {
    const pickResult = await ImagePicker.launchImageLibraryAsync();
    if (pickResult.cancelled == true) 
      return
    else
      setImage({localUri: pickResult.uri});
      console.log(image);
  }

  const openShareImagePicker = async () => {
    if (image == null) 
      return;
    if (Platform.OS === 'web') {
      alert("Sharing is not available on this platform");
      return;
    }
    const imageTmp = await ImageManipulator.manipulateAsync(image.localUri);
    await Sharing.shareAsync(imageTmp.uri);
  }
  
  return (
    <View style={styles.container}>
      {
        image !== null ? <Image source={{uri: image.localUri}} style={styles.image}/> : 
        <Text>Unable to load image</Text>
      }
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => handleImagePick()} style={styles.button}>
        <Text style={styles.text}>Touch me</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openShareImagePicker()} style={styles.button}>
        <Text style={styles.text}>Share image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#888', 
    fontSize: 18,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  }
});
