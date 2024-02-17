import { useState } from "react";


const Count = () => {
    const [count, setCount] = useState(1);
    const handleSum = ()=>{
        setCount(count + 1);
    }

    const handleDecrement = ()=>{
        if(count === 1){
             return;
        }
        setCount(count - 1)
    }
    return (
        <div className='border flex items-center justify-between w-28 '>
            <button onClick={handleDecrement} className='border-r py-2 px-3 bg-gray-400'>-</button>
            <span id="count" className='px-3'>{count}</span>
            <button onClick={handleSum} className='border-r py-2 px-3 bg-gray-400'>+</button>
        </div>
    );
};

export default Count;