import React from 'react';

function TodoClick() {

    const [clickValue, setClickValue] = React.useState(0);

    return (
        <>
            <p>
                Diste Click {clickValue}
            </p>
            <button onClick={() => {
                setClickValue(prevClickValue => prevClickValue + 1);
            }}>
                Click me
            </button>
        </>
    )
}

export { TodoClick };