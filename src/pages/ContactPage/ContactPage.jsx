
import { Component } from 'react';
import { ContactList } from '../../cmps/ContactList/ContactList';
import { contactService } from '../../services/ContactService';
import { ContactFilter } from '../../cmps/ContactFilter/ContactFilter'
import './ContactPage.scss';

export class ContactPage extends Component {
    state = {
        //contacts: contactService.getContacts(),
        contacts: null,
        filterBy: ''
    }

    componentDidMount() {
        this.loadContacts()
    }

    async loadContacts() {
        const contacts = await contactService.getContacts(this.state.filterBy.term);
        this.setState({ contacts })
    }

    onSetFilter = (filterBy) => {
        console.log('Filter Happend!', filterBy);
        this.setState({ filterBy }, this.loadContacts)
    }

    render() {
        const { contacts } = this.state
        return(
            <div className="contacts">
                <h2>Contacts</h2>
                <ContactFilter  onSetFilter={ this.onSetFilter } />
                { contacts && <ContactList contacts={ contacts } /> }
            </div>
        )
    }
}

