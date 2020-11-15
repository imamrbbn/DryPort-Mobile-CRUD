import React, { useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper';
import { ScrollView, View, StyleSheet, TextInput, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { FETCH_DATA_CONTAINERS } from '../stores/actions/ContainerAction'

export default function TableContainer() {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const containers = useSelector(state => state.ContainerReducer.containers)
  useEffect(() => {
    dispatch(FETCH_DATA_CONTAINERS())
  }, [dispatch])

  function handleShowTools() {}

  return (
    <>
      <View style={styles.searchForm}>
        <Text style={{fontSize: 20, color: '#065c6f'}}>Search</Text>
        <TextInput
            placeholder="input no container.."
            style={[styles.formInput, {fontFamily: 'Quicksand_500Medium'}]}
            onChangeText={(text => {
              setSearch(text)
            })}/>
      </View>
      <DataTable style={styles.tableContent}>
          <DataTable.Header style={styles.headerTable}>
            <DataTable.Title style={{width:100}} > 
              <Text style={{color: 'white'}}> No. Container</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={{color: 'white'}}> Size</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={{color: 'white'}}> Type</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={{color: 'white'}}> Slot</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={{color: 'white'}}> Row</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={{color: 'white'}}> Tier</Text>
            </DataTable.Title>
          </DataTable.Header>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">

          {containers.length > 0 && containers.filter(container => container.id.toLowerCase().includes(search.toLowerCase()))
            .map((container, i) => {
            return (
            <DataTable.Row style={styles.bodyTable} key={i} onPress={() => handleShowTools()}>
              <DataTable.Cell  >
                <Text style={{color: 'white'}}> {container.id}</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={{color: 'white'}}> {container.size}</Text>
             </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={{color: 'white'}}> {container.type}</Text>
             </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={{color: 'white'}}> {container.slot}</Text>
             </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={{color: 'white'}}> {container.row}</Text>
             </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={{color: 'white'}}> {container.tier}</Text>
             </DataTable.Cell>
            </DataTable.Row>

            )
          })}

        </ScrollView>
      </DataTable>
    </>
  )
}

const styles = StyleSheet.create({
  tableContent : {
    height: 550
  },
  formInput :{
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: '#065c6f',
    backgroundColor: '#64958f',
    width: '70%',
    marginHorizontal: 10
  },
  searchForm : {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10
  },
  headerTable: {
    backgroundColor: '#065c6f',
  },
  headerTitle: {
    color: 'white'
  },
  bodyTable: {
    backgroundColor: '#64958f'
  }
})