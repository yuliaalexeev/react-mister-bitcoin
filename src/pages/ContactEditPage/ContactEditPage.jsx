
import React, { Component } from 'react';
import { contactService } from '../../services/contactService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

import './ContactEditPage.scss'

export class ContactEditPage extends Component {
    state = {
        contact: {
            name: '',
            email: '',
            phone: ''
        },
        errMsg: ''

    }

    async componentDidMount(){
        const { id } = this.props.match.params
        const contact = id ? await contactService.getById(id): await contactService.getEmptyContact()
        if(contact) this.setState({contact})
        else this.setState({ errMsg: 'Contact Not Found!' })
        
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'tel' ? +target.value : target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
    }

    onBack = () => {
        this.props.history.goBack()
    }

    onSaveContact = async (ev) => {
        ev.preventDefault()
        console.log(this.state);
        //console.log('loading...');
        await contactService.save({ ...this.state.contact })
        this.onBack();
    }

    render() {
        const { name, email, phone } = this.state.contact
        return(
            <form className="contact-edit" onSubmit={ this.onSaveContact }>
                <label>Name:</label>
                <input type="text" name="name" value={ name } onChange={ this.handleChange } />
                <label>Email:</label>
                <input type="text" name="email" value={ email } onChange={ this.handleChange } />
                <label>Phone:</label>
                <input type="tel" name="phone" value={ phone } onChange={ this.handleChange } />
                <button>Save</button>
                <button onClick={ this.onBack }><FontAwesomeIcon icon={faLongArrowAltLeft} size="xs" /></button>
            </form>
    
        )
    }
}

