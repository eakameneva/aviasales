import React from 'react'

import styles from './Tabs.module.scss'

export default function Tabs() {
  return (
    <div className={styles['button-container']}>
      <button type='button' className={`${styles.button} ${styles.chosen}`}>
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button type='button' className={styles.button}>
        САМЫЙ БЫСТРЫЙ
      </button>
      <button type='button' className={styles.button}>
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  )
}
