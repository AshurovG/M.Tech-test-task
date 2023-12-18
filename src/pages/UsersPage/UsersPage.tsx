import React from 'react'
import styles from './UsersPage.module.scss'
import { useFileData } from 'slices/MainSlice'
import Table from 'components/Table'

const UsersPage = () => {
  const fileData = useFileData()

  React.useEffect(() => {
    console.log(fileData)
  }, [])
  return (
    <div>
        <Table></Table>
    </div>
  )
}

export default UsersPage