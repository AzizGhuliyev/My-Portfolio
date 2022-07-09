import React from 'react';
import "../Right/Right.css"
import GitHub from "../../../Img/GitHub.png"
import Linkedin from "../../../Img/Linkedin.jpg"
import Instagram from "../../../Img/Instagram.png"
class Right extends React.Component {

    render() { 
        return (
            <>
                <div className='right'>
                    <div className='connect-div'>
                        <p className='connect'>
                            Connect with ME
                        </p>     
                    </div>
                    <hr className='connect-hr'/>
                    <div className='contactlogo'>
                        <img className='logo' src={GitHub} alt="GitHub"/>
                        <img className='logo' src={Linkedin} alt="Linkedin"/>
                        <img className='logo' src={Instagram} alt="Instagram"/>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Right;