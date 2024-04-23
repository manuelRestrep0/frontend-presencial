import BaggageSection from "components/templates/gestion-equipaje/baggageSection";
import Footer from "components/molecules/gestion-equipaje/footer";
import InfoSection from "components/templates/gestion-equipaje/infoSection";
import Navbar from "components/organisms/gestion-equipaje/navbar";
import RecommendationSection from "components/templates/gestion-equipaje/recommendationSection";

export const GestionEquipaje = () => {
    return (
        <div>
            <Navbar/>
            <BaggageSection/>
            <RecommendationSection/>
            <InfoSection/>
            <Footer/>
        </div>
    );
  }