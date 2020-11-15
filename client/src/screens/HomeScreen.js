import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import TableContainer from '../components/TableContainer'
import ModalCreate from '../components/ModalCreate'
import ModalUpdate from '../components/ModalUpdate'
import ModalDelete from '../components/ModalDelete'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.body}> 
      <TableContainer/>
      <View style={styles.buttonGroupModal}>
        <ModalDelete/>
        <ModalUpdate/>
        <ModalCreate/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonGroupModal : {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 50
  },
  body: {
    backgroundColor: '#faf3dd',
    height: '100%'
  }
})
