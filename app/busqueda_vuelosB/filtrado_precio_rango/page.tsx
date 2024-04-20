import React from 'react';
import ButtonAppBar from 'components/NavigationBar/TopBar';
import FlightDetails from 'components/Content/FlightDetailsForm';
import BestResults from 'components/Content/BestResults';
import Results from 'components/Content/Results';
import FiltersColumn from 'components/Content/FiltersColumn';

function FiltroPrecioRango() {
    return (
        <body style={{ margin: 0 }}>
            <header><ButtonAppBar/></header>

            <div style={{ display: 'flex' }}>

                <div><FiltersColumn/></div>

                <main style={{ flex: 1 }}>
                    {/* Contenedor principal */}
                    <div><FlightDetails/></div>
                    <div><BestResults/></div>
                    <div><Results/></div>
                </main>
            </div>
        </body>
    );
}

export default FiltroPrecioRango;