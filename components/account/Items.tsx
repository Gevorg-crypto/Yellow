import React from 'react';
import FormModal from '../FormModal';
interface IItem {
    "id": number,
    "user_id": string,
    "distance": number,
    "time": number,
    "date": number
}

function Items({items}: { items:IItem[]}) {
    const handlerEdit = (item:IItem)=>{
        return (<FormModal item={item}/>);
    }
    return (
        <div className="w-full md:w-64">
            {items.map((item:IItem,index:number) => {
                const date = new Intl.DateTimeFormat('en-US',{day:'2-digit'})
                    .format(item.date*1000)+'.'+new Intl.DateTimeFormat('en-US',{month:'2-digit'})
                    .format(item.date*1000)+'.'+new Intl.DateTimeFormat('en-US',{year:'numeric'})
                    .format(item.date*1000);
                return (
                    <div className="flex w-full justify-around py-5 border-b" key={index}>
                        <div onClick={()=>handlerEdit(item)}>
                            <img src="/images/icon.png" alt=""/>
                        </div>
                        <div className="basis-44">
                            <p className="text-gray-500">
                                {date}
                            </p>
                            <p className="text-gray-500">
                                <span className="text-black">Speed: </span>{item.distance}
                            </p>
                            <p className="text-gray-500">
                                <span className="text-black">Distance: </span>{item.distance} km
                            </p>
                            <p className="text-gray-500">
                                <span className="text-black">Time: </span>{item.time} min
                            </p>
                        </div>

                    </div>
                )
            })}
        </div>
    );
}

export default Items;
