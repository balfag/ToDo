"use client"
import {forwardRef, useImperativeHandle, useState} from "react";
import ToDoNode from "@/app/components/ToDo";

const ToDoList = forwardRef(
    function ToDoList(props, ref) {
        useImperativeHandle(ref, ()=>{
            return {AddToDo}
        })
        const [ToDoList, ChangeToDoList] = useState([])

        function AddToDo(ToDo){
            console.log(ToDo)
            ChangeToDoList([ToDo, ...ToDoList])
        }
        function DeleteToDo(id){
            ToDoList.slice(id - 1, 1)
        }
        function CompleteToDo(id){
            console.log(ToDoList[id] + ": Completed")
        }
        function EditToDo(id){
            console.log(ToDoList[id] + ": Edited")
            //fetch to backend to edit in database
        }

        return (
            <div className={props.styles.ToDoList}>
                {ToDoList.map((e,i)=>{
                    return <ToDoNode id={i} key={i} styles={props.styles} Complete={CompleteToDo} Delete={DeleteToDo} Edit={EditToDo} ToDo={e}/>
                })}
            </div>
        );
    }
)

export default ToDoList
