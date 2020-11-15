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
import { SET_CONTAINERS } from '../stores/actions/ContainerAction'
import { useDispatch, useSelector } from "react-redux";
import { Picker } from '@react-native-picker/picker';

export default function ModalUpdate() {
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false);
  const containers = useSelector(state => state.ContainerReducer.containers)
  const [id, setId] = useState('')
  const [size, setSize] = useState('')
  const [type, setType] = useState('')
  const [slot, setSlot] = useState('')
  const [row, setRow] = useState('')
  const [tier, setTier] = useState('')
  const [error, setError] = useState('')

  function handleCreateNewData () {
    if (id == ''|| size == ''|| type == ''|| slot ==''|| row ==''|| tier =='') {
      setError("Input all of data need!")
    } else {
      let data = {id, size, type, slot, row, tier}
      let updatedData = containers.filter((container) => container.id != data.id)
      updatedData.push(data)
      dispatch(SET_CONTAINERS(updatedData))
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

  function handleChosenContainer(data) {
    setId(data.id)
    setSize(data.size.toString())
    setType(data.type)
    setSlot(data.slot.toString()) 
    setRow(data.row.toString())
    setTier(data.tier.toString())
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
            <Text style={{
              color:'#065c6f', 
              fontWeight:'bold', 
              fontSize: 20,
              marginBottom:10
              }}>Update Data</Text>
              {error != '' && <Text> {error} </Text>}
            <Picker
              style={styles.pickerInput}
              onValueChange={(itemValue, itemIndex) => handleChosenContainer(itemValue) }>
              {containers.map((container,i) => {
                return(
                  <Picker.Item label={container.id} value={container} key={i} />
                )
              })}
            </Picker>

            <TextInput
              label="Size"
                onChangeText={size => setSize(size)}
                value={size}
                mode="outlined"
                style={styles.textInput}
                keyboardType={"number-pad"}
              />

            <Picker
              style={{...styles.pickerInput, marginRight: 'auto'}}
              selectedValue={size.toString()}
              onValueChange={(itemValue, itemIndex) => setSize(itemValue) }>
              <Picker.Item label="Size"/>
              <Picker.Item label="10" value="10" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="30" value="30" />
              <Picker.Item label="40" value="40" />
              <Picker.Item label="50" value="50" />
            </Picker>

            <TextInput
              label="Slot"
                onChangeText={slot => setSlot(slot)}
                value={slot}
                mode="outlined"
                style={styles.textInput}
                keyboardType={"number-pad"}
              />


            <TextInput
              label="Row"
                onChangeText={row => setRow(row)}
                value={row}
                mode="outlined"
                style={styles.textInput}
                keyboardType={"number-pad"}
              />

            <TextInput
              label="Tier"
                onChangeText={tier => setTier(tier)}
                value={tier}
                mode="outlined"
                style={styles.textInput}
                keyboardType={"number-pad"}
              />

              
            <View style={styles.buttonGroupModal}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#64958f" }}
                onPress={() => {
                  setId('')
                  setSize('')
                  setType('')
                  setSlot('') 
                  setRow('')
                  setTier('')
                  setModalVisible(!modalVisible);
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
                <Text style={styles.textStyle}>Update</Text>
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
        <Text style={styles.textStyle}>Update</Text>
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
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
