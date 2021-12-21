import React, {useState} from 'react';

function Navbar() {
    const [filterIsTrue, setFilterIsTrue] = useState(false);
    return (
        <>
            <header className="w-full flex justify-between bg-green-800 items-center py-3 px-5">
                <div>
                    <img src="/images/logo.png" alt=""/>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div onClick={() => setFilterIsTrue(!filterIsTrue)}>
                    {!filterIsTrue ?
                        <img src="/images/filter.png" alt=""/> :
                        <img src="/images/filterActive.png" alt=""/>}
                </div>
                <div>
                    <img src="/images/menu.png" alt=""/>
                </div>
            </header>
            {filterIsTrue ? (<div className="bg-gray-100 flex p-3 justify-around">
                <div className="flex items-center">
                    <label htmlFor="" className="text-sm mr-1 text-gray-500 flex-auto">Date from</label>
                    <input type="text" className="rounded-lg w-20 border-2 border-gray-800"/>
                </div>
                <div className="flex items-center">
                    <label htmlFor="" className="text-sm mr-1 text-gray-500 flex-auto">Date to</label>
                    <input type="text" className="rounded-lg w-20 border-2 border-gray-800"/>
                </div>
            </div>) : ''}
        </>

    );
}

export default Navbar;
