const { dummyData } = require('../../hooks/dummyData')

export function SET_LOADING(status) {
  return {
    type: "SET_LOADING",
    payload: status
  }
}

export function SET_ERROR(status) {
  return {
    type: "SET_ERROR",
    payload: status
  }
}

export function SET_CHOSEN_CONTAINER(data) {
  return {
      type: "SET_CHOSEN_CONTAINER",
      payload: data
  }; 
}

export function SET_CONTAINERS(data) {
  return {
      type: "SET_CONTAINERS",
      payload: data
  }; 
}

export function FETCH_DATA_CONTAINERS() {
  return(dispatch, getState) => {
    dispatch({
        type: "SET_CONTAINERS",
        payload: dummyData
    })
  }
}

export function CREATE_NEW_CONTAINER(data) {
  return(dispatch, getState) => {
    let containers = getState().ContainerReducer.containers
    containers = [...containers, data]
    dispatch({
        type: "SET_CONTAINERS",
        payload: containers
    })
  }
}

