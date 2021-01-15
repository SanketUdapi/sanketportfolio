import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import "./loading.styles.css";

const Loading = () =>{
       return(
      <div id="load">
        <Loader 
           type="Grid"
           color="#b3b3ff"
           height={100}
           width={100}
           timeout={3000} 
        />
      </div>
       );
      }
export default Loading;