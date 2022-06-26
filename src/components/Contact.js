// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import "./Contact.css";


const Contact = ({data}) => {
    const { name, email, phone, photo } = data;
    return (
        <div>
            <div className="contact">
                <div className="contact__avatar">
                    <img src={photo} alt={name} />
                </div>
                <div className="contact__info">
                    <p>
                        <b>{name}</b>
                    </p>
                    <div className="contact__infodesc">
                        <p>{phone}</p>
                        <p>{email}</p>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Contact;