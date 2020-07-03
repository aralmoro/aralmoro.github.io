import React from 'react';
import Link from '../link/Link';
import IconButton from '../buttons/IconButton';
import MailIcon from '../../assets/icons/basic_mail.svg';
import LinkedInIcon from '../../assets/icons/linked_in.svg';
import SparkleEmoji from '../../assets/images/sparkle-emoji.png';
import './Contact.scss';

function Contact() {
    return (
        <div className="contact">
            <div className="contact-content">
                <h3>Let's get in touch! <img className="sparkle-emoji" src={SparkleEmoji} /> <br />You can reach me through:</h3>
                <ul>
                    <li>
                        <IconButton icon={MailIcon} disabled size={28} />
                        <Link title="Email" fontSize={17} href="mailto: aralmoro@gmail.com" dark />
                    </li>
                    <li>
                        <IconButton icon={LinkedInIcon} disabled size={28} />
                        <Link title="LinkedIn" fontSize={17} href="https://www.linkedin.com/in/angela-roscel-almoro-26022287/" dark />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;