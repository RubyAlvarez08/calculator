import TipButton from "./TipBotton";
import '../components/SelectTip.css';
function SelectTip(){
    return(
        <div className="container-select" >
            Select Tip %
            <div role="checkbox" aria-checked="false"  tabindex="0"className="select-tip">
            <TipButton name="5%"></TipButton>
            <TipButton name="10%"></TipButton>
            <TipButton name="15%"></TipButton>
            <TipButton name="25%"></TipButton>
            <TipButton name="50%"></TipButton>
            <TipButton name="Custom"></TipButton>
            </div>
            
        </div>
    )
}

export default SelectTip;