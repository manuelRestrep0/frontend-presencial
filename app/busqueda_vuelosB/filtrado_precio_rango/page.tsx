import React from 'react';

function FiltroPrecioRango() {
    return (
        <header style={{ width: '100%', height: '154px'}}>
            {/* Primer div*/}
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#3A76F8', height: '78px'}}>
                <img src="/img/singaporeairlines.jpg" alt="Singapore Airlines" style={{ maxWidth: '100%', maxHeight: '100%', marginLeft: '20px'}} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: '1' }}>
                    <input type="text" placeholder="Search here" style={{ width: '250px', marginLeft: '-1px', marginRight: '-1px', borderRadius: '5px 0 0 5px', backgroundColor: '#5285D1', color: '#FFFFFF', padding: '8px', border: 'none', borderTopRightRadius: '0', borderBottomRightRadius: '0' }} />
                    <button type="button" style={{ backgroundColor: '#6B9EFF', color: '#FFFFFF', borderRadius: '0 5px 5px 0', border: 'none', padding: '8px', width: '80px' }}>Search</button>
                </div>
                <button type="button" style={{ backgroundColor: 'transparent', border: 'none', marginRight: '20px' }}>Icono</button>
            </div>

            {/* Segundo div */}
            <div style={{ width: '50%', height: '76px', backgroundColor: '#FFFFFF' }}></div>
        </header>
    );
}

export default FiltroPrecioRango;