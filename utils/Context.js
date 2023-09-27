import Reducer, { initialState } from "./Reducer"
import { createContext, useReducer, useContext } from "react";

const AppContext = createContext();


export default function AppProvider({children}) {
  const [appState, appDispatch] = useReducer(Reducer, initialState);
  return (
    <AppContext.Provider value={{appState, appDispatch}}>
      {children}
    </AppContext.Provider>
  )
}


export function useGlobalContext() {
  return useContext(AppContext);
}