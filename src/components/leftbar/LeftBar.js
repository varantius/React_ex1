import React, {Component} from 'react';


import './leftbar-style.css';
import LeftMenu_Item from './сomponents/LeftMenu_Item'

// class LeftBar extends Component {
//
// }

function LeftBar(){
    return(
        <div className='leftbar-wrapper'>
            <nav className=" d-md-block  sidebar">
                <div className="sidebar-sticky">
                    <LeftMenu_Item/>
                </div>
            </nav>
        </div>
    )
}

export default LeftBar;