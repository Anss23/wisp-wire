import React, {useEffect, useState} from 'react';

const Email = ({emailAddress}) => {
    const [email, setEmail] = useState(emailAddress);

    useEffect(() => {
        setEmail(emailAddress)
    }, [emailAddress]);

    return (
        <div className="email-container">
            <div className="email-header">
                <h2 className="email-title">{email}</h2>
            </div>
            <textarea 
                value={email ? `This is the content for ${email}` : 'Select an email to view its content'} 
                readOnly 
                className="email-text-area"
            />
        </div>
    );
}

export default Email;