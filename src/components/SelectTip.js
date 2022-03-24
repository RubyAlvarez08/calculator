/* eslint-disable jsx-a11y/role-has-required-aria-props */
import TipButton from "./TipBotton";
import '../components/SelectTip.css';
function SelectTip(){
    return(
        <fieldset className="container-select">
            <legend>Select Tip %</legend> 
                <TipButton type="button"className="tip-button" value="5%" for="five" id="five"/>
                <TipButton type="button"className="tip-button" value="10%"for="ten" id="ten"/>
                <TipButton type="button"className="tip-button" value="15%"for="fifteen" id="fifteen"/>
                <TipButton type="button"className="tip-button" value="25%"for="twenty-five" id="twenty-five"/>
                <TipButton type="button"className="tip-button" value="50%"for="fifty" id="fifty"/>
                <TipButton type="text" className="custom" placeholder="custom"for="custom" id="custom"/>
        </fieldset>
    )
}

export default SelectTip;