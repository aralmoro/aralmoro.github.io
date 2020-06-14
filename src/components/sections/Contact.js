import React from 'react';
import Link from '../link/Link';
import IconButton from '../buttons/IconButton';
import MailIcon from '../../assets/icons/basic_mail.svg';
import LinkedInIcon from '../../assets/icons/linked_in.svg';
import './Contact.scss';

function Contact() {
    return (
        <div className="contact">
            <h3>Let's get in touch! You can reach me through:</h3>
            <ul>
                <li>
                    <IconButton icon={MailIcon} disabled size={22} />
                    <Link title="Email" fontSize={17} />
                </li>
                <li>
                    <IconButton icon={LinkedInIcon} disabled size={22} />
                    <Link title="LinkedIn" fontSize={17} />
                </li>
            </ul>
        </div>
    )
}

export default Contact;