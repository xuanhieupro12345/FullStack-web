import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content'>
                        <div className='clo-12 text-login'>Login</div>
                        <div className='clo-12 form-group login-input '>
                            <label>UserName</label>
                            <input type='text' className='form-control' placeholder='Enter your username' />
                        </div>
                        <div className='clo-12 form-group login-input '>
                            <label>Password</label>
                            <input type='password' className='form-control' placeholder='Enter your password' />
                        </div>
                        <div className='clo-12 '>
                            <button className='btn-login' >Login</button>
                        </div>
                        <div className='clo-12'>
                            <span className='forgot-passwod'>Forgot your password?</span>
                        </div>
                        <div className='clo-12 text-center mt-3'>
                            <span className='text-other-login'>Or Login with</span>
                        </div>
                        <div className='clo-12 social-login'>
                            <i className="fab fa-google google"></i>
                            <i className="fab fa-facebook facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
