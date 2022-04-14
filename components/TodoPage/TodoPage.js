import {useState, useEffect} from "react";

import AddItem from '../AddItem/AddItem';
import List from  './../TodoList/TodoList';


import styles from './TodoPage.module.css';

export default function TodoList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const loadList = async () => {
            const result = await fetch('/data/initialToDoList.json');
            const json = await result.json();
            setItems(json);
        };

        try {
            loadList();
        } catch (e) {

        }
    }, []);

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

    const handleTextChange = (id, newText) => {
        setItems(items.map((el) => {
            if (el.id === id) {
                return {...el, name: newText}
            }
            return el;
        }));
    }

    return (
        <article className={styles.container}>
            <AddItem addItem={addItem}/>
            <List 
                items = {items} 
                handleDelete = {handleDelete} 
                handleSwitch = {handleSwitch}
                handleTextChange = {handleTextChange}
            />
         </article>
    )
}