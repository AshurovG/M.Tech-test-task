import React from 'react'
import styles from './ErrorWindow.module.scss'

const ErrorWindow = () => {
  return (
    <div className={styles.error__window}>
        <h4 className={styles['error__window-title']}>
            Неправильный формат файла, разрешены только файлы .CSV
        </h4>
    </div>
  )
}

export default ErrorWindow