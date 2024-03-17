import React from 'react';

function FiltroPrecioRango() {
    return (
        <body style={{ margin: 0 }}>
            <header style={{ width: '100%', height: '154px' }}>
                {/* Primer div */}
                <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#3A76F8', height: '78px' }}>
                    <img src="/img/singaporeairlines.jpg" alt="Singapore Airlines" style={{ maxWidth: '100%', maxHeight: '100%', marginLeft: '20px' }} />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: '1' }}>
                        <input type="text" placeholder="Search here" style={{ width: '250px', marginLeft: '-1px', marginRight: '-1px', borderRadius: '5px 0 0 5px', backgroundColor: '#5285D1', color: '#FFFFFF', padding: '8px', border: 'none', borderTopRightRadius: '0', borderBottomRightRadius: '0' }} />
                        <button type="button" style={{ backgroundColor: '#6B9EFF', color: '#FFFFFF', borderRadius: '0 5px 5px 0', border: 'none', padding: '8px', width: '80px' }}>Search</button>
                    </div>
                    <button type="button" style={{ backgroundColor: 'transparent', border: 'none', marginRight: '20px' }}>Icono</button>
                </div>

                {/* Segundo div */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '76px', backgroundColor: '#FFFFFF', borderBottom: '1px solid black', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <button type="button" style={{ backgroundColor: 'transparent', color: '#000000', border: 'none', borderBottom: '2px solid transparent', padding: '8px 16px', margin: '0 10px' }}>Home</button>
                    <button type="button" style={{ backgroundColor: 'transparent', color: '#000000', border: 'none', borderBottom: '2px solid transparent', padding: '8px 16px', margin: '0 10px' }}>Booked</button>
                    <button type="button" style={{ backgroundColor: 'transparent', color: '#000000', border: 'none', borderBottom: '2px solid transparent', padding: '8px 16px', margin: '0 10px' }}>Travels</button>
                </div>
            </header>
            <div style={{ width: '300px', height: '100vh', backgroundColor: '#F1F1F1', border: '1px solid black', borderRadius: '10px', marginTop: '20px', marginLeft: '20px' }}>
                {/* Divs de la barra lateral */}
                <div style={{ padding: '10px', borderBottom: '1px solid black' }}>Div 1</div>
                <div style={{ padding: '10px', borderBottom: '1px solid black' }}>Div 2</div>
                <div style={{ padding: '10px', borderBottom: '1px solid black' }}>Div 3</div>
                <div style={{ padding: '10px' }}>Div 4</div>
            </div>
        </body>
    );
}

export default FiltroPrecioRango;