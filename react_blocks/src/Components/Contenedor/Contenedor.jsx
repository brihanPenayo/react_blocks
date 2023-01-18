import React from 'react'
import styles from './Contenedor.module.css';

const Contenedor = props => {
    // PARA RESOLVER 
    // let { estilo } = styles;
    // estilo = props.tipo;
    // console.log(estilo);
    return (
        <div className={styles.flexRow}>
            {props.children}
            
        </div>
    )
}

export default Contenedor