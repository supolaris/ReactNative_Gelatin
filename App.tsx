import {View, Text, StyleSheet, TextInput, Button, Touchable, Pressable} from "react-native";
import { useState } from "react";

const App = () => {


  const [user, setUser] = useState('');
  const [submit, setSubmit] = useState(false);


  const onPresshandler = () => {
    setSubmit(!submit);



    

  }





  return(
    <View style={myStyle.container}>
      <Text style ={myStyle.text}>Text Inputs and buttons</Text>
      <View style ={myStyle.view1}>
      <Text style ={myStyle.text2}>Enter you user</Text>
      <TextInput 
      style={myStyle.textInput}
      placeholder="e.g supolaris"
      onChangeText={(value) => setUser(value)}
      />
      </View>

      <Button
      title={submit? 'clear': 'submit'}
      onPress={onPresshandler}
      />
      {
        submit ? <Text style ={myStyle.text}>{user}</Text> : null
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
    backgroundColor: '#FFC0CB',

  },
  text: {
    color: '#000000',
    fontSize: 35,
  },
  textInput: {
    borderWidth: 1,
    width: '50%',
    textAlign: 'center',
    fontSize: 20,
  },
  text2: {
    color: '#000000',
    fontSize: 20,
    paddingRight: 10,
  },
  view1: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40
  }
})