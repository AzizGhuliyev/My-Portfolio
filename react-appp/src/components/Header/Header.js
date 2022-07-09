import React from 'react';
import "../Header/Header.css"
class Header extends React.Component {
    state = {  } 
    render() { 
        return (
            <>
               <div className='header'>
                    <div className='namediv'>
                        <h1 className='name'>
                            Aziz Ghuliyev
                        </h1>
                    </div>
                    <div className='contact'>
                        <ul className='list'>
                        <li>
                            About
                        </li>
                        <li>
                            Portfolio
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                    </div>
               </div> 
            </>
        );
    }
}
 
export default Header;