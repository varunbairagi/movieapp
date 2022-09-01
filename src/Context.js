import React ,{createContext,useEffect,useState}from "react";
    const contextApp=createContext();
const Context=({children})=>{
    
    const [Name, setName] = useState("Iron Man");
    const [data, setdata] = useState([]);
    const[id,setId]=useState();
  
    useEffect(() => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "11953919f1msha36b523db985331p136566jsnef85400936d7",
          "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
        },
      };
  
      let url = `https://advanced-movie-search.p.rapidapi.com/search/movie?query=${Name}&page=1`;
      
          fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          setdata(data.results);
        });
      
      
    }, [Name]);


    return (
        <contextApp.Provider value={{data,setName,Name,id,setId}}>{children}</contextApp.Provider>
    )

}
export {contextApp,Context}