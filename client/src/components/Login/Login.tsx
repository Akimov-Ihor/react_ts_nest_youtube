import React from 'react'
import {Grid,Form,Header,Button,Segment} from "semantic-ui-react";
import {GoogleLogin} from 'react-google-login'

export const Login:React.FC =() => {



  const handleLogin = async (googleData:any) => {
    const res = await fetch("http://localhost:5000/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    console.log(data)
    // store returned user somehow
  }
  console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID)



    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    {/* <Image src='/logo.png' /> */}
                    Log-in to your account
                </Header>

                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />

                        <Button color='teal' fluid size='large'>
                            Login
                        </Button>
                    </Segment>

                <GoogleLogin
                    clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
                    buttonText="Log in with Google"
                    onSuccess={handleLogin}
                    onFailure={handleLogin}
                    cookiePolicy="single_host_origin"
                />

            </Grid.Column>
        </Grid>
        )

}
