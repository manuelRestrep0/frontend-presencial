import ButtonStop from 'components/Button/ButtonStops';
import CheckboxOption from 'components/Button/CheckboxOptionProps';
import PriceSlider from 'components/Button/PriceSlider';
import { Box, Typography, Divider } from '@material-ui/core';

interface Props {
	setMinPrice: React.Dispatch<React.SetStateAction<number>>
	setMaxPrice: React.Dispatch<React.SetStateAction<number>>
}

export default function FiltersColumn({setMinPrice, setMaxPrice}: Props) {
	
    return (
        <Box sx={{
            width: '300px',
            bgcolor: '#F1F1F1',
            border: '1px solid black',
            borderRadius: '10px',
            mt: '20px',
            ml: '20px',
            p: '10px'
        }}>
            <Typography variant="h4" gutterBottom>Filters</Typography>
            <Divider />

            <Box sx={{ pt: '10px', pb: '10px' }}>
                <Typography variant="h6" gutterBottom>Price</Typography>
                <Box sx={{ display: 'flex', mb: '10px'}}>
                    <PriceSlider/>
                </Box>
            </Box>
            <Divider />

            <Box sx={{ pt: '10px', pb: '10px' }}>
                <Typography variant="h6" gutterBottom>Stops</Typography>
                <Box sx={{ display: 'flex', mb: '10px' }}>
                    <ButtonStop label="0" />
                    <ButtonStop label="1" />
                    <ButtonStop label="2" />
                    <ButtonStop label="Any" />
                </Box>
            </Box>
            <Divider />

            <Box sx={{ pt: '10px', pb: '10px' }}>
                <Typography variant="h6" gutterBottom>Bags</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CheckboxOption label="1 Cabbing bag" />
                    <CheckboxOption label="1 Cabbing bag + 1 Checked bag" />
                    <CheckboxOption label="1 Cabbing bag + 2 Checked bag" />
                    <CheckboxOption label="1 Checked bag" />
                </Box>
            </Box>
			
        </Box>
    );
}
