import React from 'react'
import styles from './Contenedor.module.css';

const Contenedor = props => {
    return (
        <div className={`${styles.flex} ${styles[props.tipo]}`}>
            {props.children}
        </div >
    )
}

export default Contenedor