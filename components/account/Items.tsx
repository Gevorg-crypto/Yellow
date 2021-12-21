import React from 'react';

function Items({items}: any) {
    return (
        <div className="w-full">
            <div className="flex w-full justify-around py-5 border-b">
                <div>
                    <img src="/images/icon.png" alt=""/>
                </div>
                <div>
                    <p className="text-gray-500">
                        20.12.2017
                    </p>
                    <p className="text-gray-500">
                        <span className="text-black">Speed: </span>15
                    </p>
                    <p className="text-gray-500">
                        <span className="text-black">Distance: </span>10 km
                    </p>
                    <p className="text-gray-500">
                        <span className="text-black">Time: </span>60 min
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Items;
