import {View, Text, StyleSheet, FlatList, SafeAreaView} from "react-native";
import { useState } from "react";

const App = () => {


  const [myList, setMyList] = useState(
    [
      {
        id: '1',
        name: 'james'
      },
      {
        id: '2',
        name: 'jack'
      },
      {
        id: '3',
        name: 'jacob'
      },
      {
        id: '4',
        name: 'john'
      },
      {
        id: '5',
        name: 'james'
      },
      {
        id: '6',
        name: 'jack'
      },
      {
        id: '7',
        name: 'jacob'
      },
      {
        id: '8',
        name: 'john'
      },
      {
        id: '9',
        name: 'james'
      },
      {
        id: '10',
        name: 'jack'
      },
      {
        id: '11',
        name: 'jacob'
      },
      {
        id: '12',
        name: 'john'
      }

    ]
  )



  return(
    <SafeAreaView style={myStyle.container}>
      <Text style ={myStyle.text}>FlatList</Text>
      <FlatList 
        data={myList}
        renderItem={item => (
          <View >
            <Text>{item.name}</Text>
         </View>
      )}

      />
    </SafeAreaView>
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
  }
})