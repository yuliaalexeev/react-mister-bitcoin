
import React from 'react'

import './SignupPage.scss'

export class SignupPage extends React.Component {
    state = {
        user:{
            username: null
        },
        error: {}
    }

    onSignUp = (e) => {
        e.preventDefault()
        this.setState({})
        console.log('signed in', e.target.input)
    }

    handleChange = (e) =>{
        console.log('e',e.target.input)
    }

    render() {
        const {username} = this.state.user
        return(
            <form className="signup" onSubmit={ this.onSignUp }>
                    <h2 className="main-title">Sign Up</h2>
                    <label>
                        Username
                    </label>
                    <input type="text" value={username} onChange={ this.handleChange } placeholder="User name" />
                    <button>Sign up</button>
                
            </form>
        );
    }
}

