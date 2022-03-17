/* eslint-disable jsx-a11y/role-has-required-aria-props */
import TipButton from "./TipBotton";
import '../components/SelectTip.css';
function SelectTip(){
    return(
        <div className="container-select" tabIndex="0">
            Select Tip %
            <div role="combobox" className="select-tip">
            <TipButton name="5%"></TipButton>
            <TipButton name="10%"></TipButton>
            <TipButton name="15%"></TipButton>
            <TipButton name="25%"></TipButton>
            <TipButton name="50%"></TipButton>
            <div className="tip-button custom">
                <input placeholder="custom"/>
            </div>
            </div>
            
        </div>
    )
}

export default SelectTip;