import React from 'react';

function FiltroPrecioRango() {
    return (
        <body style={{ margin: 0 }}>
            <header style={{ width: '100%', height: '154px' }}>
                {/* Primer div */}
                <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#3A76F8', height: '78px' }}>
                    {/* Imagen del logo */}
                    <img src="/img/singaporeairlines.jpg" alt="Singapore Airlines" style={{ maxWidth: '100%', maxHeight: '100%', marginLeft: '20px' }} />
                    {/* Contenedor del campo de búsqueda y botón */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: '1' }}>
                        {/* Campo de entrada para la búsqueda */}
                        <input type="text" placeholder="Search here" style={{ width: '250px', marginLeft: '-1px', marginRight: '-1px', borderRadius: '5px 0 0 5px', backgroundColor: '#5285D1', color: '#FFFFFF', padding: '8px', border: 'none', borderTopRightRadius: '0', borderBottomRightRadius: '0' }} />
                        {/* Botón de búsqueda */}
                        <button type="button" style={{ backgroundColor: '#6B9EFF', color: '#FFFFFF', borderRadius: '0 5px 5px 0', border: 'none', padding: '8px', width: '80px' }}>Search</button>
                    </div>
                    {/* Icono Usuario */}
                    <button type="button" style={{ backgroundColor: 'transparent', border: 'none', marginRight: '20px' }}>Icono</button>
                </div>

                {/* Segundo div */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '76px', backgroundColor: '#FFFFFF', borderBottom: '1px solid black', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    {/* Botones de navegación */}
                    <button type="button" style={{ backgroundColor: 'transparent', color: '#000000', border: 'none', borderBottom: '2px solid transparent', padding: '8px 16px', margin: '0 10px' }}>Home</button>
                    <button type="button" style={{ backgroundColor: 'transparent', color: '#000000', border: 'none', borderBottom: '2px solid transparent', padding: '8px 16px', margin: '0 10px' }}>Booked</button>
                    <button type="button" style={{ backgroundColor: 'transparent', color: '#000000', border: 'none', borderBottom: '2px solid transparent', padding: '8px 16px', margin: '0 10px' }}>Travels</button>
                </div>
            </header>


            <div style={{
                width: '300px',
                height: '100vh',
                backgroundColor: '#F1F1F1',
                border: '1px solid black',
                borderRadius: '10px',
                marginTop: '20px',
                marginLeft: '20px',
                padding: '10px'
            }}>
                {/* Primer div */}
                <div style={{ color: 'black' }}>
                    {/* Título del filtro */}
                    <h1>Filters</h1>
                </div>

                {/* Segundo div */}
                <div style={{ borderBottom: '1px solid black', display: 'flex', flexDirection: 'column', paddingBottom: '10px' }}>
                    {/* Título del segundo div */}
                    <h2>Price</h2>
                    {/* Contenido del segundo div */}
                    <div style={{ display: 'flex' }}>
                        {/* Primer input */}
                        <input type="number" style={{ marginRight: '5px', width: '100px', padding: '5px' }} />
                        {/* Separador */}
                        <span style={{ margin: '0 5px' }}>-</span>
                        {/* Segundo input */}
                        <input type="number" style={{ marginLeft: '5px', width: '100px', padding: '5px' }} />
                    </div>
                </div>


                {/* Tercer div */}
                <div style={{ borderBottom: '1px solid black', display: 'flex', flexDirection: 'column' }}>
                    {/* Título del filtro de paradas */}
                    <h2 style={{ marginBottom: '10px' }}>Stops</h2>
                    {/* Botones de selección de paradas */}
                    <div style={{ display: 'flex' }}>
                        {/* Botones de selección */}
                        <button type="button" style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            color: '#2C7AD6',
                            border: '1px solid #2C7AD6',
                            borderRadius: '10px',
                            padding: '8px 16px',
                            cursor: 'pointer',
                            marginRight: '10px'
                        }}>0</button>
                        <button type="button" style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            color: '#2C7AD6',
                            border: '1px solid #2C7AD6',
                            borderRadius: '10px',
                            padding: '8px 16px',
                            cursor: 'pointer',
                            marginRight: '10px'
                        }}>1</button>
                        <button type="button" style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            color: '#2C7AD6',
                            border: '1px solid #2C7AD6',
                            borderRadius: '10px',
                            padding: '8px 16px',
                            cursor: 'pointer',
                            marginRight: '10px'
                        }}>2</button>
                        <button type="button" style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            color: '#2C7AD6',
                            border: '1px solid #2C7AD6',
                            borderRadius: '10px',
                            padding: '8px 16px',
                            cursor: 'pointer',
                            marginRight: '10px'
                        }}>3</button>
                        <button type="button" style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            color: '#2C7AD6',
                            border: '1px solid #2C7AD6',
                            borderRadius: '10px',
                            padding: '8px 16px',
                            cursor: 'pointer'
                        }}>Any</button>
                    </div>
                </div>

                {/* Cuarto div */}
                <div style={{
                    borderBottom: '1px solid black',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: '10px'
                }}>
                    {/* Título del segundo filtro */}
                    <h2 style={{ marginBottom: '10px' }}>Bags</h2>
                    {/* Checkboxes para la selección de opciones */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* Checkbox para la primera opción */}
                        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <input type="checkbox" name="checkbox" style={{ marginRight: '5px', width: '20px', height: '20px', borderRadius: '3px' }} />
                            1 Cabbing bag
                        </label>
                        {/* Checkbox para la segunda opción */}
                        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <input type="checkbox" name="checkbox" style={{ marginRight: '5px', width: '20px', height: '20px', borderRadius: '3px' }} />
                            1 Cabbing bag + 1 Checked bag
                        </label>
                        {/* Checkbox para la tercera opción */}
                        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <input type="checkbox" name="checkbox" style={{ marginRight: '5px', width: '20px', height: '20px', borderRadius: '3px' }} />
                            1 Cabbing bag + 2 Checked bag
                        </label>
                        {/* Checkbox para la cuarta opción */}
                        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <input type="checkbox" name="checkbox" style={{ marginRight: '5px', width: '20px', height: '20px', borderRadius: '3px' }} />
                            1 Checked bag
                        </label>
                        {/* Checkbox para la quinta opción */}
                        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <input type="checkbox" name="checkbox" style={{ marginRight: '5px', width: '20px', height: '20px', borderRadius: '3px' }} />
                            2 Checked bag
                        </label>
                    </div>
                </div>
            </div>


        </body>
    );
}

export default FiltroPrecioRango;