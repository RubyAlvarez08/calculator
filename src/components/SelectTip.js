import TipButton from "./TipBotton";
function SelectTip(){
    return(
        <div role="checkbox" aria-checked="false"  tabindex="0">
            <TipButton name="5%"></TipButton>
            <TipButton name="10%"></TipButton>
            <TipButton name="15%"></TipButton>
            <TipButton name="25%"></TipButton>
            <TipButton name="50%"></TipButton>
            <TipButton name="Custom"></TipButton>
        </div>
    )
}

export default SelectTip;