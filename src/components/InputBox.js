/* eslint-disable jsx-a11y/aria-role */
import '../components/InputBox.css';
//mport idollar from '../images/idollar.svg';


function InputBox(props){
    return(
        <div className="input-box">
          <label for={props.name}> {props.name}
						<input type="number" className="input-box__enter" id={props.name} placeholder="0" min="0"/>
          </label>
        </div>
    )
}
export default InputBox;