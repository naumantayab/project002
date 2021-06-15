import {add,sub, mul, div} from './calc';

// var name = 'Nauman Tayyab';
var curDate = new Date().toLocaleDateString();
var currTime = new Date().toLocaleTimeString();

var img1 = 'https://picsum.photos/200/300';
var img2 = 'https://picsum.photos/250/300';
var img3 = 'https://picsum.photos/300/300';
var img4 = 'https://picsum.photos/400/300';
var img5 = 'https://picsum.photos/400/400';
return(
    <>
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

        <ul>
            <li>Sum of two num is {add(30,30)}</li>
            <li>Subtract of two num is {sub(30, 30)}</li>
            <li>Multiplication of two num is {mul(30, 30)}</li>
            <li>Division of two num is {div(30, 30)}</li>
        </ul>
    </>
)