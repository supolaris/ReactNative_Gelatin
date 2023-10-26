import {View, Text, StyleSheet, Modal, TextInput, Pressable} from "react-native";
import { useState } from "react";

const App = () => {


  const [name, setName] = useState('');
  const [submit, setSubmit] = useState(true);
  const onPressHandler = () => {
    if(name.length > 3){
      setSubmit(!submit);
    }
    else{
      setSubmit(false)
    }
  }

  const onBackHandler = () => {
    setSubmit(true)

 }

  return(
    <View style={myStyle.container}>
      <Text style ={myStyle.text}>Enter your name</Text>
      <TextInput 
      style={myStyle.textInput}
      placeholder="enter name"
      onChangeText={(value) => setName(value)}
      />

      <Pressable
      style={myStyle.pressable}
      onPress={onPressHandler}
      >
        <Text style={myStyle.pressText}>submit</Text>
      </Pressable>
      { submit ? 
            <Text>{name}</Text>
      :

        <Modal
        transparent
        animationType="slide"
        onRequestClose={() => {
          setSubmit(true)
        }}
        >
          <View style={myStyle.modalMainView}>
          <View style={myStyle.modal}>
           <Text style={myStyle.modalTitle}>hello world</Text>
           <Text style={myStyle.modalText}>Enter at least 3 alphabeths</Text>
           <Pressable
            style={myStyle.pressable}
            onPress={onBackHandler}
            >
            <Text style={myStyle.pressText}>back</Text>
          </Pressable>
          </View>
          </View>
        </Modal>



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
    backgroundColor: 'pink',

  },
  text: {
    color: 'balck',
    fontSize: 35,
  },
  textInput: {
    borderWidth: 1,
    width: '70%',
  },
  pressable: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
    width: '25%',
    alignItems: 'center',
    
  },
  pressText: {
    color: 'white',
    fontSize: 20
  },
  modalMainView: {
    alignItems: 'center',

  },
  modal: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    height: 200,
    width: '90%',
    
  },
  modalTitle: {
    backgroundColor: 'orange',
    width: '100%',
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    color: 'white',
    fontSize: 20,

  },
  modalText: {
    fontSize: 25

  }
})