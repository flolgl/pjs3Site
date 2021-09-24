import ButtonGroup from "./components/ButtonGroup.js"
import "./App.css"
const Create = () =>{
    return(
        <div className="create">
            <h2>Add</h2>
            <div className="contenantFlex centerFlex flewWrap">

                <ButtonGroup buttons={["Button 1", "Button 2", "Button 3", "Button 4"]}></ButtonGroup>
            </div>
        </div>
    );
}

export default Create;