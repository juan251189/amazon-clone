import React, { createContext, useContext, useReducer } from "react";

//PREPARES the dataLayer(storage)
export const StateContext = createContext();

//wrap our app and provide the datalayer to the components inside
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// to be able pull information from the data layer
export const useStateValue = () => useContext(StateContext);
