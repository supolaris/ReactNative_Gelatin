import {View, Text, StyleSheet, Button, TextInput, Alert, ToastAndroid} from "react-native";
import { useState } from "react";

const App = () => {

  const [name, setName] = useState('');
  const [submit, setSubmit] = useState(false);
  const onPressHandler = () => {
    if (name.length >= 5) {
      setSubmit(!submit);
    }
    else {
      Alert.alert("Warning", "Please enter atleast 3 alphabeths", [
        {text: 'ok'},
        {text: 'cancel'},
        {text: 'retry'}
      ]
      );

      ToastAndroid.show("Please enter valid input", ToastAndroid.SHORT);
    }
  }


  return(
    <View style={myStyle.container}>
      <Text style ={myStyle.text}>Alerts</Text>
      <TextInput 
      style={myStyle.textInput}
      placeholder="enter name"
      onChangeText={(value) => setName(value)}
      />
      <Button
      title={submit ? 'clear' : 'submit'}
      onPress={onPressHandler}
      />
      {
        submit ? <Text>{name}</Text> : null
      }
    </View>
  )
}

export default App;

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',

  },
  text: {
    color: 'balck',
    fontSize: 35,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    width: '50%',
    marginVertical: 50,
  }
})