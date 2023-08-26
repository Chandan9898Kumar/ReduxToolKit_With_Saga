import { createAction, createSlice } from "@reduxjs/toolkit";
import Api from "../Components/Apis";
import { all } from "redux-saga/effects";
import { call, put, takeLatest } from "redux-saga/effects";

export const initialState = {
  landingPage: true,
  ProgressPages: false,
  downloadPage: false,
  selectedOption: "tango",
  appName: "google",
  checkRequest: true,
  requestValue: 64,
  apiData: [],
  clientIp: "12.1234.33.12345",
  id: "",
  title: "",
};

//  Here we don't need to pass dispatch function with type,createSlice itself create type.
//  we just need to create a function and export it. And import these functions in your files.

// NOTE   -

// createSlice function looks at all the functions that are defined in the reducers field and
// for every case generates an action creator that uses the name of the reducer as the action type itself.

const sessionSlice = createSlice({
  name: "sessionRecord",
  initialState,
  reducers: {
    apiDataFun(state, action) {
      return {
        ...state,
        apiData: action.payload.data.products,
      };
    },
    setAppName(state, action) {
      return {
        ...state,
        appName: action.payload,
      };
    },

    setClientIp(state, action) {
      return {
        ...state,
        clientIp: action.payload,
      };
    },
    setSelectorOption(state, action) {
      return {
        ...state,
        selectedOption: action.payload,
      };
    },
    checkRequest(state, action) {
      return {
        ...state,
        checkRequest: action.payload,
      };
    },
    setRequestValue(state, action) {
      return {
        ...state,
        requestValue: action.payload,
      };
    },
    startSession(state, action) {
      return {
        ...state,
        landingPage: false,
        ProgressPages: true,
        downloadPage: false,
        id: action.payload.data.id,
        title: action.payload.data.title,
      };
    },

    stopSessionRecord(state, action) {
      return {
        ...state,
        landingPage: false,
        ProgressPages: false,
        downloadPage: true,
        title: action.payload.data.title,
      };
    },
  },
});

// export const actions = sessionSlice.actions     OR

export const {
  apiDataFun,
  setAppName,
  setClientIp,
  setSelectorOption,
  checkRequest,
  setRequestValue,
  startSession,
  stopSessionRecord,
} = sessionSlice.actions;

//  Import below in Store file.
export default sessionSlice.reducer;

//                               Saga - used for handling Apis.

const preFix = "sessionRecord";

//                               Creating actionType for saga
export const sagaActions = {
  getDataFromApi: createAction(`${preFix}/getApplications`),
  startSessionRecording: createAction(`${preFix}/startSessionRecording`),
  stopSessionRecording: createAction(`${preFix}/stopSessionRecording`),
};

//                               calling Functions Here
function* fetchApplications(props) {
  try {
    const response = yield call(Api.getApiData);
    yield put(apiDataFun(response));
  } catch (error) {
    console.error({ error });
  }
}

function* startSessionRecording() {
  try {
    const response = yield call(Api.postApiData);
    yield put(startSession(response));
  } catch (error) {
    console.error({ error });
  }
}

function* stopSessionRecording() {
  try {
    const response = yield call(Api.stopSessionRecoding);
    yield put(stopSessionRecord(response));
  } catch (error) {
    console.error({ error });
  }
}

//         will use this function in  rootSaga function .
export function* SessionRecordingSaga() {
  yield takeLatest(sagaActions.getDataFromApi, fetchApplications);
  yield takeLatest(sagaActions.startSessionRecording, startSessionRecording);
  yield takeLatest(sagaActions.stopSessionRecording, stopSessionRecording);
}

//         create a rootSaga function to call rest of other functions.

export function* rootSaga() {
  yield all([SessionRecordingSaga()]);
}

// What is createSlice in Redux Toolkit  ?

// createSlice is a higher order function that accepts an initial state,
// an object full of reducer functions and a slice name.
// It automatically generates action creators and action types that correspond to the reducers and state.

// In Redux-Toolkit, the createSlice method helps us create a slice of the redux-store.
// This function aims to reduce the boilerplate required to add data to redux in the canonical way.
// Internally, it uses createAction and createReducer.
