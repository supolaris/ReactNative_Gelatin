import { useState } from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const App = () => {

  let[click, setClick] = useState(0);
  const[reset, setReset] = useState(0);

  const onClickHandler = () => {
    setClick(click + 1);
  }

  const onResetHandler = () => {
    setClick(click = reset);
  }

  return(
    <View style={myStyle.container}>
      <Text style ={myStyle.text}>Total number of clicks</Text>
      <Text style={myStyle.outPut}>{click}</Text>
      <View style={myStyle.button}>
        <Button 
        title="Click"
        onPress={onClickHandler}
        />
      </View>
      
      <View style={myStyle.button}>
        <Button 
        title="Reset"
        onPress={onResetHandler}
        />
      </View>
    </View>
  )
}

export default App;

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',

  },
  text: {
    color: 'red',
    fontSize: 30,
  },
  button: {
    margin: 10
  },
  outPut: {
    fontSize: 35
  }
})