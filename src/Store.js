import { configureStore } from "@reduxjs/toolkit";
import sessionSlice from "./ReduxSlice/CreateSlice";
import createSagaMiddleware from "redux-saga";
import {rootSaga}  from './ReduxSlice/CreateSlice'
const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    ValidationData: sessionSlice,
  },
  middleware: [sagaMiddleware],
});


sagaMiddleware.run(rootSaga)

// createSagaMiddleware — Creates a Redux middleware instance and connects the Sagas to the Redux Store.
// configureStore — A function provided by the @reduxjs/toolkit package that simplifies the process of creating
//  a Redux store with sane defaults and built-in middleware.

// The reducer key,:- is an object contains all our application reducers combined in a single global reducer (object).
// The middleware key :- represents the list of middlewares will be used in the redux configuration.


// NOTE         -

// configureStore is only accepting one parameter, which is an Object, which is called ConfigureStoreOptions.

// ConfigureStoreOptions has several attributes (? means optional):

// reducers
// middleware​?
// devTools​?
// preloadedState​?
// enhancers​?

// The most important and easy to understand are reducers, devTools, and preloadedState.

// reducers (object)
// the reducers attribute is the mandatory option that we put our reducers as attributes.
// The attribute name will be related to selector.
