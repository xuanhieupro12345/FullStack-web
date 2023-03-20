import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);// dùng hàm này có thế kế  thừa được
        this.state = {
            username: '',
            password: 'xuanhieu',
            isShowPassword: false

        }
    }
    handleOnChangeUserName = (event) => {
        //gõ chữ thay đổi trên input
        this.setState({
            username: event.target.value
        })
        console.log(event.target.value)
    }

    handleOnChangePassword = (event) => {
        //gõ chữ thay đổi trên input
        this.setState({
            password: event.target.value
        })
        console.log(event.target.value)
    }

    //log ra du lieu nguoi login
    handleLogin = () => {
        console.log('userName :', this.state.username, 'password : ', this.state.password)
        console.log('all state :', this.state)
    }

    //hiểu thị mật khẩu người dùng
    handleShowHidePassword = () => {
        this.setState({
            // user ! thì lấy giá trị ngược lại
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {



        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content'>
                        <div className='clo-12 text-login'>Login</div>
                        <div className='clo-12 form-group login-input '>
                            <label>UserName</label>
                            <input type='text' className='form-control' placeholder='Enter your username'
                                value={this.state.username} // truyền giá trị cho name
                                //gõ được thay đổi trong hàm input
                                onChange={(event) => this.handleOnChangeUserName(event)} />

                        </div>
                        <div className='clo-12 form-group login-input '>
                            <label>Password</label>
                            <div className='custom-input-password'>
                                <input type={this.state.isShowPassword ? 'text' : 'password'}
                                    className='form-control' placeholder='Enter your password'
                                    value={this.state.password} // truyền giá trị cho name
                                    //gõ được thay đổi trong hàm input
                                    onChange={(event) => this.handleOnChangePassword(event)}
                                />
                                <span onClick={() => { this.handleShowHidePassword() }}>
                                    <i class={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i>
                                </span>


                            </div>

                        </div>
                        <div className='clo-12 '>
                            {/* onClick={() => { this.handleLogin() }} lấy được dữ liệu */}
                            <button className='btn-login' onClick={() => { this.handleLogin() }} >Login</button>
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
