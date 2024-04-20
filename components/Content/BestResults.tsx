import React from 'react';

export default function BestResults() {
    return (
        <div style={{
            backgroundColor: '#D7E2EE',
            borderRadius: '8px',
            marginTop: '20px',
            marginLeft: '20px',
            marginRight: '20px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'row',
            border: '1px solid black'
        }}>
            {/* Casilla 1 */}
            <div style={{ marginRight: '150px' }}>
                <h3>Cheapest</h3>
                <label id="label1"></label>
            </div>

            {/* Casilla 2 */}
            <div style={{ marginRight: '150px' }}>
                <h3>Best</h3>
                <label id="label2"></label>
            </div>

            {/* Casilla 3 */}
            <div>
                <h3>Quickest</h3>
                <label id="label3"></label>
            </div>
        </div>

    );
}
