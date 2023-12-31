import React, { useState } from "react";

const Counter = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <p>
                현재 카운트 값은 <b>{value}</b>
            </p>
            <button onClick={() => setValue(value + 1)}>1 증가</button>
            <button onClick={() => setValue(value - 1)}>1 감소</button>
        </div>
    );
};

export default Counter;