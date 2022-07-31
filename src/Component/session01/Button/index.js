import React from 'react';
import styles from './Button.module.css';

function Button({
  textColor ='#ffffff',
  backgroundColor = '#000000',
  imgName = 'apple',
  textContent = 'Continue with Apple !'
}) {
  
  return (
    <div className={styles.button} style={{backgroundColor: backgroundColor}}>

      <div className={styles.icon} style={{color: textColor}}>
       <img src={`/images/${imgName}.png`} alt=''/>
      </div>

      <div className={styles.text} style={{color: textColor}}>
        {textContent}
        </div>

      <div className={styles.icon2}>
      </div>
    </div>
  )
}

export default Button