import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addContact({ id: nanoid(), name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.formContainer}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          className={styles.inputField}
          placeholder="Enter name"
          required
        />
        <input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          className={styles.inputField}
          placeholder="Enter phone number"
          required
        />
        <button type="submit" className={styles.submitButton}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

