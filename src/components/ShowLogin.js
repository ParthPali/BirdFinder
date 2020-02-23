import React from 'react';
import brandImg from '../bird.png';
import '@patternfly/react-core/dist/styles/base.css';

import {
  LoginFooterItem,
  LoginForm,
  LoginMainFooterBandItem,
  LoginMainFooterLinksItem,
  LoginPage,
  BackgroundImageSrc,
  ListItem,
  Radio
} from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';
class ShowLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHelperText: false,
      usernameValue: '',
      isValidUsername: true,
      passwordValue: '',
      isValidPassword: true,
      isRememberMeChecked: false,
    };

    this.handleUsernameChange = value => {
      this.setState({ usernameValue: value });
    };

    this.handlePasswordChange = passwordValue => {
      this.setState({ passwordValue });
    };

    this.onRememberMeClick = () => {
      this.setState({ isRememberMeChecked: !this.state.isRememberMeChecked });
    };

    this.onLoginButtonClick = event => {
      event.preventDefault();
      window.location.href='/index'

      //this.setState({ isValidUsername: !!this.state.usernameValue });
      //this.setState({ isValidPassword: !!this.state.passwordValue });
      //this.setState({ showHelperText: !this.state.usernameValue || !this.state.passwordValue });
    };
  }

  render() {
    const helperText = (
      <React.Fragment>
        <ExclamationCircleIcon />
        &nbsp;Invalid login credentials.
      </React.Fragment>
    );

    const signUpForAccountMessage = (
      <LoginMainFooterBandItem>
        Need an account? <a href="#">Sign up.</a>
      </LoginMainFooterBandItem>
    );
    const forgotCredentials = (
      <LoginMainFooterBandItem>
        <a href="#">Forgot username or password?</a>
      </LoginMainFooterBandItem>
    );

    const loginForm = (
      <LoginForm
        showHelperText={this.state.showHelperText}
        helperText={helperText}
        usernameLabel="Username"
        usernameValue={this.state.usernameValue}
        onChangeUsername={this.handleUsernameChange}
        isValidUsername={this.state.isValidUsername}
        passwordLabel="Password"
        passwordValue={this.state.passwordValue}
        onChangePassword={this.handlePasswordChange}
        isValidPassword={this.state.isValidPassword}
        rememberMeLabel="Keep me logged in."
        isRememberMeChecked={this.state.isRememberMeChecked}
        onChangeRememberMe={this.onRememberMeClick}
        //isUserChecked={this.state.isUserChecked}
        //onUserClick={this.onUserClick}
        //isAdminChecked={this.state.isAdminChecked}
        //onAdminClick={this.onAdminClick}
        onRadioClick={this.onRadioClick}
        onLoginButtonClick={this.onLoginButtonClick}
      />
    );

    const images = {
      [BackgroundImageSrc.lg]: '../backgroundimage.jpg'
    };


    return (
      <LoginPage
        footerListVariants="inline"
        brandImgSrc={brandImg}
        brandImgAlt="Logo"
        backgroundImgSrc={images}
        backgroundImgAlt="Images"
        footerListItems=""
        textContent="This is login page"
        loginTitle="Log in to your account"
        loginSubtitle="Please use your credentials"
        signUpForAccountMessage={signUpForAccountMessage}
        forgotCredentials={forgotCredentials}
      >
        {loginForm}
      </LoginPage>
    );
  }
}
export default ShowLogin;
