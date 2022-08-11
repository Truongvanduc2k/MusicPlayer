import React from 'react'
import styles from './Card.module.css'

function Card() {
  return (
    <div className={styles.cardLists}>

        <div className={styles.card1}>

            <img className={styles.image} src='/images/card1.png' alt='' />
            <div className={styles.text}>
                <h3>Yolanda</h3>
                <p>Web development</p>
            </div>
            <img className={styles.icon} src= '/images/camera.png' alt='camera-icon'/>

        </div>

        <div className={styles.card2}>
            <img className={styles.image} src='/images/avatar.png' alt='' />
            <div className={styles.text}>
                <h3>Maria</h3>
            </div>
            <img className={styles.icon} src= '/images/clarity_phone-handset-solid.png' alt='camera-icon'/></div>

        <div className={styles.card3}>
            <img className={styles.image} src='/images/card1.png' alt='' />
            <div className={styles.text}>
                <h3>Miriam Jimenez</h3>
            </div>
        </div>

        <div className={styles.card4}>
            <div className={styles.image}>
              <img className={styles.image} src='/images/avatar1.png' alt='' />
              <img className={styles.image} src='/images/avatar2.png' alt='' />
              <img className={styles.image} src='/images/avatar3.png' alt='' />
            </div>
            <div className={styles.text}>
                <h3>Team</h3>
                <p>Two currently</p>
            </div>
        </div>

        <div className={styles.card5}></div>

        <div className={styles.card6}></div>

        <div className={styles.card7}></div>

    </div>
  )
}

export default Card