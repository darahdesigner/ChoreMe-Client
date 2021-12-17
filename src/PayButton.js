import React,{useState} from 'react'

const PayButton = (props) => {
    const [count, setCount] = useState(0);
    const [newCount, setNewCount] = useState(count);


    return (
        <div>
            <button onClick={() => {setCount(props.amount)
                console.log(count)
            }}>Pay</button>
        </div>
    )
}

export default PayButton
