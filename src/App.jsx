import React from 'react';

function App() {
    var name = 'Nauman Tayyab';
    var curDate = new Date().toLocaleDateString();
    var currTime = new Date().toLocaleTimeString();

    var img1 = 'https://picsum.photos/200/300';
    var img2 = 'https://picsum.photos/250/300';
    var img3 = 'https://picsum.photos/300/300';
    var img4 = 'https://picsum.photos/400/300';
    var img5 = 'https://picsum.photos/400/400';

    let currDate = new Date();
    currDate = currDate.getHours();
    let greetings = '';
    const cssStyle = {};

    if (currDate >= 1 && currDate < 12) {
        greetings = 'Good Morning';
        cssStyle.color = 'green';
    } else if (currDate >= 12 && currDate < 19) {
        greetings = 'Good Afteroon';
        cssStyle.color = 'orange';
    } else {
        greetings = 'Good Night';
        cssStyle.color = 'black';
    }
return(
    <>
        <div className= 'style-box'>
            <h1 className='heading'> Hello, Sir <span style={cssStyle}> {greetings}</span></h1>
        </div>
        <div className='date-time'>
            <p> Current Date is = {curDate}</p>
            <p> Current Time is = {currTime}</p>
        </div>
        <div className='image-gallery'>
            <img src={img1} alt='RandomImages' />
            <img src={img2} alt='RandomImages' />
            <img src={img3} alt='RandomImages' />
            <img src={img4} alt='RandomImages' />
            <img src={img5} alt='RandomImages' />
        </div>
    </>
);
}
export default App;