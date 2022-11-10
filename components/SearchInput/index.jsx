import { View, TextInput } from 'react-native';
import { useState } from 'react';

import React from 'react'

function SearchInput({ placeholder, styles, handleSubmit }) {
  const [searchInput, setSearchInput] = useState("")

  const handleChangeSearch = (text) => {
    setSearchInput(text);
  }

  const handleSubmitEditing = () => {
    if (searchInput.length !== 0) {
      handleSubmit(searchInput)
      setSearchInput("")
    }
  }

  return (
    <View style={styles.searchInputContainer}>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor="#ffffff"
        underlineColorAndroid="transparent" //remove darkline under android search
        style={styles.textInput}
        clearButtonMode="always"
        value={searchInput}
        onChangeText={(text) => handleChangeSearch(text)}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  )
}

export default SearchInput