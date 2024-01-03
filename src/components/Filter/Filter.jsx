import React, { Component } from 'react';
import styles from './Filter.module.css'; 

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.searchInput}
        placeholder="Search contacts..."
      />
    );
  }
}

export default Filter;
