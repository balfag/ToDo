"use client"
import styles from "./page.module.css";
import {useRef} from "react";
import ToDoTools from "@/app/components/ToDoTools";
import ToDoList from "@/app/components/ToDoList";

export default function Home() {
    const ref = useRef(null);
    function AddTodo(ToDo){
        ref.current.AddToDo(ToDo)
    }

    return (
        <main className={styles.main}>
            <ToDoTools styles={styles} Add={AddTodo}/>
            <ToDoList styles={styles} ref={ref}/>
        </main>
    );
}
