"use client"

import {useState} from "react";

export default function ToDoTools({styles, Add}) {

    const [ToDoInput, ToDoInputChange] = useState('')

    function AddButtonClick(){
        Add(ToDoInput)
        ToDoInputChange('')
    }

    function ToDoInputNodeChange(e){
        ToDoInputChange(e.target.value)
    }

    return (
        <div className={styles.ToDoTools}>
            <input onChange={ToDoInputNodeChange} className={styles.ToDoInput} value={ToDoInput}/>
            <button onClick={AddButtonClick} className={styles.ToDoCreate}><img src={"Add.png"}/></button>
        </div>
    );
}
