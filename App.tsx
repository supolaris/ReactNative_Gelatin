import {View, Text, StyleSheet} from "react-native";

const App = () => {
  return(
    <View style={myStyle.container}>
      <View style={myStyle.mainView1}>
        <View style={myStyle.view1}>
          <Text style ={myStyle.text}>1</Text>
        </View>
        <View style={myStyle.view2}>
          <Text style ={myStyle.text}>2</Text>
        </View>
        <View style={myStyle.view3}>
          <Text style ={myStyle.text}>3</Text>
        </View>
      </View>

      <View style={myStyle.mainView2}>
        <View style={myStyle.view4}>
          <Text style ={myStyle.text}>4</Text>
        </View>
        <View style={myStyle.view5}>
          <Text style ={myStyle.text}>5</Text>
        </View>
      </View>

      <View style={myStyle.mainView3}>
        <View style={myStyle.view6}>
          <Text style ={myStyle.text}>6</Text>
        </View>
        <View style={myStyle.view7}>
          <Text style ={myStyle.text}>7</Text>
        </View>
      </View>

    </View>
  )
}

export default App;

const myStyle = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'pink',

  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  mainView1: {
    flexDirection: 'row',

  },
  mainView2: {
    flexDirection: 'column',

  },
  mainView3: {
    flexDirection: 'row',

  },
  view1: {
    backgroundColor: '#778899',
    padding: 30,
    flex: 1

  },
  view2: {
    backgroundColor: '#0000ff',
    padding: 30,
    flex: 2

  },
  view3: {
    backgroundColor: '#8a2be2',
    padding: 30,
    flex: 3
    
  },
  view4: {
    backgroundColor: '#ff7f50',
    padding: 30,
    
  },
  view5: {
    backgroundColor: '#e9967a',
    padding: 30,
    
  },
  view6: {
    backgroundColor: '#00bfff',
    padding: 30,
    flex: 1
    
  },
  view7: {
    backgroundColor: '#ff00ff',
    padding: 30,
    flex: 1
    
  }
})