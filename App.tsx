import { View, Text, StyleSheet, ScrollView, RefreshControl } from "react-native";
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

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }

  return (

    <ScrollView
      style={myStyle.container}
      horizontal={false}

      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
    >
      <Text style={myStyle.text}>List View Data</Text>
      {
        myList.map((item) => {
          return (
            <View key={item.id} style={myStyle.listView}>
              <Text style={myStyle.listText}>{item.name}</Text>
            </View>
          )

        })
      }
    </ScrollView>

  )
}

export default App;

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    backgroundColor: '#ffc0cb',

  },
  text: {
    color: '#000000',
    fontSize: 35,
  },
  listView: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',

  },
  listText: {
    color: '#ffffff',
    fontSize: 30,
    textDecorationLine: 'underline',


  }
})