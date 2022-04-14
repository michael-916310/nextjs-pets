import {useState} from "react";

import AddItem from '../AddItem/AddItem';
import List from  './../TodoList/TodoList';


import styles from './TodoPage.module.css';

export default function TodoList() {
    const [items, setItems] = useState([
        { id: 0, name: 'item 1', isCompleted: false },
        { id: 1, name: 'item 2', isCompleted: true },
    ]);

    const addItem = (item) => {
        setItems([
            ...items,
            {
                id:items.length,
                name: item.name,
                isCompleted: false,
            }
        ]);
    }

    const handleDelete = (id) => {
        setItems(items.filter((el) => {
            return el.id != id;
        }))
    }

    const handleSwitch = (id) => {
        setItems(items.map((el) => {
            if (el.id === id) {
                el.isCompleted = !el.isCompleted ;
            }
            return el;
        }))
    }

    return (
        <article className={styles.container}>
            <AddItem addItem={addItem}/>
            <List 
                items = {items} 
                handleDelete = {handleDelete} 
                handleSwitch = {handleSwitch}
            />
         </article>
    )
}