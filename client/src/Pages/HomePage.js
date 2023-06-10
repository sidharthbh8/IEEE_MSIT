import AboutUsComponent from "../components/AboutUs/AboutUsComponent";
import EventsComponent from "../components/EventComponent";
import GalleryComponent from "../components/GalleryComponent";
import MainComponent from "../components/Main/MainComponent";
import HomeComponent from "../components/Home/HomeComponent";
import FooterComponent from "../components/FooterComponent";

const HomePage = () => {
    return (
        <>
            <MainComponent />
            <HomeComponent />
            <AboutUsComponent />
            <EventsComponent />
            {/* <GalleryComponent /> */}
        </>
    );
};
export default HomePage;