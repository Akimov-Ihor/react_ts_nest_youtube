import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  Grid, Header, Segment,
} from 'semantic-ui-react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

import { startLogin } from '../../store/actions/user/user.actions';

import { UserDataINF } from '../../interface/userInterface';
import { MainStoreINT } from '../../interface/mainStoreInterface';

export const Login:React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isVerifyingAuth: boolean = useSelector((state: MainStoreINT) => state.user.isVerifyingAuth);
  const userData: UserDataINF = useSelector((state: MainStoreINT) => state.user.userData);

  const isGoogleLoginResponse = (response: GoogleLoginResponse | GoogleLoginResponseOffline):
    response is GoogleLoginResponse => {
    return !!response && typeof response === 'object' && !!(response as GoogleLoginResponse).tokenObj;
  };

  const handleLogin = async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if (!isGoogleLoginResponse(response)) {
      return;
    }
    const token = response.tokenId;
    await startLogin({ token })(dispatch);
  };

  useEffect(() => {
    if (Object.keys(userData).length > 0 && !isVerifyingAuth) {
      history.push('/');
    }
  }, [userData, isVerifyingAuth, history]);

  return (
    <>
      {!isVerifyingAuth && !userData && (
        <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              {/* <Image src='/logo.png' /> */}
              Log-in to your account
            </Header>
            <Segment stacked>
              <GoogleLogin
                clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy="single_host_origin"
              />
            </Segment>
          </Grid.Column>
        </Grid>
      )}
    </>
  );
};
