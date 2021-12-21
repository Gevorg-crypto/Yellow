import React, {useState} from 'react';
import FormModal from "../../components/FormModal";
import Empty from "../../components/account/Empty";
import Items from '../../components/account/Items';

function index() {
    const [modalIsTrue, setModalIsTrue] = useState(true)
    return (
        <div className='h-100 w-full flex flex-col items-center justify-center'>
            {/*{modalIsTrue ?*/}
            {/*    <FormModal setModalIsTrue={setModalIsTrue}/> */}
            {/*: <Empty setModalIsTrue={setModalIsTrue}/>}*/}
            <Items/>
            <div className="fixed bottom-6 right-6">
                <img src="/images/add.png" alt=""/>
            </div>
        </div>
    );
}

export default index;
