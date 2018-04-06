import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import LoginFormContainer from './login_form/login_form_container'
import SignupFormContainer from './login_form/signup_form_container'
import {Route} from 'react-router'
import { AuthRoute} from '../util/route_util';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <header>
      <WelcomeContainer />
    </header>
    <br></br>
  </div>
);

export default App;
