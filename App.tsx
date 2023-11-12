import {View, Text, Button, StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const App = () => {



  const Stack = createStackNavigator();



  function ScreenA({navigation}) {

    const onPressHandler = () => {
      navigation.navigate('Second_Screen')
    }

    return(
      <View style={myStyle.container}>
        <Text style={myStyle.text}>Screen A</Text>
        <Button 
        onPress={onPressHandler}
 
        title="Go to Screen B"
        />
      </View>
    )
    
  }

  function ScreenB({navigation}) {
 
    const onPressHandler = () => {
      navigation.navigate('First_Screen')
    }

    return(
      <View style={myStyle.container}>
        <Text style={myStyle.text}>Screen B</Text>
        <Button 
        onPress={onPressHandler}
 
        title="Go to Screen A"
        />
        
        
      </View>
    )
    
  }


  return(
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen

        name="First_Screen"
        component={ScreenA}
        />

        <Stack.Screen

        name="Second_Screen"
        component={ScreenB}
        />
      </Stack.Navigator>

    </NavigationContainer>

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