
function TipButton(props){
    return(
            <input  type={props.type}
                    className={props.className}
                    value={props.value}
                    id={props.id}
                    placeholder={props.placeholder}
            /> 
    )
}
export default TipButton;