import AboutEventsComponent from "../components/EventsPageComponents/AboutEventsComponent";
import ContactUsComponent from "../components/EventsPageComponents/ContactUsComponent";
import DescriptionComponent from "../components/EventsPageComponents/DescriptionComponent";
import LocationComponent from "../components/EventsPageComponents/LocationComponent";
import MoreEventsComponent from "../components/EventsPageComponents/MoreEventsComponent";
import "./EventsPage.css"

const EventsPage = () => {
    return (
        <>
            <AboutEventsComponent />
            {/* <div className="container2">
                <div className="description"><DescriptionComponent /></div>
                <div className="location"><LocationComponent /></div>
            </div>
            <ContactUsComponent />
            <MoreEventsComponent /> */}
        </>
    );
};
export default EventsPage;