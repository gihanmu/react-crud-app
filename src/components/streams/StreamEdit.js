import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component{

    componentDidMount(){      
        this.props.fetchStream(this.props.match.params.id);
        this.extractTitleAndDescription();
        

    }

    extractTitleAndDescription = () => {
        const {title, description} = this.props.stream;
        this.editValues = {
            title,
            description
        }

    }

    onSubmit = (formValues) => {
      this.props.editStream(this.props.match.params.id, formValues);
    }
   
   render(){
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm  initialValues={this.editValues} onSubmit={this.onSubmit}/>
               
            </div>
        )
   }
    
}

const mapStateToProps = (state, ownProps) => {  
    return {
        stream : state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);