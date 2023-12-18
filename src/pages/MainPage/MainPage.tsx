import { motion, AnimatePresence } from "framer-motion";
import styles from './MainPage.module.scss'
import ModalWindow from 'components/ModalWindow'
import ErrorWindow from 'components/ErrorWindow'
import { useIsFileValid } from 'slices/MainSlice'

const MainPage = () => {
  const isFileValid = useIsFileValid();

  return (
    <div className={styles.main__page}>
      <ModalWindow className={styles['main__page-modal']}/>
      <AnimatePresence>
        {!isFileValid && (
            <motion.div
            initial={{ opacity: 0, y: -35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -35 }}
            transition={{ duration: 0.3 }}
            style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)"

            }}
            >
            <ErrorWindow/>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MainPage