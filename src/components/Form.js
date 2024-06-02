import React, { useState } from 'react'
import styles from './form.module.css';


export default function Form({ todos, setTodos}) {
    const [todo, setTodo] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        //adds the todo in the list of the[todoS]
        setTodos([...todos, todo]);
        //clears the input box        
        setTodo('')
    }
    return (
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
                <input
                    className={styles.modernInput}
                    type="text"
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                    placeholder='Tasks to Complete'
                />
                <button
                    className={styles.modernButton}
                    type='submit'>Add</button>
            </div>
        </form>
    );
}
