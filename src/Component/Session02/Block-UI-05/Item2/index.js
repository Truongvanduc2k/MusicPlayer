import React from 'react'
import styles from './Item2.module.css'
import {CgMail} from 'react-icons/cg'

function Item2({nameInfor="EMAIL ID" , srcIcon=<CgMail/> , infor='robot12@gmail.com', backgColor= 'rgb(247, 83, 84)',}) {
  return (
    <div className={styles.Item2} style={{backgroundColor: backgColor}}>
      <div className={styles.name}>{nameInfor}</div>
      <div className={styles.field}>
        <div className={styles.srcImg}>{srcIcon}</div>
        <div>{infor}</div>
      </div>
    </div>
  )
}

export default Item2