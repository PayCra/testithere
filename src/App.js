import React from 'react';
import "./App.css";

let myFavoriteCultivators = ['Lan Xichen','Jin Guangyao','Nie Huaisang','Wei Wuxian','Jiang Cheng']

let myAbsoluteFavoriteCultivators = myFavoriteCultivators.map(
    (element,index) =>
        <div key={"cultivator" + index}>
            {element}</div>)

console.log(myAbsoluteFavoriteCultivators[1].key)

function App() {
    return (
        <div>{myAbsoluteFavoriteCultivators}</div>
    );
}

export default App;