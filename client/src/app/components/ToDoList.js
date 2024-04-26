"use client"
import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import ToDoNode from "@/app/components/ToDo";
import CompletedToDoList from "@/app/components/CompletedToDoList.js";

const ToDoList = forwardRef(
    function ToDoList(props, ref) {
        useImperativeHandle(ref, ()=>{
            return {AddToDo}
        })
        const [ToDoList, ChangeToDoList] = useState([])

        const nullToDo = -1
        const [newToDo, setNewTodo] = useState('')
        const [DeleteToDo, setDeleteToDo] = useState(nullToDo)
        const [CompleteToDo, setCompleteToDo] = useState(nullToDo)
        const [EditToDo, setEditToDo] = useState(nullToDo)

        useEffect(()=>{
            if(newToDo != ''){
                ChangeToDoList([newToDo, ...ToDoList])
            }
            setNewTodo('')
        },[newToDo])

        useEffect(()=>{
            if(DeleteToDo != nullToDo){
                ChangeToDoList([...ToDoList.slice(0,DeleteToDo), ...ToDoList.slice(DeleteToDo+1,ToDoList.length)])
            }
            setDeleteToDo(nullToDo)
        },[DeleteToDo])

        useEffect(()=>{
            if(EditToDo != nullToDo){
                ChangeToDoList([...ToDoList.slice(0,EditToDo.id),EditToDo.newNote , ...ToDoList.slice(EditToDo.id+1,ToDoList.length)])
            }
            setEditToDo(nullToDo)
        },[EditToDo])

        function AddToDo(ToDo){
            setNewTodo(ToDo)
        }
        function deleteToDo(id){
            setDeleteToDo(id)
            //ToDoList.slice(id - 1, 1)
        }
        function completeToDo(id){
            setCompleteToDo(id)
        }
        function editToDo(ToDo){
            console.log(ToDo)
            setEditToDo(ToDo)
        }

        return (
            <>
                <div className={props.styles.ToDoList}>
                    {
                        ToDoList.length == 0 ? <p className={props.styles.noToDo}>No ToDo</p> :
                            ToDoList.map((e,i)=>{
                                return <ToDoNode id={i} key={i} styles={props.styles} Complete={completeToDo} Delete={deleteToDo} Edit={editToDo} ToDo={e}/>
                            })
                    }

                </div>
                <CompletedToDoList styles={props.styles} ToDos={[]}/>
            </>
        );
    }
)

export default ToDoList
