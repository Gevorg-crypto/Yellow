import React, {useState} from 'react';
import {handlerAddJog} from "../Store/Action";

function FormModal({setModalIsTrue,setJogs}:{setModalIsTrue:any,setJogs:any}) {
    const [values, setValues] = useState({
        distance:0,
        time:0,
        date:'',
    })
    const handlerSave = ()=>{
        handlerAddJog(values).then(data=>console.log(data))

        setModalIsTrue(false)
    }
    return (
        <div className="flex flex-col justify-center rounded-xl  bg-green-800 m-8 p-7">
            <div className="flex justify-end" onClick={()=>setModalIsTrue(false)}>
                <img src="/images/cancel.png" alt=""/>
            </div>
            <form action="" className="flex flex-col justify-center">
                <div className="pt-3">
                    <label htmlFor="" className="text-sm">Distance</label>
                    <input type="number" onChange={(event)=>{
                        values.distance = Number(event.target.value);
                        setValues(values)
                    }} className="rounded border w-full"/>
                </div>
                <div className="pt-3">
                    <label htmlFor="" className="text-sm">Time</label>
                    <input type="number" onChange={(event)=>{
                        values.time = Number(event.target.value);
                        setValues(values)
                    }} className="rounded border w-full"/>
                </div>
                <div className="pt-3">
                    <label htmlFor="" className="text-sm">Date</label>
                    <input type="date" onChange={(event)=>{
                        values.date = event.target.value;
                        setValues(values)
                    }} className="rounded border w-full"/>
                </div>
            </form>
            <div className="flex justify-center mt-5">
                <button onClick={()=>handlerSave()}
                    className="py-2 w-full rounded-full border-2  border-white text-white">Save</button>
            </div>
        </div>
    );
}

export default FormModal;
