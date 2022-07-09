import React from 'react';
import "../Left/Left.css"
import MyPhoto from "../../../Img/MyPhoto.jpg"
class Left extends React.Component {
    state = {  } 
    render() { 
        return (
            <>
             <div className='left'>
                <div className='about-div'>
                    <p className='about'>
                        About Me
                    </p>
                </div>
                <hr className='about-hr'/>
                    <img className='image' src={MyPhoto} alt="My Photo"/>
                    <p className='p1'>
                        Hello, I am Aziz Ghuliev. I am 22 years old. I graduated from Azerbaijan State Agrarian University with a degree in Finance. Although it is not my specialty, I am currently working in the field of IT. I received my education as a front-end developer at Algo Academy. In addition, I received javaScript lessons from Udemy.
                    </p>
                    <p className='p2'>
                        I have been interested in computer science for a long time. For me, working with codes is a special way of pleasure and creativity. All this allowed me to deepen my knowledge of computer science. I'm still learning.
                    </p>
             </div>
            </>
        );
    }
}
 
export default Left;