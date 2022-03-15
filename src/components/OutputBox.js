import OutputResult from "./OutputReult";
import '../components/outputBox.css';


function OutputBox(){
    return(
        <div className="output-box">
           <OutputResult title="Tip Amount"></OutputResult>
           <OutputResult title="Total"></OutputResult>
           <button className="reset">Reset</button>
        </div>
    )
}
export default OutputBox;

