import React from 'react'
import styles from './Avatar.module.css'

function Avatar({avatarName= "",}) { 
    const avatarStyle = {
        ...styles,
    };
  return (
    <div className={styles.avatar}>
        <img src={`/public/images/${avatarName}`} style={avatarStyle} alt=''/>
    </div>
  )
}

export default Avatar