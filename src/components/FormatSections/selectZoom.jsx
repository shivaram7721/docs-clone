import { useState } from 'react';
import styles from './selectZoom.module.css'

export function SelectZoom() {
  const [selectedOption, setSelectedOption] = useState('');
  
  return (
    <>
      <select className={styles.box} value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <option value="100%">100%</option>
        <option value="50%">50%</option>
        <option value="75%">75%</option>
        <option value="90%">90%</option>
        <option value="100%">100%</option>
        <option value="125%">125%</option>
        <option value="150%">150%</option>
        <option value="200%">200%</option>
      </select>
    </>
  );
}
