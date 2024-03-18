import React from 'react';
import ButtonAppBar from 'components/NavigationBar/TopBar';
import ContentForm from 'components/Content/Form';
import ImagesRow from 'components/Content/ImagesRow';
//import PrimarySearchAppBar from 'components/NavigationBar/TopBar';


const ListaVuelos: React.FC = () => {
  return (
    <div>
      <ButtonAppBar/>
      <ContentForm/>
        <p>
          <label htmlFor="select" className="inline-block text-gray-700 font-bold mb-2 mr-2" style={{ fontSize: '3em' }}>Trending</label>
          <label htmlFor="select" className="inline-block text-blue-700 font-bold mb-2 mr-2" style={{ fontSize: '3em' }}>Destination</label>
          <label htmlFor="select" className="inline-block text-gray-700 font-bold mb-2" style={{ fontSize: '3em' }}>Now Days</label>
        </p>
        <p className="text-gray-400 font-bold">Este es el contenido de la página 1.</p>
      <ImagesRow/>
      </div>
  );
}

export default ListaVuelos;

