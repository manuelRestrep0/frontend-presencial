import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';


// export default function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//       <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>

//     <img
//       src="https://www.nicepng.com/png/full/466-4665036_load-more-singapore-airlines-white-logo.png"
//       alt="logo singapure airlines"
//       width="120"
//       height="70"
//     />
//   </div>
//   <form action="/buscar" method="GET" style={{ display: 'flex', alignItems: 'center' }}>
//     <input
//       type="text"
//       id="search"
//       name="q"
//       placeholder="Ingresa tu búsqueda..."
//       style={{ borderRadius: '5px' }}
//     />
//     <IconButton type="submit">
//       <SearchIcon />
//     </IconButton>
//   </form>
//   <div style={{ display: 'flex', alignItems: 'center' }}>
//     <IconButton
//       edge="start"
//       size="large"
//       aria-label="account of current user"
//       aria-controls="primary-search-account-menu"
//       aria-haspopup="true"
//       color="inherit"
//     >
//       <AccountCircle />
//     </IconButton>
//     /</div>
// </Toolbar>


//       </AppBar>
//     </Box>
//   );
// }
export default function ButtonAppBar() {
  return (
    <header style={{ width: '100%', height: '154px' }}>
      {/* Primer div*/}
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#3A76F8', height: '78px', paddingLeft: '20px' }}>
        <img
          src="https://www.nicepng.com/png/full/466-4665036_load-more-singapore-airlines-white-logo.png"
          alt="logo singapure airlines"
          width="120"
          height="70"
        />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: '1' }}>
          <input type="text" placeholder="Search here" style={{ width: '250px', marginLeft: '-1px', marginRight: '-1px', borderRadius: '5px 0 0 5px', backgroundColor: '#5285D1', color: '#FFFFFF', padding: '8px', border: 'none', borderTopRightRadius: '0', borderBottomRightRadius: '0' }} />
          <button type="button" style={{ backgroundColor: '#6B9EFF', color: '#FFFFFF', borderRadius: '0 5px 5px 0', border: 'none', padding: '8px', width: '80px' }}>Search</button>
        </div>
        <IconButton
          edge="start"
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          style={{ color: '#FFFFFF' }}
        >
          <AccountCircle />
        </IconButton>
      </div>

      {/* Segundo div */}
      {/* <div style={{ width: '50%', height: '76px', backgroundColor: '#FFFFFF' }}></div> */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '76px', backgroundColor: '#FFFFFF', borderBottom: '1px solid black', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    {/* Botones de navegación */}
                    <button type="button" style={{ backgroundColor: 'transparent', color: '#000000', border: 'none', borderBottom: '2px solid transparent', padding: '8px 16px', margin: '0 10px' }}>Home</button>
                    <button type="button" style={{ backgroundColor: 'transparent', color: '#000000', border: 'none', borderBottom: '2px solid transparent', padding: '8px 16px', margin: '0 10px' }}>Booked</button>
                    <button type="button" style={{ backgroundColor: 'transparent', color: '#000000', border: 'none', borderBottom: '2px solid transparent', padding: '8px 16px', margin: '0 10px' }}>Travels</button>
                </div>
    </header>);
};
