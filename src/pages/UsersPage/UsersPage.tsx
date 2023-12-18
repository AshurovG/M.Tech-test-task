import React from 'react'
import styles from './UsersPage.module.scss'
import { useFileData } from 'slices/MainSlice'
import Table from 'components/Table'
import Button from 'components/Button'

const UsersPage = () => {
  const fileData = useFileData()

  React.useEffect(() => {
    console.log(fileData)
  }, [])
  return (
    <div className={styles.users__page}>
        <div className={styles['users__page-header']}>
          <Button className={styles['users__page-btn']}>Загрузить новый файл</Button>
        </div>
        <Table className={styles['users__page-table']}/>
    </div>
  )
}

export default UsersPage