import {View, Text, StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const App = () => {



  const Stack = createStackNavigator();
  function ScreenA() {
    return(
      <View>
        <Text>Screen A</Text>
      </View>
    )
    
  }

  function ScreenB() {
    return(
      <View>
        <Text>Screen B</Text>
      </View>
    )
    
  }


  return(
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen

        name="First Screen"
        component={ScreenA}
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