import idollar from '../images/idollar.svg'

function OutputResult(props){
    return(
        <div className="output-result">
            <div className="output-text">
                <h2>{props.title}</h2>
                <span>/ person</span>
            </div>
            <div className="output-price">
                <div className="icon-dollar">
                    <img src={idollar} alt="icon dollar"/>
                </div> 
                <h3> 0.00</h3>      
            </div>
        </div>
    )
}
export default OutputResult;