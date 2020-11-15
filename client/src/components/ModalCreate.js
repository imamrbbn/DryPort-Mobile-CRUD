import React, { useState } from "react";
import { TextInput } from 'react-native-paper';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { Picker } from '@react-native-picker/picker';

import { CREATE_NEW_CONTAINER } from '../stores/actions/ContainerAction'

export default function ModalCreate() {
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState('')
  const [id, setId] = useState('')
  const [size, setSize] = useState('')
  const [type, setType] = useState('')
  const [slot, setSlot] = useState('')
  const [row, setRow] = useState('')
  const [tier, setTier] = useState('')

  function handleCreateNewData () {
    if (id == ''|| size == ''|| type == ''|| slot ==''|| row ==''|| tier =='') {
      setError("Input all of data need!")
    } else {
      console.log('masuk mana')
      let data = {id, size, type, slot, row, tier}
      dispatch(CREATE_NEW_CONTAINER(data))
      setModalVisible(!modalVisible);
      setId('')
      setSize('')
      setType('')
      setSlot('') 
      setRow('')
      setTier('')
      setError('')
    }
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{color:'#065c6f', fontWeight:'bold', fontSize: 20, marginBottom:10}}
              >Create New</Text>
             {error != '' && <Text> {error} </Text>}
            <TextInput
              label="No. Container"
                onChangeText={id => setId(id)}
                mode="outlined"
                style={styles.textInput}
              />

            <Picker
              style={styles.pickerInput}
              selectedValue={size.toString()}
              onValueChange={(itemValue, itemIndex) => setSize(Number(itemValue)) }>
              <Picker.Item label="Size"/>
              <Picker.Item label="10" value="10" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="30" value="30" />
              <Picker.Item label="40" value="40" />
              <Picker.Item label="50" value="50" />
            </Picker>

             <Picker
              style={styles.pickerInput}
              selectedValue={type}
              onValueChange={(itemValue, itemIndex) => setType(itemValue) }>
              <Picker.Item label="Type" value="" />
              <Picker.Item label="Dry" value="Dry" />
              <Picker.Item label="Rft" value="Rft" />
            </Picker>

            <TextInput
              label="Slot"
                onChangeText={slot => setSlot(Number(slot))}
                mode="outlined"
                style={styles.textInput}
                keyboardType={"number-pad"}
              />


            <TextInput
              label="Row"
                onChangeText={row => setRow(Number(row))}
                mode="outlined"
                style={styles.textInput}
                keyboardType={"number-pad"}
              />

            <TextInput
              label="Tier"
                onChangeText={tier => setTier(Number(tier))}
                mode="outlined"
                style={styles.textInput}
                keyboardType={"number-pad"}
              />

              
            <View style={styles.buttonGroupModal}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#64958f" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setId('')
                  setSize('')
                  setType('')
                  setSlot('') 
                  setRow('')
                  setTier('')
                  setError('')
                }}
                >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#64958f" }}
                onPress={() => {
                  handleCreateNewData();
                }}
                >
                <Text style={styles.textStyle}>Create</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Create</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    width: 350,
    backgroundColor: "#faf3dd",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  buttonGroupModal: {
    flexDirection: "row"
  },
  openButton: {
    backgroundColor: "#065c6f",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginHorizontal:30,
    marginTop:20,
    width: 100
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  textInput: {
    width: '100%',
    backgroundColor: 'white',
  },
  pickerInput :{
    backgroundColor: 'white',
    width:'50%',
    marginVertical: 3,
    borderWidth: 3,
    borderColor: 'black',
    marginRight: 'auto'
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
