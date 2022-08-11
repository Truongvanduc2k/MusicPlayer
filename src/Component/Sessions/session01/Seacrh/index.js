import React from 'react';
import styles from './Search.module.css';

function Search({
  toggle ='',
  textHolder = '',
  textColor = '',
  weightText = '',
  toggle2 = '',
  imgName = ''
}) {
  
  return (
    <div className={styles.search}>

      <div className={styles.icon} style={{display : toggle}}>
        <img src='/images/search.png' alt=''/>
      </div>

      <input className={styles.input} placeholder={textHolder} 
      style={{color: textColor , fontWeight: weightText
      }} ></input>

      <div className={styles.icon2} style={{display : toggle2}}>
        <img src={`/images/${imgName}.png`} alt=''/>
      </div>

    </div>
  )
}

export default Search