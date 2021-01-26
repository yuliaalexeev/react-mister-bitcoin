import React, { Component } from 'react';
import { contactService } from '../../services/contactService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faEdit, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export class ContactDetailsPage extends Component {
    state = {
        contact: null
    }
    
    async componentDidMount() {
        const contact = await contactService.getById(this.props.match.params.id)
        this.setState({ contact })
        //eventBus.emit('details mounted', robot)
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
        if (!contact) return <div>Loading...</div>
        return <div className="contact-details">
            <img src={ `https://robohash.org/${contact._id}?set=set5` } alt="" />
            <h3 className="contact-details-name">{contact.name}</h3>
            <div><FontAwesomeIcon icon={faEnvelope} size="xs" /> {contact.email}</div>
            <div><FontAwesomeIcon icon={faPhone} size="xs" /> {contact.phone}</div>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rem fugiat eaque non vero sapiente natus veritatis blanditiis dignissimos ipsum nobis nisi odio similique, iusto dolores et. Quam, itaque quidem.</p>
            <Link to={ `/contact/edit/${contact._id}` }><FontAwesomeIcon icon={faEdit} size="xs" /></Link> 
            <button onClick={ this.onBack }><FontAwesomeIcon icon={faLongArrowAltLeft} size="xs" /></button>
            <button onClick={ this.remove }>Remove</button>

        </div>
    }
}
