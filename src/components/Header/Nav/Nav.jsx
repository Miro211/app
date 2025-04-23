import styles from'./Nav.module.css'

export default function Nav({navigation}){
    return(
        <nav>
            <ul>
                {
                    navigation.map(i =>(
                        <li className={styles.list}>{i.title}</li>
                    ))
                }
            </ul>
        </nav>
    )
}
