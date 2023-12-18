import React, { useState ,useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Papa, { ParseResult } from 'papaparse';
import cn from 'classnames'
import styles from './ModalWindow.module.scss'
import Button from 'components/Button'
import { useDispatch } from 'react-redux';
import { useFileData, setFileDataAction } from 'slices/MainSlice';

export type ModalWindowProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
};

const ModalWindow: React.FC<ModalWindowProps> = ({className}) => {
    const dispatch = useDispatch();
    const fileData = useFileData();
    const fileInputRef = useRef<HTMLInputElement>(null);
    // const [fileData, setFileData] = React.useState<any>([]);
    const navigate = useNavigate();
   
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     const file = event.target.files?.[0];
     if (file) {
        Papa.parse(file, {
            encoding: 'Windows-1251',
            complete: function(results: Papa.ParseResult<any>) {
              console.log('Finished:', results.data);
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