
import React from 'react';
import { ContactPreview } from '../ContactPreview/ContactPreview';
import './ContactList.scss'

export function ContactList({ contacts }){
    return (
        <ul className="contact-list clean-list">
            {
                contacts.map(contact => <ContactPreview contact={contact} key={contact._id} />)
            }
        </ul>
    )
}
