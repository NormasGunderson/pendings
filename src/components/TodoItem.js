import styles from './todoitem.module.css'


export default function TodoItem({ item, todos, setTodos }) {
    function handelDelete(item) {
        console.log('you delete item', item);
        setTodos(todos.filter((todo) => todo !== item));
    }
    return (
        <div className={styles.item}>
            <div className={styles.itemName}> 
            {item}
            <span>
                <button onClick={() => handelDelete(item)}
                className={styles.deleteButton}>Done</button>
            </span>
            <hr className={styles.line} />
            </div>
        </div>
    )
}

