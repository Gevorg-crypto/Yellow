import React from 'react';

function FormModal({setModalIsTrue}:{setModalIsTrue:any}) {
    return (
        <div className="flex flex-col justify-center rounded-xl  bg-green-800 m-8 p-7">
            <div className="flex justify-end" onClick={()=>setModalIsTrue(false)}>
                <img src="/images/cancel.png" alt=""/>
            </div>
            <form action="" className="flex flex-col justify-center">
                <div className="pt-3">
                    <label htmlFor="" className="text-sm">Distance</label>
                    <input type="text" className="rounded border w-full"/>
                </div>
                <div className="pt-3">
                    <label htmlFor="" className="text-sm">Time</label>
                    <input type="text" className="rounded border w-full"/>
                </div>
                <div className="pt-3">
                    <label htmlFor="" className="text-sm">Date</label>
                    <input type="text" className="rounded border w-full"/>
                </div>
            </form>
            <div className="flex justify-center mt-5">
                <button className="py-2 w-full rounded-full border-2  border-white text-white">Let me in</button>
            </div>
        </div>
    );
}

export default FormModal;
