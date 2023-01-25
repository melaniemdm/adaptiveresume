import './style.scss';
import logo from '../../assets/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

export default function Header(){
    return (<div className="headerContenair">


<img
          className="logo-image"
          src={logo}
          alt="logo"
        />
<div className="containerNav">
<ul className="nav">
    <li>  <Link to="/Accueil" className='navLien'>Accueil</Link></li>
</ul></div>


   </div> )
}