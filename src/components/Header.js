import logo from '../images/logo.svg';
import '../components/Header.css'

 function Header(){
    return( 
        <div className="logo">
             <img src={logo}  alt="logo" />
        </div>
    )
        
};

export default Header;