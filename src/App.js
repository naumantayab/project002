import React from 'react';

function App(props) {
    console.log(props);
    let currDate = new Date();
    currDate = currDate.getHours();
    let greetings = '';
    const cssStyle = {};
    const page = {};

    if (currDate >= 1 && currDate < 12) {
        greetings = 'Good Morning';
        cssStyle.color = 'green';
        page.backgroundColor = 'white';
    } else if (currDate >= 12 && currDate < 19) {
        greetings = 'Good Afteroon';
        cssStyle.color = 'orange';
        page.backgroundColor = 'orange';
    } else {
        greetings = 'Good Night';
        cssStyle.color = 'black';
        page.backgroundColor = 'black';
    }

return(
    <>
        <div style= {page}>
            <div className= 'style-box'>
                <h1 className='heading'> Hello, Sir <span style={cssStyle}> {greetings}</span></h1>
            </div>
            <div className='cards'>
                <div className='card'>
                    <img src={props.imgsrc} alt="myPic" className="card_img" />
                    <div className="card_info">
                        <span className="card_category"> {props.title} </span>
                        <h3 className="card_title"> {props.name} </h3>
                        <a href={props.link} target="_blank">
                            <button> Watch Now </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>


    </>
    );
}
export default App;