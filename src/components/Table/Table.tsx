import React from 'react'
import styles from './Table.module.scss'
import { useFileData } from 'slices/MainSlice'

const Table = () => {
    const fileData = useFileData()

    return (
        <table className={styles.table}>
        <thead className={styles.table__header}>  {/*К сожалению, здесь с файла приходят заголовки на английском
        в отличие от макета, и поле day почему то приходит как  "bday" :-)*/}
            <tr className={styles['table__header-items']}>
                {fileData && fileData[0].map((item, index) => (
                    <th key={index} className={styles['table__header-item']}>{item}</th>
                ))}
            </tr>
        </thead>


        <tbody>
            {fileData?.slice(1).map((row, index) => (
            <tr key={index}>
                <td className={styles['table__body-item']}>{row[0]}</td>
                <td className={styles['table__body-item']}>{row[1]}</td>
                <td className={styles['table__body-item']}>{row[2]}</td>
                <td className={styles['table__body-item']}>{row[3]}</td>
                <td className={styles['table__body-item']}>{row[4]}</td>
            </tr>
            ))}
        </tbody>
        </table>
    )
}

export default Table