
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './ContactPreview.scss';

export function ContactPreview({ contact }) {
    return(
        <Link to={ `/contact/${contact._id}` }>
            <li className="contact-preview">
                <img src={ `https://robohash.org/${contact._id}?set=set5` } className="contact-preview-img" alt={contact.name} />
                <div className="contact-preview-info">
                    <h3 className="contact-preview-info-name">{contact.name}</h3>
                    <div><FontAwesomeIcon icon={faPhone} size="xs" /> {contact.email}</div>
                    <div><FontAwesomeIcon icon={faEnvelope} size="xs" /> {contact.phone}</div>
                </div>
            </li>
        </Link>
    )
}


