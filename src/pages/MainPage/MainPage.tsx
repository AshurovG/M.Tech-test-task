import styles from './MainPage.module.scss'
import ModalWindow from 'components/ModalWindow'
import ErrorWindow from 'components/ErrorWindow'

const MainPage = () => {
  return (
    <div className={styles.main__page}>
      <ErrorWindow></ErrorWindow>
        <ModalWindow className={styles['main__page-modal']}/>
    </div>
  )
}

export default MainPage