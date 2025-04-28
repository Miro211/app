import Style from './Logo.module.css'
// import logo from '../../assets/logo.jpg'
import logo from '../../assets/logo.svg'
export default function Logo(){
    return(
        <div className={Style.Logo}>
            <img src={logo} alt="logo"/>
        </div>
    )
}