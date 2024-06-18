import React from 'react'
import styles from './Testimonial.module.css'

function Testimonial() {
  return (
    <div className={styles.testi_con}>
        <h3 className={styles.testi_title}> Testimonials </h3>
        <div className={styles.testi_list}>
            <div className={styles.testi_items}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />           
                <h4> John Doe </h4>
                <p className={styles.bio}> Web Developer</p>
            </div>

            <div className={styles.testi_items}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h4> Joe Doe </h4>
                <p className={styles.bio}> Web Developer</p>
            </div>

            <div className={styles.testi_items}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                <img src="https://images.unsplash.com/photo-1567784177951-6fa58317e16b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h4> Joan Doe </h4>
                <p className={styles.bio}> Web Developer</p>
            </div>
        </div>
      
    </div>
  )
}

export default Testimonial
