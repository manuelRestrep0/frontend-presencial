import React from 'react';

export default function FlightDetailsForm() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#3A76F8',
      borderRadius: '8px',
      padding: '10px',
      marginTop: '20px',
      marginLeft: '20px',
      marginRight: '20px',
    }}>
      {/* Labels and Inputs */}
      <label htmlFor="stringInput" style={{ color: 'white', marginRight: '10px' }}>FROM - TO:</label>
      <input type="text" id="stringInput" name="stringInput" style={{ marginRight: '10px', padding: '5px' }} />

      <label htmlFor="dateInput" style={{ color: 'white', marginRight: '10px' }}>DEPART DATE:</label>
      <input type="date" id="dateInput" name="dateInput" style={{ marginRight: '10px', padding: '5px' }} />

      <label htmlFor="stringInput2" style={{ color: 'white', marginRight: '10px' }}>PASSENGERS:</label>
      <input type="text" id="stringInput2" name="stringInput2" style={{ marginRight: '10px', padding: '5px' }} />

      <label htmlFor="stringInput3" style={{ color: 'white' }}>CLASS:</label>
      <input type="text" id="stringInput3" name="stringInput3" style={{ padding: '5px' }} />
    </div>
  );
}
