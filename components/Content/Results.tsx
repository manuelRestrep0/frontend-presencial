import { Card, CardContent, Typography, Box, Divider } from '@material-ui/core';

export default function Results() {
    return (
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Primer Card */}
            <Card style={{ marginBottom: '20px', width: '90%', borderRadius: '8px', padding: '10px' }}>
                <CardContent>
                    <Typography variant="h6">3:00AM - 5:55AM</Typography>
                    <Typography variant="body2">MANAOS (BRA) - BOGOTA (COL)</Typography>
                    <Typography variant="body2">2 h 55 min | Non-Stop</Typography>
                    <Divider />
                    <Typography variant="h5" style={{ marginTop: '10px' }}>$100 per Adult</Typography>
                </CardContent>
            </Card>

            {/* Segundo Card */}
            <Card style={{ marginBottom: '20px', width: '90%', borderRadius: '8px', padding: '10px' }}>
                <CardContent>
                    <Typography variant="h6">3:00PM - 5:30PM</Typography>
                    <Typography variant="body2">MANAOS (BRA) - BOGOTA (COL)</Typography>
                    <Typography variant="body2">2 h 30 min | Non-Stop</Typography>
                    <Divider />
                    <Typography variant="h5" style={{ marginTop: '10px' }}>$160 per Adult</Typography>
                </CardContent>
            </Card>

            {/* Tercer Card */}
            <Card style={{ marginBottom: '20px', width: '90%', borderRadius: '8px', padding: '10px' }}>
                <CardContent>
                    <Typography variant="h6">7:00AM - 10:00AM</Typography>
                    <Typography variant="body2">MANAOS (BRA) - BOGOTA (COL)</Typography>
                    <Typography variant="body2">3 h 00 min | 1-Stop</Typography>
                    <Divider />
                    <Typography variant="h5" style={{ marginTop: '10px' }}>$100 per Adult</Typography>
                </CardContent>
            </Card>

            {/* Cuarto Card */}
            <Card style={{ width: '90%', borderRadius: '8px', padding: '10px' }}>
                <CardContent>
                    <Typography variant="h6">8:00AM - 11:50AM</Typography>
                    <Typography variant="body2">MANAOS (BRA) - BOGOTA (COL)</Typography>
                    <Typography variant="body2">3 h 50 min | 2-Stop</Typography>
                    <Divider />
                    <Typography variant="h5" style={{ marginTop: '10px' }}>$90 per Adult</Typography>
                </CardContent>
            </Card>
        </div>
    );
};
