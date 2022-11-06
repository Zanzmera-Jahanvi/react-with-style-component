import React, { useContext, useReducer ,useEffect} from 'react'
import { reducer } from './Reducer';
// import APIData from './APIData';

const AppContext = React.createContext();

// const API = "https://thapareactapi.up.railway.app";


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
    // getting all api data
    // const getServices = async (url) =>{

    //     try {
    //         const res = await fetch(url)
    //         const data = await res.json()
    //         console.log(data);
    //     } catch (error) {

    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //   getServices(APIData)
    
    // }, [])
    

    return <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>{children}</AppContext.Provider>
}

// global custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext }
