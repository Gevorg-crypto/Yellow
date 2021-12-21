import React from 'react';

function Empty({setModalIsTrue}:{setModalIsTrue:any}) {
    return (
        <>
            <div className="pt-10 pb-5">
                <img src="/images/sadRoundedSquareEmoticon.png" alt=""/>
            </div>
            <div>
                <p className="text-2xl text-gray-500">
                    Nothing is there
                </p>
            </div>
            <div className="h-64  flex items-end">
                <button className="px-10 py-3 rounded-full border-4  border-pink-800 text-pink-800"
                onClick={()=>setModalIsTrue(true)}>Create your jog first</button>
            </div>
        </>
    );
}

export default Empty;
