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

    renderField(field) {
        return (
            <div>
                <label>{field.label}</label>
                <input className="form-control" {...field.input} />
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
                        component={this.renderField}
                    />
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signin'
})(
    connect(null, { signinUser })(Signin)
);