import axios from "axios"

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_SMURFS = "ADD_SMURFS";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const DELETE_SMURFS = "DELETE_SMURFS";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const ERROR = "ERROR";


export const fetchSmurfs = () =>{
  return dispatch => {
    dispatch({type: FETCH_SMURFS});
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: "WHERE ARE MY SMURFS :("
      })
    })
  }
}

export const addSmurfs = smurf => {
  return dispatch => {
      dispatch({type: ADD_SMURFS});
      axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
          dispatch({
              type: ADD_SUCCESS,
              payload: res.data
          })
      })
      .catch(err => {
          dispatch({
              type: ERROR,
              payload: "SMURF COULD NOT BE ADDED"
          })
      })
  }
}

export const deleteSmurfs = id => {
  return dispatch => {
      dispatch({type: DELETE_SMURFS});
      axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
          dispatch({
              type: DELETE_SUCCESS,
              payload: res.data
          })
      })
      .catch(err => {
          dispatch({
              type: ERROR,
              payload: "Could not remove smurf :("
          })
      })
  }
}

export const updateSmurfs= (id, smurf) => {
  return dispatch => {
      dispatch({ type: UPDATE_SMURFS });
      axios
      .put(`http://localhost:3333/smurfs/${id}`, smurf)
      .then(res => {
        dispatch({
          type: UPDATE_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: "COULDNT UPDATE YOUR SMURF"
        })
      })
  }
}

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
