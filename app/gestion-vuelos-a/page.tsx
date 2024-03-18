import NavBar from '@components/organisms/navbar/nav';
import SideBar from '@components/organisms/sidebar/sidebar';
import FlightForm from '@components/organisms/forms/flightForm';
export default function Web() {

  return(
  
  <main>
    <NavBar />
    <section className="flex">
      <SideBar/>
      <FlightForm/>

  
    </section>
  </main>
  
  
  );
  
};
