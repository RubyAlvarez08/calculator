/* eslint-disable jsx-a11y/aria-role */
import '../components/InputBox.css';
//mport idollar from '../images/idollar.svg';


function InputBox(props){
    return(
        <div className="input-box">
          <label for={props.name}> {props.name}</label>
					<div className="input-box__enter" role="input" tabIndex="0">
						<input type="number"  id={props.name} placeholder="0" min="0"></input>
					</div>
        </div>
    )
}
export default InputBox;