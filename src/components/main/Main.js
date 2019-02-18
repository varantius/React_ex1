import React, {Component} from 'react';
import '../../App.css';

import Content from '../content/Content';

class Main extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div> git test branch</div>
                    <Content />
                </header>
            </div>
        );
    }
}

export default Main;
