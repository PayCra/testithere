import React from 'react';
import './App.css';

// mylinks:

// Make it Holy:
// https://youtu.be/rhJEAEeYmIM?list=PLCZ4SfWipa-oX7g7tWVw4SOQlpoORVRhY
//
// One:
// https://youtu.be/yPCVBWifC6U?list=PLCZ4SfWipa-oX7g7tWVw4SOQlpoORVRhY
//
// Dance:
// https://youtu.be/lEnzIF6iuJw?list=PLCZ4SfWipa-oX7g7tWVw4SOQlpoORVRhY


function App() {

    const onelink = <a href="https://youtu.be/yPCVBWifC6U?list=PLCZ4SfWipa-oX7g7tWVw4SOQlpoORVRhY" target="_blank">Song of a mysterious prince</a>;
    const twolink = <a href="https://youtu.be/lEnzIF6iuJw?list=PLCZ4SfWipa-oX7g7tWVw4SOQlpoORVRhY" target="_blank">Dance of a hateful man</a>;
    const threelink = <a href="https://youtu.be/rhJEAEeYmIM?list=PLCZ4SfWipa-oX7g7tWVw4SOQlpoORVRhY" target="_blank">Super
        sad sounds for a sad romance</a>;

    function displayOnLoad() {
        console.log('loaded')
    }

    return (
        <div onLoad={displayOnLoad}>
            Best videos:<br/>
            {onelink}<br/>
            {twolink}<br/>
            {threelink}
        </div>
    );
}

export default App;
