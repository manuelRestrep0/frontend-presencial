import ButtonStop from 'components/Button/ButtonStops';
import CheckboxOption from 'components/Button/CheckboxOptionProps';

interface Props {
	setMinPrice: React.Dispatch<React.SetStateAction<number>>
	setMaxPrice: React.Dispatch<React.SetStateAction<number>>
}

export default function FiltersColumn({setMinPrice, setMaxPrice}: Props) {
	
    return (
        <div style={{
            width: '300px',
            height: 'auto',  // Cambiado de '75vh' a 'auto'
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
            <div style={{ borderBottom: '1px solid black', display: 'flex', flexDirection: 'column' }}>
                {/* Título del segundo div */}
                <h2>Price</h2>
                {/* Contenido del segundo div */}
                <div style={{ display: 'flex', marginBottom: '10px'}}>
                    {/* Primer input */}
                    <input id='min-price' type="number" style={{ marginRight: '5px', width: '100px', padding: '5px' }} 
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMinPrice(parseInt(event.target.value))}
					/>
                    {/* Separador */}
                    <span style={{ margin: '0 5px' }}>-</span>
                    {/* Segundo input */}
                    <input type="number" style={{ marginLeft: '5px', width: '100px', padding: '5px' }}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMaxPrice(parseInt(event.target.value))}
					/>
                </div>
            </div>

            {/* Tercer div */}
            <div style={{ borderBottom: '1px solid black', display: 'flex', flexDirection: 'column' }}>
                {/* Título del filtro de paradas */}
                <h2 style={{ marginBottom: '10px' }}>Stops</h2>
                {/* Botones de selección de paradas */}
                <div style={{ display: 'flex', marginBottom: '10px' }}> {/* Añadido margen inferior */}
                    {/* Botones de selección */}
                    <ButtonStop label="0" />
                    <ButtonStop label="1" />
                    <ButtonStop label="2" />
                    <ButtonStop label="3" />
                    <ButtonStop label="Any" />
                </div>
            </div>

            {/* Cuarto div */}
            <div style={{
                borderBottom: '1px solid black',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Título del segundo filtro */}
                <h2 style={{ marginBottom: '10px' }}>Bags</h2>
                {/* Checkboxes para la selección de opciones */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {/* Checkbox para la primera opción */}
                    <CheckboxOption label="1 Cabbing bag" />
                    {/* Checkbox para la segunda opción */}
                    <CheckboxOption label="1 Cabbing bag + 1 Checked bag" />
                    {/* Checkbox para la tercera opción */}
                    <CheckboxOption label="1 Cabbing bag + 2 Checked bag" />
                    {/* Checkbox para la cuarta opción */}
                    <CheckboxOption label="1 Checked bag" />
                </div>
            </div>
			
        </div>
    );
}