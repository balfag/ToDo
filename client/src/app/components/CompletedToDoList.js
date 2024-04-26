"use client"
import {useEffect, useRef, useState} from "react";

export default function CompletedToDoList({styles, ToDos}) {
    const CompletedToDoListRef = useRef(null)
    const [OpenCompletedToDoList, setOpenCompletedToDoList] = useState(false)

    useEffect(()=>{
        if(CompletedToDoListRef != null){
            if(OpenCompletedToDoList){
                CompletedToDoListRef.current.style.display = 'block'
            }
            else {
                CompletedToDoListRef.current.style.display = 'none'
            }
        }
    }, [OpenCompletedToDoList])

    function OpenCloseCompletedToDoList(){
        setOpenCompletedToDoList(!OpenCompletedToDoList)
    }
    return (
        <div>
            <p className={styles.CompletedToDoControl}>Completed {ToDos.length} <button onClick={OpenCloseCompletedToDoList} className={styles.CompletedToDoOCB}><img src={"arrow-down.png"}/></button></p>
            <div ref={CompletedToDoListRef} className={styles.CompletedToDoList}>
                {
                    ToDos.length == 0 ? <p className={styles.noToDo}>No completed ToDo</p> :
                        ToDos.map((e,i)=>{
                            return <p key={i}>{e}</p>
                        })
                }
            </div>
        </div>
    );
}
