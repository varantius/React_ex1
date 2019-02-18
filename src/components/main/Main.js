import React, {Component} from 'react';
import '../../App.css';

import Header from '../header/Header';
import LeftBar from '../leftbar/LeftBar';
import Content from '../content/Content';
import Footer from '../footer/Footer';

class Main extends Component {
    render() {
        return (

            <div className="App">
                <div className="w-100"><Header/></div>
                <div className="d-flex ">
                    <div className="leftbar-wrapper"><LeftBar/></div>
                    <div className="flex-grow-1 "><Content message = "HEY, i am component!"/></div>
                </div>

                <div className="w-100"><Footer/></div>

            </div>
        );
    }
}

export default Main;
