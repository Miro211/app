import styles from'./Section.module.css'
export default function Section({ products }) {
    return (
        <div className={styles.products}>
            {
                products.map(i => (
                    <div className={styles.items}>
                    <img src={i.image} alt="" />
                    <p> {i.title}</p>
                    <p>{i.price}</p>
                    </div>
                ))
            }
        </div>
    )
}