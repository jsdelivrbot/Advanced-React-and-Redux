import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signinUser } from '../../actions';

class Signin extends Component {

    handleFormSubmit({ email, password }) {
        console.log("email:", email);
        console.log("password:", password);
        this.props.signinUser({ email, password }, () => {
            this.props.history.push('/feature');
        });
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    renderField(field) {
        const { type } = field;

        return (
            <div>
                <label>{field.label}</label>
                <input className="form-control" {...field.input} type={type}/>
            </div>
        );
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <Field
                        label="Email:"
                        name="email"
                        component={this.renderField}
                    />
                    <Field
                        label="Password:"
                        name="password"
                        type="password"
                        component={this.renderField}
                    />
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: 'signin'
})(
    connect(mapStateToProps, { signinUser })(Signin)
);