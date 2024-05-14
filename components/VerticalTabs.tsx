import React from 'react';
import {Grid, Tabs, Tab, Box } from '@mui/material';
import Profile from '../app/auth-B/Dashboard/profile';
import Password from '../app/auth-B/Dashboard/password';
import Email from '../app/auth-B/Dashboard/email';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const VerticalTabs: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'block'}}>
        <Grid container>
    
      <Tabs
        orientation="horizontal"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{ borderBottom: 1, borderColor: 'divider', width: '100%'}}
      >
        <Tab label="Perfil" />
        <Tab label="Cambiar Contraseña" />
        <Tab label="Cambiar Correo" />
      </Tabs>
      </Grid>
      
      <TabPanel value={value} index={0}>
        <Profile/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Password/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Email/>
      </TabPanel>
      
    </Box>
    
  );
};

export default VerticalTabs;