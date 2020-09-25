import React from 'react';
import "./App.css";

let Array = [];

for (let i=1;i<=100;i++) {
    if (i%2===0 && i%5===0) {
        console.log("FizzBuzz")
        Array.push(<div>FizzBuzz</div>)
    } else if (i%2===0) {
        console.log("Fizz")
        Array.push(<div>Fizz</div>)
    } else if (i%5===0) {
        console.log("Buzz")
        Array.push(<div>Buzz</div>)
    } else {
        console.log(i)
        Array.push(<div>{i}</div>)
    }
}

function App() {
    return (
        <div>{Array}</div>
    );
}

export default App;
