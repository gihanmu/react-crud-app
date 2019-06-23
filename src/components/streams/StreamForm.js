import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';


class StreamForm extends Component {
    renderError = ({error, touched}) => {      
       if(touched && error){
           return (
               <div className="ui error message">
                   <div className="header">
                        {error}
                   </div>
               </div>
           )
       }
    }

    /**
     * meta will display errors of each input field
     * Name of the error property needs to be equal to input NAME property
     */
   renderInput = ({input, label, meta}) => {       
        const className = `field ${meta.touched && meta.error ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input}/>              
                {this.renderError(meta)}
            </div>
        )
   }

   onSubmit = (formValues) => {   
       console.log(formValues);    
        this.props.onSubmit(formValues);
   }
   
    render(){       
        return (
           <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component = {this.renderInput} label="Title"/>
                <Field name="description" component = {this.renderInput} label="Description" />
                <button className="ui button primary">Submit</button>
            </form> 
        )
   }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title){
        errors.title = 'Please enter a title';
    }
    if(!formValues.description){
        errors.description = 'Please enter a description';
    }
    return errors;
}

export default reduxForm({
    form : 'streamForm',
    validate
})(StreamForm);

