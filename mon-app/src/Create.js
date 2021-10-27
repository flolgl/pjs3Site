import ButtonGroup from "./components/ButtonGroup.js"
import Bouton from "./components/Btn_sty.js"

import "./App.css"
const Create = () =>{
    return(
        <div className="create">
            <div className="contenantFlex centerFlex flewWrap">

                <Bouton text='test' icon='voiture'></Bouton>
            </div>
        </div>
    );
}

export default Create;