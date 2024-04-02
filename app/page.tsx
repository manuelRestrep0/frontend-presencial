import type { NextPage } from 'next';
import { GestionEquipaje } from './gestion_equipaje/page';

const Home: NextPage = () => {
  return (
    <div>
      <GestionEquipaje />
    </div>
  );
};

export default Home;
