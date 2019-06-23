import React, {Component} from 'react';
import Modal from '../Modal';
import history from '../../history';
import {connect} from 'react-redux';
import {fetchStream , deleteStream} from '../../actions'

class StreamDelete extends Component {
    componentDidMount(){
       this.props.fetchStream(this.props.match.params.id);
    }

    deleteStream = () => {
        this.props.deleteStream(this.props.stream.id);
        

    }

    getActions = () => {
        return(
            
                <div>
                    <button className="ui button negative" onClick={this.deleteStream}>Delete</button>
                    <button className="ui button" onClick={() => history.push("/")}>Cancel</button>
                </div>
        
            
        );
    }

    renderDelete = () => {
        if(this.props.stream){
            return (
                <div>
                    <div>StreamDelete</div>
                    <Modal
                    title = "Delete Stream"
                    content = {`Are you sure you want to delete this stream ${this.props.stream.title}?`}
                    actions={this.getActions()}
                    onDismiss = {() => history.push("/")}
                    />
                </div>
            )
        }
        return (
            <div>Loading !!!</div>
        )
    }
    
    render(){
      return(
          this.renderDelete()
      )
       
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
        stream : state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);