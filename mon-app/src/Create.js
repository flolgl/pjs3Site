import ButtonGroup from "./components/ButtonGroup.js"
import Bouton from "./components/Btn_sty.js"
import NouveauTPL from "./components/nouveauTPL.js"

import React, { useState } from "react";
import "./App.css"

    

const Create = () =>{
    const[show,setShow]=useState(true);
    return(
        <div className="create">
            <div className="contenantFlex centerFlex flewWrap">
                {
                    
                show?<NouveauTPL 
                title="Tourisme à brehat"
                resume=""
                buttons={[["Office de Tourisme", "i"], ["Camping municipal", "camping"], ["Horaires vedettes", "bateau"], ["Ports et mouillages", "port"], ["Numéros utiles", "phone"], ["Activités culturelles", "thatre"], ["Activités sportives", "foot"], ["Patrimoine", "eglise"], ["Histoire", "livre"]]}
                ></NouveauTPL>:null
                }
            </div>
            <button onClick={()=>setShow(true)}> test </button>

            <button onClick={()=>setShow(false)}> test </button>
        </div>
    );
}

export default Create;