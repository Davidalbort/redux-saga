import styles from '../styles/components/button.module.scss';
const Button = ({handleClick}) => {
    return(
        <button className={styles.container} onClick={handleClick}>
            GENERATE
        </button>
    )
}

export { Button };