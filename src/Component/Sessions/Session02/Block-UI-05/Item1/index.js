import React from 'react'
import styles from './Item1.module.css'
import {FaBirthdayCake} from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'
import {FaUserGraduate} from 'react-icons/fa'
import {MdLocationPin} from 'react-icons/md'



function Item1({  srcIcon=<FaBirthdayCake/>, nameIfor = 'DOB',infor = '23/5/2014',}) {
  return (
    <div className={styles.Item1}>
        <div className={styles.field}>{srcIcon}{nameIfor}</div>
        <div className={styles.infor}>{infor}</div>
    </div>
  )
}

export default Item1