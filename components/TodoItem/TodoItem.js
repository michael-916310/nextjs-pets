import {useState, useRef} from "react";
import cn from 'classnames'
import Image from 'next/image';

import ReactTooltip from 'react-tooltip';

import styles from './TodoItem.module.css';

export default function TodoItem({item, onSwitch, onDelete, onTextChanged}) {
  const [isEdit, setIsEdit] = useState(false);
  const ref = useRef();

  const handleDelete = () =>{
    onDelete(item.id)
  }

  return (
    <section className={styles.container}>

      <ReactTooltip />     
      <div className={styles.leftContent}>
        <button 
            className={styles.button} 
            onClick={()=>{onSwitch(item.id)}}
            disabled ={isEdit}
            data-tip={item.isCompleted ? 'reopen item': 'close item'}
            data-type={item.isCompleted ? 'warning': 'success'}
          >
              { item.isCompleted ? 
                  <Image src="/images/undo.png" height="16" width="16"/>: 
                  <Image src="/images/check-mark.png" height="16" width="16"/>
              }
          </button>
        <div className={cn({[styles.crossed]: item.isCompleted}, styles.textContainer)}>
          {isEdit?
            (<textarea 
                ref = {ref}
                defaultValue={item.name} 
                className={styles.textarea}
                placeholder="item description"
                rows="5"
            />) : item.name
          }
        </div>
      </div>

      <div className={styles.btnContainer}>
        <button 
          className={styles.button} 
          disabled={item.isCompleted}
          onClick={() => {
            if (isEdit && ref.current.value!==item.name) {
              onTextChanged(item.id, ref.current.value)
            }
            setIsEdit(!isEdit)
          }} 
          data-tip={isEdit? 'save text' : 'edit text'}
          data-type="info">
            {isEdit ? 
              <Image src="/images/floppy-disk.png" height="16" width="16"/>
              : <Image src="/images/editing.png" height="16" width="16"/>
            }
        </button>        
        <button 
          className={styles.button} 
          disabled ={isEdit}
          onClick={handleDelete} 
          data-tip="delete item from list"
          data-type="error">
            <Image src="/images/trash.png" height="16" width="16"/>
        </button>
      </div>
    </section>
  )
}