import {useRef} from "react";
import Image from 'next/image';
import ReactTooltip from 'react-tooltip';

import styles from './AddItem.module.css';

export default function AddItem({addItem}) {
    const ref = useRef();
    const handleAdd = () => {
        if (ref.current.value) {
            addItem({
                id: 100, name: ref.current.value, isCompleted: false,
            })
            ref.current.value='';
        }
    };

    return (
        <>
        <ReactTooltip />        
        <section className={styles.container}>
            <div className={styles.controls}>
                <label className={styles.label}>
                    Please enter description of new task
                </label>     
                <button 
                    onClick={handleAdd} 
                    className={styles.button} 
                    tabIndex="2"
                    data-tip="add new item"
                    data-type="info"
                > 
                    <Image src="/images/add.png" width="16" height="16"></Image>
                </button>                       
            </div>
            <textarea 
                ref={ref} 
                className={styles.textarea} 
                rows ="2"
                tabIndex="1"
            />            
        </section>

        </>            
    )
}