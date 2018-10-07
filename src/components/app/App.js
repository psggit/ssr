import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import './app.scss';
class App extends Component {
    constructor() {
        super()
        console.log("props", this.props)
        // this.state = {
            
        // }
    }

    componentDidMount() {
        console.log("hello")
    }

    render() {
        console.log("state props", this.props.items)
        return (
            <div className="app">
                <h1 className="app-heading">Hello App</h1>
           </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("state", state)
    return {
        items : state
    }
}
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ fetchUsers }, dispatch);

export default connect(mapStateToProps)(App);