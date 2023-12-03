import {View, Text, StyleSheet, Button} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
//import fontAwesome5 from "react-native-vector-icons/FontAwesome5";



const Tab = createBottomTabNavigator();

const App = () => {



  function ScreenA(){

    return(
      <View style={myStyle.container}>
        <Text style={myStyle.text}>
          Screen A
        </Text>
      </View>
    )
  }

  function ScreenB(){
    
    return(
      <View style={myStyle.container}>
        <Text style={myStyle.text}>
          Screen B
        </Text>
      </View>
    )
  }



  return(
    <NavigationContainer>
    <Tab.Navigator
    >
      <Tab.Screen 
      name="Screen_A"
      component={ScreenA}
      />

      <Tab.Screen 
      name="Screen_B"
      component={ScreenB}
      />
    </Tab.Navigator>
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