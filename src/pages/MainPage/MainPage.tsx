import React from 'react'
import styles from './MainPage.module.scss'
import ModalWindow from 'components/ModalWindow'

const MainPage = () => {
  return (
    <div className={styles.main__page}>
        <ModalWindow className={styles['main__page-modal']}/>
    </div>
  )
}

export default MainPage