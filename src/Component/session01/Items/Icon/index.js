import React from 'react'
import styles from './Icon.mudule.css'

function Icon({iconName= ""}) { 
    const iconStyle = {
        ...styles,
    };
  return (
    <div className={styles.icon}>
        <img src={`/public/images/${iconName}`} style={iconStyle} alt=''/>
    </div>
  )
}
export default Icon