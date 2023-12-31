import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Papa from 'papaparse';
import cn from 'classnames'
import styles from './ModalWindow.module.scss'
import Button from 'components/Button'
import { useDispatch } from 'react-redux';
import { setFileDataAction, setIsFileValidAction } from 'slices/MainSlice';

export type ModalWindowProps = {
    className?: string;
};

const ModalWindow: React.FC<ModalWindowProps> = ({className}) => {
    const dispatch = useDispatch();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
   
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     const file = event.target.files?.[0];
     if (file) {
        if (file.type !== 'text/csv') {
            dispatch(setIsFileValidAction(false))
            return;
        } else {
            dispatch(setIsFileValidAction(true))
        }
        Papa.parse(file, {
            encoding: 'Windows-1251',
            complete: function(results: Papa.ParseResult<any>) {
              dispatch(setFileDataAction(results.data));
              navigate('/users')
            }
        });
     }
    };
   
    const handleButtonClick = () => {
     fileInputRef.current?.click();
    };
   
    return (
        <div className={cn(styles.modal__window, className)}>
            <h3 className={styles['modal__window-title']}>
                Выберите файл в формате CSV
            </h3>
            <input type="file" accept=".csv" onChange={handleFileChange} ref={fileInputRef} style={{display: 'none'}} id="fileInput" />
            <Button onClick={handleButtonClick} className={styles['modal__window-btn']}>Выберите файл</Button>
        </div>
    )
   }

export default ModalWindow