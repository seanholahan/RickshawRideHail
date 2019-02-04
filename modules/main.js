import constants from './actionConstants'

const {GET_INPUT} = constants;

export function getCurrentLocation() {

}

export function getUserInputData(payload) {
  return{
    type: GET_INPUT,
    payload
  }
}

function handleGetInputData(state, action) {
    const{key, value} = action.payload;
  return update(state, {
    inputData: {
      [key]: {
        $set:value
      }
    }
  })
}

const ACTION_HANDLERS = {
  GET_INPUT: handleGetInputData
}

const initialState = {
  region:{},
  inputData: {}
}
