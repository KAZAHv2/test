// @flow
import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import type { TSigInFormValues } from './sign-in.types';

import './sign-in.styles.scss';

const SignIn = (): React$Element<'div'> => {
  const [formValues, setFormValues] = useState<TSigInFormValues>({
    email: '',
    password: '',
  });

  const handleChange = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (
    event: SyntheticInputEvent<HTMLInputElement>
  ): Promise<void> => {
    event.preventDefault();
    const { email, password } = formValues;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFormValues({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={formValues.email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={formValues.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
