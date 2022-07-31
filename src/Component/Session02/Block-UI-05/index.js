import React from 'react'
import styles from './Block-UI-05.module.css'
import Item1 from './Item1';
import Item2 from './Item2';
//icon Item1
import {FaBirthdayCake} from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'
import {FaUserGraduate} from 'react-icons/fa'
import {MdLocationPin} from 'react-icons/md'
//icon Item2
import {CgMail} from 'react-icons/cg'
import {BsFillTelephoneFill} from 'react-icons/bs'

function BlockUI05({
  srcImage='1.PNG',
  namePeople='ROBORT PATTISION',
  location='Developing',
  bob='23/05/2014',
  bg='B+',
  edu='MCA',
  res='Bangalore',
  email='robot12@gmail.com',
  phone='8665543219',
  color1='#f75354',
  color2='#51d567',
}) {
  return (
    <div className={styles.block}>
      <div className={styles.card}>
        <img src={`/images/session02/BlockUI05/${srcImage}`} alt=''/>
        <div className={styles.name}>
          <h3 className={styles.namePeople}>{namePeople}</h3>
          <p className={styles.location}>{location}</p>
        </div>
        <div>
          <Item1 srcIcon= {<FaBirthdayCake/>} nameIfor='DOB' infor={bob}/>
          <Item1 srcIcon= {<AiFillHeart/>} nameIfor='BG' infor={bg}/>
          <Item1 srcIcon= {<FaUserGraduate/>} nameIfor='EDU' infor={edu} />
          <Item1 srcIcon= {<MdLocationPin/>} nameIfor='RES' infor={res} />
        </div>
        <Item2 nameInfor='EMAIL ID' srcIcon={<CgMail/>} infor={email} backgColor={color1} />
        <Item2 nameInfor='PHONE NO' srcIcon={<BsFillTelephoneFill/>} infor={phone} backgColor={color2}/>
     </div>
    </div>
  )
}

export default BlockUI05