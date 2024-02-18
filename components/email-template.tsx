import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  message
}) => (
  <div>
    <h1>Od: {name}</h1>
    <h5>Email: {email}</h5>
    <h5>Telefon: {phone}</h5>
    <hr />
    <div>Treść: {message}</div>
  </div>
);