import React,{useState,useEffect} from "react";
import "./App.css";
import Loading from  "./components/loading/loading.component"
import Mainstuff from "./mainstuff";


const App = () => {
  const [isLoading, setIsLoading]=useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },3000);
    })
  
  return (
    <div>
      {isLoading===true?
        <Loading/>:
        <Mainstuff/>
}
    </div>    
  );
};

export default App;