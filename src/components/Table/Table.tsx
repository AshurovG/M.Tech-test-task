import React from 'react'
import styles from './Table.module.scss'
import { useFileData } from 'slices/MainSlice'
import cn from 'classnames'

export type TableProps = {
    className?: string;
};

const headerItems = ['Имя', 'Номер телефона', 'Email', 'Дата рождения', 'Адрес'];

const Table: React.FC<TableProps> = ({className}) => {
    const fileData = useFileData()

    return (
        <table className={cn(styles.table, className)}>
            <thead className={styles.table__header}>
            <tr className={styles['table__header-items']}>
                {fileData && fileData[0].map((_, index) => (
                    <th key={index} className={styles['table__header-item']}>{headerItems[index]}</th>
                ))}
            </tr>
            </thead>
            
            <tbody>
                {fileData?.slice(1).map((row, index) => (
                <tr className={styles['table__body-row']} key={index}>
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