import TodoItem from './TodoItem';
import styles from './todolist.module.css'

export default function TodoList({ todos }) {
  return (
    <div className={styles.list}> {/*creates the down list  */}
      {todos.map((item) => (
        <TodoItem key={item} item={item} todos={todos}/>
      ))}
    </div>
  );
}
