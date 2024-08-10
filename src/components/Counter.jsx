import React, { useState } from 'react'; // for useState function
import { toast } from 'react-toastify';

const Counter = () => {
    const [counter, setCounter] = useState(0); // state variable declaration

    const add = () => {
        if (counter < 4) {
            setCounter(counter + 1);
        } else {
            toast.warning("You cannot add more");
        }
    };

    const minus = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        } else {
            toast.warning("You cannot subtract more");
        }
    };

    return (
        <div style={{ fontSize: "30px", textAlign: "center" }}>
         
            <button className='minus' onClick={minus}>-</button>
            {counter}
            <button className='plus' onClick={add}>+</button>
            {counter===3 ?<h1>counter value is 3</h1>:null}
        </div>
    );
};

export default Counter;
