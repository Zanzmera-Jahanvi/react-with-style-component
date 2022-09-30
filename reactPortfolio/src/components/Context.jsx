// const API = "https://thapareactapi.up.railway.app";
import React, { useContext, useReducer } from 'react'
import { reducer } from './Reducer';

const AppContext = React.createContext();

const initialState = {
    name: "",
    image: "",
}


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "Jahanvi",
                image: "./images/Hero.svg",
            },
        })
    }
    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name: "Jahanvi",
                image: "./images/about.svg",
            },
        })
    }

    return <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>{children}</AppContext.Provider>
}

// global custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext }
