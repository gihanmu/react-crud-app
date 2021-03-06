import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';

class StreamShow extends  Component  {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    renderStream = () => {        
        if(!this.props.stream){
            return <div>Loading !!!!</div>
        }
        const {title, description} = this.props.stream;

        return (
            <div>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }
   render(){
      
        return (
          this.renderStream()
        )
   }
}

const mapStateToProps = (state, ownProps) => {
  debugger;
    return {
        stream : state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream})(StreamShow);