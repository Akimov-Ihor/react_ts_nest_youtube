import React from 'react'
import {Grid,Form,Header,Button,Segment} from "semantic-ui-react";
import {GoogleLogin} from 'react-google-login'

export const Login:React.FC =() => {

  const responseGoogle = (response:any) => {
    console.log(response);
  }

  const handleLogin = async ({tokenId}:any) => {
        const res = await fetch("http://localhost:5000/google", {
            method: "GET",
            // body: JSON.stringify({
            //     token: tokenId
            // }),
            // headers: {
            //     "Content-Type": "application/json"
            // }
        })
        const data = await res
        console.log(data)
        // store returned user somehow
    }
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    {/* <Image src='/logo.png' /> */}
                    Log-in to your account
                </Header>
                <Form size='large'>
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
                </Form>
                <GoogleLogin
                    clientId="693589886641-op4l6rjlsg2c8vc2jt7mkia7f5eeh0jf.apps.googleusercontent.com"
                    buttonText="Log in with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy="single_host_origin"
                />

            </Grid.Column>
        </Grid>
        )

}
