import React from 'react'
import cn from 'classnames'
import styles from './ModalWindow.module.scss'
import Button from 'components/Button'

export type ModalWindowProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
};

const ModalWindow: React.FC<ModalWindowProps> = ({className}) => {
  return (
    <div className={cn(styles.modal__window, className)}>
        <h3 className={styles['modal__window-title']}>
            Выберите файл в формате CSV
        </h3>
        <Button className={styles['modal__window-btn']}>Выберите файл</Button>
    </div>
  )
}

export default ModalWindow