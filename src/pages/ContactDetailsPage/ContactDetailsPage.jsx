import React, { Component } from 'react';
import { contactService } from '../../services/contactService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faEdit, faLongArrowAltLeft, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { TransferFunds } from '../../cmps/TransferFunds/TransferFunds';

export class ContactDetailsPage extends Component {
    state = {
        contact: null
    }
    
    async componentDidMount() {
        const contact = await contactService.getById(this.props.match.params.id)
        setTimeout( () => {
            this.setState({ contact })
        }, 1500)
    }

    onBack = () => {
        this.props.history.goBack()
    }

    remove = async () => {
        const contactId = await contactService.getById(this.props.match.params.id)
        console.log('removing', contactId)
        //contactService.remove()
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        return <div className="container contact-details">
            <h3 className="contact-details-name">{contact.name}</h3>
            <img src={ `https://robohash.org/${contact._id}?set=set5` } alt="" />
            <div><FontAwesomeIcon icon={faEnvelope} size="s" /> {contact.email}</div>
            <div><FontAwesomeIcon icon={faPhone} size="s" /> {contact.phone}</div>
            
            <Link to={ `/contact/edit/${contact._id}` }><FontAwesomeIcon icon={faEdit} size="s" /></Link> 
            <button onClick={ this.onBack }><FontAwesomeIcon icon={faLongArrowAltLeft} size="s" /></button>
            <button onClick={ this.remove }><FontAwesomeIcon icon={faTrashAlt} size="s" /></button>
            <TransferFunds data={contact}/>
        </div>
    }
}
