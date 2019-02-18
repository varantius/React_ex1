import React, {Component} from 'react';

class Content extends Component {
    // constructor(props){
    //     super(props);
    //
    //     this.state = {
    //         counter : 0
    //     };
    //
    //     this.clickOnMe = this.clickOnMe.bind(this);
    // }
    state = {
        counter: 0
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                    <button onClick={this.clickOnMe}> Click me</button>
                    <div>{this.state.counter}</div>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>


            </div>
        );
    }

    clickOnMe = () => {
        this.setState({counter: this.state.counter + 1});

        console.log(this.state.counter);
    }
}

export default Content;