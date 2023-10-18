import {View, Text, StyleSheet} from "react-native";

const App = () => {
  return(
    <View style={myStyle.container}>
      <Text style ={myStyle.text}>Hello world</Text>
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
    color: 'balck',
    fontSize: 35,
  }
})