import {useRef} from "react";
import cn from 'classnames'
import Image from 'next/image';

import styles from './TodoItem.module.css';

export default function TodoItem({item, onSwitch, onDelete}) {
  return (
    <section className={styles.container}>
      <span className={cn({[styles.crossed]: item.isCompleted}, styles.text)}>{item.name}</span>

      <div className={styles.btnContainer}>
        <button className={styles.button} onClick={()=>{onSwitch(item.id)}}>
            { item.isCompleted ? 
                <Image src="/images/undo.png" height="16" width="16"/>: 
                <Image src="/images/check-mark.png" height="16" width="16"/>
            }
        </button>
        <button className={styles.button} onClick={() => {onDelete(item.id)}}>
            <Image src="/images/trash.png" height="16" width="16"/>
        </button>
      </div>
    </section>
  )
}