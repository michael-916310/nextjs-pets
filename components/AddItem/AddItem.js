import {useRef} from "react";
import Image from 'next/image';
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
        <section className={styles.container}>
            <label className={styles.label}>
                new item to list:           
            </label>                
            <input ref={ref}  type="text" className={styles.input}/>      


            <button onClick={handleAdd} className={styles.button}> 
                <Image src="/images/add.png" width="16" height="16"></Image>
            </button>
        </section>
    )
}