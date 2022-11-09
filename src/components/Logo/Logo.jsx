
import './index.module.css';
import logo from '../../assets/images/Logo.svg'

function Logo({classnameImg, classnameLink}) {
  return (
    <a href="/" className={classnameLink}>
        <img src={logo} alt="Material post" className={classnameImg}/>
    </a>
    
  );
}

export default Logo;
