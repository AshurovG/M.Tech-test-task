import { useNavigate } from 'react-router-dom'
import styles from './UsersPage.module.scss'
import { useDispatch } from 'react-redux'
import { setFileDataAction } from 'slices/MainSlice'
import Table from 'components/Table'
import Button from 'components/Button'

const UsersPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUploadButtonClick = () => {
    dispatch(setFileDataAction(null))
    localStorage.removeItem('data');
    navigate('/');
  }
  return (
    <div className={styles.users__page}>
        <div className={styles['users__page-header']}>
          <Button className={styles['users__page-btn']} onClick={handleUploadButtonClick}>Загрузить новый файл</Button>
        </div>
        <Table className={styles['users__page-table']}/>
    </div>
  )
}

export default UsersPage