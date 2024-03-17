import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/nav/nav";
import SideBar from "./components/sidebar/sidebar";
import styles2 from "./main.css";
import FlightRegister from "./components/flight/flight";

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <section>
        <SideBar></SideBar>
        <FlightRegister></FlightRegister>
      </section>
    </main>
  );
}
