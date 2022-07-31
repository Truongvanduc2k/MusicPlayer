import React from 'react'
import styles from './Text.mudule.css'


function Text(textContent = '', textColor = '#000000') {
    const textStyle = {...styles, textColor: textColor,}
  return (
    <div className={styles.text} style={textStyle}>{textContent}</div>
  )
}

export default Text