import React, { useState } from "react";
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

export default function ModalDelete() {
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false);
  const [chosenData, setChosenData] = useState()
  const containers = useSelector(state => state.ContainerReducer.containers)

  function handleCreateNewData () {
    let updatedData = containers.filter((container) => container.id != chosenData.id)
    dispatch(SET_CONTAINERS(updatedData))
    setModalVisible(!modalVisible);
    setChosenData(null)
  }

  function handleChosenContainer(data) {
    setChosenData(data)
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
              >Delete Data</Text>
            <Picker
              style={{height: 50, width: 200}}
              onValueChange={(itemValue, itemIndex) => handleChosenContainer(itemValue) }>
              {containers.map((container,i) => {
                return(
                  <Picker.Item label={container.id} value={container} key={i} />
                )
              })}
            </Picker>
            {chosenData &&
              <Text>Yakin hapus data nomor {chosenData.id} ?</Text>
              }
              <View style={styles.buttonGroupModal}>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#64958f" }}
                  onPress={() => {
                    setChosenData(null)
                    setModalVisible(!modalVisible);
                  }}
                  >
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableHighlight>

                {chosenData && 
                  <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#64958f" }}
                    onPress={() => {
                      handleCreateNewData();
                    }}
                    >
                    <Text style={styles.textStyle}>Delete</Text>
                  </TouchableHighlight>
                }
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
        <Text style={styles.textStyle}>Delete</Text>
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
    width: '100%'
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
