import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './../../actions'
import data from './../../data.json'

//import './app.scss';
class App extends Component {
   
    componentWillMount() {
        const { items } = this.props;
        if (items === null) {
            this.props.actions.itemsFetched(data)
        }
        //console.log("data", this.props)
    }

    renderItems() {
        return this.props.items.items.map((data, i) => {
            return (
                <div key={i}>
                    <div> {data.snippet.title} </div>
                    <img src={data.snippet.thumbnails.default.url}/> 
                </div>
            )
        })
    }

    render() {
        return (
            <div className="app" style={{display: 'flex'}}>
               
                {this.renderItems()}
               
           </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items : state
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);