import styles from './MainPage.module.scss'
import ModalWindow from 'components/ModalWindow'
import ErrorWindow from 'components/ErrorWindow'
import { useIsFileValid } from 'slices/MainSlice'

const MainPage = () => {
  const isFileValid = useIsFileValid();

  return (
    <div className={styles.main__page}>
        {!isFileValid && <ErrorWindow/>}
        <ModalWindow className={styles['main__page-modal']}/>
    </div>
  )
}

export default MainPage