import React from 'react';
import '../../App.css';

export default function SignUp() {
  return <h1 className='sign-up'>Create a Account </h1>;
}
/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    const navigate = useNavigate();
        
    const onButtonClick = () => {
        // You'll update this function later...
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Login</div>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={email}
                placeholder="Enter your email here"
                onChange={ev => setEmail(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={password}
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Log in"} />
        </div>
    </div>
}

export default SignUp;*/


/*import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const SignUp = () => (
  <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
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
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default SignUp;
*/
/*import React from 'react'
import './SignUp.css'


const Login=()=>{
	return(
		<div>
			<form action=""> 
				<div className='hero-container'> 
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email"/> 
				</div> 
				<div> 
					<label htmlFor="passw">Password</label>
					<input type="text" name="passw" id="passw"/> 
				</div>  
				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default Login    */


/*import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


const SignUp = () => (
  <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Inputfluid icon='lock'iconPosition='left'placeholder='Password'type='password'/>
          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? 
      </Message>
    </Grid.Column>
  </Grid>
)

export default SignUp;*/
