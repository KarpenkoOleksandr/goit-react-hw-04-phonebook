import { useState } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { Form, Input, Button, Text } from './ContactForm.styled';

export ContactForm = ({onSubmit}) => {
  
  const [name, setName] = setState('');
  const [number, setNumber] = setState('');

  const handleChange = (evt) => {
    const { name, number } = evt.target;
    switch (name) {
      case 'name': setName(value);
        break;
      case 'number': setNumber(value);
        break;
      default:
        return;
    }
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      Notiflix.Report.warning(
        'Alert',
        `Contact with name "${name}" already exists!`,
        'Ok'
      );      
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    const addContact(newContact);
    this.setState({
      name: '',
      number: '',
    });
  };

    return (
      <Form onSubmit={handleSubmit}>
        <Text>Name</Text>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <Text>Number</Text>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
        <Button type="submit">Add Contact</Button>
      </Form>
    );
}