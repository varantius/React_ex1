import React, {Component} from 'react';

class Content extends Component {
    // state = {
    //     counter: 0,
    //     contentText: 'hi from the fucking state!'
    // };

    constructor(props){
        super();

        this.state = {
            counter : 0,
            message: "my friend (from state)!",
            isOpen: false
        };

        this.clickOnMe = this.clickOnMe.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
    }

    clickOnMe = () => {
        this.setState({counter: this.state.counter + 1});
    };


    updateMessage = () => {
        this.setState({
            message: "my friend (from changed state)!"
        });
    };

    updateFlag = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <div className="content-wrapper">
                <header className="App-header">
                    <div>{this.props.message}</div>
                    <h1 className="App-title">Welcome to React</h1>


                    <button onClick={this.clickOnMe}> Click me</button>
                    <div>{this.state.message}</div>


                    <button onClick={this.updateMessage}>Change state after click!</button>
                    <div>{this.state.counter}</div>


                    <button onClick={this.updateFlag}>Update Flag!</button>

                    <div >{this.state.isOpen ? 'Flag is unchecked ' : 'Flag is checked'}</div>
                </header>
                <div className="App-intro">

                </div>


            </div>
        );
    }


}

export default Content;