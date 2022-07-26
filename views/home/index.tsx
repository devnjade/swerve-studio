import Layout from "layout";
import React from "react";
import styles from './index.module.scss';
import Image from "next/image";

const HomeView: React.FC = () => {
  return (
    <Layout header>
      <section className={styles.intro}>
        <div className={styles.box}>
          <div className={styles.text}>
            <p className={styles.header}>⚔︎Expose your creative side with swerve studio⚔︎</p>
          </div>
          <div className={styles.links}>
            <button><span>shoot</span></button>
            <button><span>twitter</span></button>
            <button><span>insta</span></button>
            <button><span>mail</span></button>
          </div>
        </div>
      </section>
      <section className={styles.action}>
        <div className={styles.wrap}>
          <p>✴︎lets help you build what&rsquo;s on your mind and push, idealize, bring to realizm your inner imagination to a digital world✴︎</p>
          <p>✴︎We at swerve do a range of things digitally, from web, mobile, vr, ar, xr, game development and also web3!✴︎</p>
        </div>
        <div className={styles.cards}>
          <div className={`${styles.card} ${styles['card--first']}`}>
            <Image 
              src="https://res.cloudinary.com/dudhmrdin/image/upload/v1636919264/image_9_zc7up5.png" 
              alt="mock"
              width={`100%`}
              height={`100%`}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className={`${styles.card} ${styles['card--second']}`}>
            <Image 
              src="https://res.cloudinary.com/dudhmrdin/image/upload/v1636919264/image_9_zc7up5.png" 
              alt="mock"
              width={`100%`}
              height={`100%`}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className={`${styles.card} ${styles['card--third']}`}>
            <Image 
              src="https://res.cloudinary.com/dudhmrdin/image/upload/v1636919264/image_9_zc7up5.png" 
              alt="mock"
              width={`100%`}
              height={`100%`}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HomeView;