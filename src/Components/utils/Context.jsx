import { createContext, useContext, useState, useEffect, useReducer,} from "react";

const GlobalStates = createContext();

const themes = {
  dark: {
        theme: false,
        backColor: 'black',
        fontColor: 'white'
  },
  light: {
        theme: true,
        backColor: 'white',
        fontColor: 'black'
  }
}

const initialState = themes.light

const initialFavState = JSON.parse(localStorage.getItem('favs')) || []

const themeReducer = (state, action, ) => {
  switch(action.type) {
    case 'SWITCH_DARK':
      return themes.dark
  case 'SWITCH_LIGHT':
      return themes.light
  default:
      throw new Error
  }
}

const favReducer = (state, action) => {
  switch(action.type){
      case 'ADD_FAV': 
          return [...state, action.payload]
      default: 
          throw new Error
  }
}

const Context = ({ children }) => {

  const [odonto, setOdonto] = useState ([])
  const url = "https://jsonplaceholder.typicode.com/users";
  const [themeState, themeDispatch] = useReducer ( themeReducer, initialState)
  const [favState, favDispatch] = useReducer (favReducer, initialFavState)

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify (favState))
  },[favState])

  useEffect(() => {
    fetch (url)
    .then(res => res.json())
    .then(data => setOdonto (data.results))

  }, [])

  return (
    <GlobalStates.Provider
      value={{favState, favDispatch, odonto, setOdonto, themeDispatch, themeState }}
    >
      {children}
    </GlobalStates.Provider>
  );
};


export default Context;
export const useGlobalStates = () => useContext(GlobalStates)