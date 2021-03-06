import TodoItem from './../TodoItem/TodoItem';
import styles from './TodoList.module.css';

export default function TodoList({
  items, 
  handleDelete, 
  handleSwitch, 
  handleTextChange
}) {
  
  return (
      <section className={styles.container}>
        {
          items.map((el) => {
            return (
                <TodoItem
                    key={el.id}
                    item={el}
                    onDelete={handleDelete}
                    onSwitch={handleSwitch}
                    onTextChanged={handleTextChange}
                    />
            )}) 
        }
      </section>
    )
};
