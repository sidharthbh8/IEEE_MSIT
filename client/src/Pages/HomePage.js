import AboutUsComponent from "../components/AboutUsComponent";
import EventsComponent from "../components/EventComponent";
import GalleryComponent from "../components/GalleryComponent";

const HomePage = () => {
    return (
        <>
            <h1>This is home page</h1>
            <AboutUsComponent />
            <EventsComponent />
            <GalleryComponent />
        </>
    );
};
export default HomePage;