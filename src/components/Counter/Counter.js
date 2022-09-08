import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const onIncrease = () => {
        setCount(count + 1);
    }

    const onDecrease = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <p>
                Hello Suparna!
            </p>
            <p data-testid="count">
                You clicked the button {count} times.
            </p>
            <div>
                <button data-testid="increment" onClick={onIncrease}>Increase +</button>
                <button data-testid="decrement" onClick={onDecrease}>Decrease -</button>
            </div>
        </div>
    );
}

export default Counter;