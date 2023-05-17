import React ,{ useState,useEffect } from "react";
import { createContext } from "react";


export const globalContext = createContext();

const Context = ({children})=>{
    const [data, setData] = useState([]);
    const [url,setUrll] = useState(`https://dummyjson.com/products`)
    const [search,setSearch] = useState("");
    const [searchData,setSearchData] = useState("");
 
  
    const getData = async (props) => {
    
      try {
       console.log(props)
        const response = await fetch(props);
        const result = await response.json();
        console.log(result.products)
        setData(result.products);
      } catch (error) {
        console.error(error);
      }
    };
    
    useEffect(() => {
      getData(url);
    }, [url]);
    useEffect(()=>{
            setUrll(`https://dummyjson.com/products${searchData}`)
    },[searchData])
  
    return(
        <globalContext.Provider value={{products:[data, setData],searchInput:[search,setSearch], searchBtn:[searchData, setSearchData] }}>
            {children}
        </globalContext.Provider>
    )
}

export default Context;