import Style from './Header.module.css'
import Logo from '../Logo/Logo.jsx'
import Nav from '../Nav/NavSearch.jsx'
import Phone from '../Phone/Phone.jsx'
export default function Header (){
    return(
        <div className={Style.header}>
            <Logo/>
            <Nav/>
            <Phone/>
        </div>
    )
}