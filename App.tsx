import {View, Text, StyleSheet, Image, ImageBackground} from "react-native";

const App = () => {
  return(
    <ImageBackground style={myStyle.container}       resizeMode="cover"
    source={require('./assets/cover.jpg') }>

      <Text style ={myStyle.text}>Hello world</Text>
      <Image 
      style={myStyle.image}
      source={require('./assets/coding.png')}
      />
    </ImageBackground>
  )
}

export default App;

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',

  },
  text: {
    color: 'white',
    fontSize: 35,
    
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center'
  }
})