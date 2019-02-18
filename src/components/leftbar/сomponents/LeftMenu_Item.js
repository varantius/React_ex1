import React, {Component} from 'react';

function LeftMenu_Item( ){


   let menuArr = ['Dashboard', 'Orders','Products','Customers','Reports','Integrations'];


    let newMenuArr = menuArr.map((menuItem, index) =>
        <li className="nav-item" key={index}>
            <a className="nav-link active" href="#" title={menuItem}>
                {menuItem}
            </a>
        </li>
    );

    return(
        <ul className="nav flex-column">
            {newMenuArr}
        </ul>
    );
}



export default LeftMenu_Item;