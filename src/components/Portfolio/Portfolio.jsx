import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

function Portfolio() {
  return (
    <div className={styles.port_con}>
        <h3 className={styles.port_title}> Portfolio </h3>
        <div className={styles.port_list}>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p>Project Title</p>
                </Tilt>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p>Project Title</p>
                </Tilt>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p>Project Title</p>
                </Tilt>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p>Project Title</p>
                </Tilt>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p>Project Title</p>
                </Tilt>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p>Project Title</p>
                </Tilt>
            </div>
        </div>
      
    </div>
  )
}

export default Portfolio
