import React from 'react'
import styles from "./Block-UI-06.module.css"

function BlockUI06({
  prodImage = "1.jpg",
  prodName = "EODEM MODO TYPI",
  prodDescribe ='Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  price = '25'


}) {
  return (
    <div className={styles.item}>
      <img className={styles.images} src={`/images/session02/BlockUI06/${prodImage}`} alt=''/>
      <h3>{prodName}</h3> 
      <div className={styles.describe}>{prodDescribe}</div>
      <div className={styles.option}>
        <div>XL/XXL/S</div>
        <h2>${price}</h2>
        <button className={styles.add}>
          <img src='/images/session02/BlockUI06/add.png' alt=''/>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default BlockUI06