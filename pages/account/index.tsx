import React, {useEffect, useState} from 'react';
import FormModal from "../../components/FormModal";
import Empty from "../../components/account/Empty";
import Items from '../../components/account/Items';
import {handlerGetJogs} from "../../Store/Action";

function index() {
    const [modalIsTrue, setModalIsTrue] = useState(false)
    const [jogs, setJogs] = useState([]);
    useEffect(() => {
        handlerGetJogs().then(data => {
            setJogs(data.response.jogs)
        })
    }, [])
    console.log(jogs)
    return (
        <div className='h-100 w-full flex flex-col items-center justify-center'>
            {modalIsTrue ?
                <FormModal setModalIsTrue={setModalIsTrue} setJogs={setJogs}/>
                : jogs.length > 0 ? (<><Items items={jogs}/>
                    <div className="fixed bottom-6 right-6" onClick={() => setModalIsTrue(true)}>
                        <img src="/images/add.png" alt=""/>
                    </div>
                </>) : <Empty setModalIsTrue={setModalIsTrue}/>}

        </div>
    );
}

export default index;
