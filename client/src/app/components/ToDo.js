"use client"
import {useRef, useState} from "react";

export default function ToDoNode({styles, id, Complete, Edit, Delete, ToDo}) {
    console.log(id + " :a: " + ToDo)
    const [ToDoNote, ToDoNoteChange] = useState(ToDo)
    console.log(id + " :b: " + ToDoNote)
    const [ToDoNoteEditInput, ToDoNoteEditInputChange] = useState(ToDo)
    console.log(id + " :c: " + ToDoNoteEditInput)

    const ToDoNoteEditInputRef = useRef(null)
    const ToDoRef = useRef(null)

    function CompleteToDo(){
        Complete(id)
    }

    function DeleteToDo(){
        Delete(id)
    }

    function EditToDo(){
        ToDoNoteEditInputRef.current.style.display = "flex"
        ToDoNoteEditInputRef.current.focus()
        ToDoRef.current.style.display = "none"
    }
    function ToDoEditInputNodeChange(e){
        ToDoNoteEditInputChange(ToDoNoteEditInputRef.current.value)
    }
    function ToDoEditInputKeyPress(e){
        if(e.key == "Enter"){
            e.target.blur()
        }
    }
    function ToDoEditInputFocus(){
        ToDoNoteEditInputRef.current.style.display = "none"
        ToDoRef.current.style.display = "block"
        ToDoEditInputChange()
    }
    function ToDoEditInputChange(){
        if(ToDoNoteEditInput == ''){
            ToDoNoteEditInputChange(ToDoNote)
            return
        }
        if(ToDoNoteEditInput != ToDoNote){
            ToDoNoteChange(ToDoNoteEditInput)
            Edit(id)
        }
    }
    return (
        <div id={id} className={styles.ToDoContainer}>
            <p ref={ToDoRef} className={styles.ToDo}>{ToDoNote}</p>
            <input ref={ToDoNoteEditInputRef} onChange={ToDoEditInputNodeChange} onKeyDown={ToDoEditInputKeyPress} onBlur={ToDoEditInputFocus} className={styles.ToDoEditInput} value={ToDoNoteEditInput}/>
            <div className={styles.ToDoControls}>
                <button onClick={CompleteToDo} className={styles.ToDoComplete}><img src={"Complete.png"} /></button>
                <button onClick={EditToDo} className={styles.ToDoEdit}><img src={"Edit.png"}/></button>
                <button onClick={DeleteToDo} className={styles.ToDoDelete}><img src={"Delete.png"}/></button>
            </div>
        </div>
    );
}
