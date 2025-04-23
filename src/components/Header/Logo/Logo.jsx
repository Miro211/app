import styles from'./Logo.module.css'
import logo from '../../../assets/images.png'
export default function Logo(){
    return (
    <div>
        <img src={logo} alt="" className={styles.img}/>
    </div>
    )
}