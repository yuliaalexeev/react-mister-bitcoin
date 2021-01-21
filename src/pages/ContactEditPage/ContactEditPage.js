
import React, { Component } from 'react'

import './ContactEditPage.scss'

export class ContactEditPage extends Component {
    state={
        name: '',
        email: '',
        phone: ''
    }

    render() {
        const { name, email, phone } = this.state
        return(
            <form>
                <label>Name:</label>
                <input type="text" name="userName" value={ name } onChange={ this.handleChange } />
                <label>Email:</label>
                <input type="text" name="email" value={ email } onChange={ this.handleChange } />
                <label>Phone:</label>
                <input type="text" name="phone" value={ phone } onChange={ this.handleChange } />
            </form>
    
        )
    }
}

