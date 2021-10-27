import ButtonGroup from "./components/ButtonGroup.js"
import Bouton from "./components/Btn_sty.js"

import React, { useState } from "react";
import "./App.css"

    

const Create = () =>{
    const[show,setShow]=useState(true);
    return(
        <div className="create">
            <div className="contenantFlex centerFlex flewWrap">
 
            </div>
            <button onClick={()=>setShow(true)}> test </button>

            <button onClick={()=>setShow(false)}> test </button>
        </div>
    );
}

export default Create;