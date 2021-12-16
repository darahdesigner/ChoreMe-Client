import React,{useState} from 'react'

const PayButton = () => {
    const [count, setCount] = useState(0);
    const [newCount, setNewCount] = useState(count + newCount);


    return (
        <div>
            <button onClick={() => setCount()}>Amount</button>
        </div>
    )
}

export default PayButton
