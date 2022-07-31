import React ,{useState}from 'react'
import styles from './Productdetails.module.css'

function Productdetails() {
    const product = 
          {
            id: "1",
            title: "Nike Shoes",
            src: [
                "/images/Productdefail_Image/1.jpg",
                "/images/Productdefail_Image/2.jpg",
                "/images/Productdefail_Image/3.jpg",
                "/images/Productdefail_Image/4.jpg",
              ],
            description: "UI/UX designing, html css tutorials",
            content: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            price: 230000,
          }
    const [bigImage,setBigImage] = useState(product.src[0])
    
  return (
        <div className={styles.container}>
            <div className={styles.Productdetails}>
                <div className={styles.bigImage}>
                    <img src={bigImage} alt=''/>
                </div>
                <div className={styles.productInfor}>
                    <div className={styles.productTitle}>
                        <h2>{product.title}</h2>
                        <span>{`${product.price} VND`}</span>
                    </div>
                    <p>{product.description}</p>
                    <p>{product.content}</p>
                    <div className={styles.listImages}>{
                        product.src.map((imageUrl,index) => (
                            <img key={index} className={styles.smallImages}
                            src={imageUrl} alt='' onClick={()=> setBigImage(imageUrl)}/>
                        ))
                    }</div>
                    <button className={styles.cart}>Add to cart</button>
                </div>
            </div>
        </div>
  )
}

export default Productdetails