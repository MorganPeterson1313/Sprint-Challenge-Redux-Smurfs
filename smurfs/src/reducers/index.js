/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        error: "",
        fetchingSmurfs: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
        error: ""
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case FETCH_SMURF_START:
      return {
        ...state,
        error: "",
        addingSmurf: true
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: true,
        smurfs: action.payload,
        error: ""
      };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
      case DELETE_SMURF_START:
              return {
                ...state,
                error: '',
                deletingSMURF: true
              };
            case DELETE_SMURF_SUCCESS:
              return {
                ...state,
                deletingSmurf: false,
                smurfs: action.payload,
                error: ''
              };
              case DELETE_SMURF_FAILURE:
                return {
                  ...state,
                  deletingSMURF: false,
                  error: action.payload
                };
    default:
      return state;
  }
};

export default reducer;
