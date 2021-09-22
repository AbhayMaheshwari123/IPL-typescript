import  { useEffect } from "react";
import { useState } from "react";
import Loader from "react-loader-spinner";
import eventemitter from "./Event";

function Lodr(){
    const [showloader, setshowloader]=useState(false);
    useEffect(() => {
        eventemitter.on("SHOW_LOADER",()=>{
            setshowloader(true);
        });
        eventemitter.on("HIDE_LOADER",()=>{
            setshowloader(false);
        });
        return ()=>{
            eventemitter.off('SHOW_LOADER',()=>{});
            eventemitter.off('HIDE_LOADER',()=>{});
        }         
    },[])
       return (
           <>{showloader &&  <Loader
           type="ThreeDots"
           color="#00BFFF"
           height={100}
           width={100}
           timeout={3000}
        //    style={{margin:'25% 45%'}}
         />}</>
       )
}


export default Lodr