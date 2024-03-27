import React from 'react';
import ButtonAppBar from 'components/NavigationBar/TopBar';

function FiltroPrecioRango() {
    return (
        <body style={{ margin: 0 }}>
            <ButtonAppBar/>

            <div style={{ display: 'flex' }}>
                <div style={{
                    width: '300px',
                    height: '75vh',
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


                <main style={{ flex: 1 }}>
                    {/* Contenedor principal */}
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
                        {/* Labels y Inputs */}
                        <label htmlFor="stringInput" style={{ color: 'white', marginRight: '10px' }}>FROM - TO:</label>
                        <input type="text" id="stringInput" name="stringInput" style={{ marginRight: '10px', padding: '5px' }} />

                        <label htmlFor="dateInput" style={{ color: 'white', marginRight: '10px' }}>DEPART DATE:</label>
                        <input type="date" id="dateInput" name="dateInput" style={{ marginRight: '10px', padding: '5px' }} />

                        <label htmlFor="stringInput2" style={{ color: 'white', marginRight: '10px' }}>PASSENGERS:</label>
                        <input type="text" id="stringInput2" name="stringInput2" style={{ marginRight: '10px', padding: '5px' }} />

                        <label htmlFor="stringInput3" style={{ color: 'white' }}>CLASS:</label>
                        <input type="text" id="stringInput3" name="stringInput3" style={{ padding: '5px' }} />
                    </div>

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

                    <div style={{
                        marginTop: '20px',
                        marginLeft: '20px',
                        marginRight: '20px',
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'column', /* Cambié 'row' por 'column' */
                    }}>
                        {/* Primer div */}
                        <div style={{ marginBottom: '20px', border: '1px solid black', borderRadius: '8px', }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quibusdam fugiat iusto itaque, aliquid, voluptate omnis magnam consequuntur sequi animi reiciendis illo possimus veniam distinctio officiis porro voluptates dignissimos blanditiis.
                        </div>

                        {/* Segundo div */}
                        <div style={{ marginBottom: '20px', border: '1px solid black', borderRadius: '8px', }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam provident quam. Dolore similique blanditiis, tempora eligendi natus dicta fugiat ipsa porro cumque sed ipsam repellendus, laboriosam temporibus rem assumenda.
                        </div>

                        {/* Tercer div */}
                        <div style={{ marginBottom: '20px', border: '1px solid black', borderRadius: '8px', }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod accusamus nihil odit animi? Quaerat adipisci autem hic ratione vitae dicta ab neque recusandae odio quam, veniam dolores doloremque eaque quas.
                        </div>

                        {/* Cuarto div */}
                        <div style={{ border: '1px solid black', borderRadius: '8px', }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga similique cumque commodi iusto velit unde accusamus alias repudiandae aliquam repellendus sapiente maiores consectetur nisi laborum, esse ut. Pariatur, est laboriosam.
                        </div>
                    </div>
                </main>
            </div>
        </body>
    );
}

export default FiltroPrecioRango;