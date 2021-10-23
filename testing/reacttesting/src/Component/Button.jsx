import React from 'react'
import styles from "./Button.module.css"
const Button = ({label, onClick}) => {
    return (
        <div className={styles.button} data-testid="button" onClick={onClick}>
            {label}
        </div>
    )
}

export default Button
