import {
  FETCH_SMURFS,
  FETCH_SUCCESS,
  ADD_SMURFS,
  ADD_SUCCESS,
  DELETE_SMURFS,
  DELETE_SUCCESS,
  UPDATE_SMURFS,
  UPDATE_SUCCESS,
  ERROR
} from '../actions';

const initialState = {
  smurfs: [],
  loading: false,
  error: null
}

export const smurfReducer = (state = initialState, action) => {
  switch(action.type){

    case FETCH_SMURFS:
      return {
          ...state,
          loading: true,
          error: null
      }

    case FETCH_SUCCESS:
        return {
            ...state,
            smurfs: action.payload,
            loading: false,
            error: null
        }

    case ADD_SMURFS:
        return {
            ...state,
            loading: true,
            error: null
        }

    case ADD_SUCCESS:
        return {
            ...state,
            smurfs: action.payload,
            loading: false,
            error: null
        }

    case DELETE_SMURFS:
        return {
            ...state,
            loading: true,
            error: null
        }

    case DELETE_SUCCESS:
        return {
            ...state,
            smurfs: action.payload,
            loading: false,
            error: null
        }

    case UPDATE_SMURFS:
        return {
            ...state,
            loading: true,
            error: null
        }

    case UPDATE_SUCCESS:
        return {
            ...state,
            smurfs: action.payload,
            loading: false,
            error: null
        }

    case ERROR:
        return {
            ...state,
            error: action.payload
        }

    default:
        return state;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
