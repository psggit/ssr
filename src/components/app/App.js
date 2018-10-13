import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './../../actions'
import data from './../../data.json'
import './App.css'

class App extends Component {

    componentWillMount() {
        const { list } = Object.keys(this.props.data).length > 0 ? this.props.data : null
        if (list === null) {
            this.props.actions.itemsFetched(data)
        }
    }

    renderItems() {
        return this.props.data.list.items.map((data, i) => {
            return (
                <React.Fragment>
                    <div key={i}>
                        <div> {data.snippet.title} </div>
                        <img src={data.snippet.thumbnails.default.url}/> 
                    </div><br />
                </React.Fragment>
            )
        })
    }

    render() {
        //console.log("this.props", this.props)
        return (
            <div className="app" style={{display: 'flex', flexDirection: 'column'}}>
               
                {
                    !this.props.data.isFetching &&
                    this.renderItems()
                }
               
           </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data : state
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);