const initState = {
  loading: false,
  error: false,
  containers : [],
  chosenContainer : null
}

export default function containerReducer(state = initState, action) {
  switch (action.type) {
    case "SET_LOADING":
        return {
            ...state,
            loading: action.payload
        }

    case "SET_ERROR":
        return {
            ...state,
            error: action.payload
        }    

    case "SET_CONTAINERS":
        return {
            ...state,
            containers: action.payload
        }

    case "SET_CHOSEN_CONTAINER":
        return {
            ...state,
            chosenContainer: action.payload
        }

    case "SET_CATEOGRY":
        return {
            ...state,
            category: action.payload
        }

    default:
        return state
  }

}