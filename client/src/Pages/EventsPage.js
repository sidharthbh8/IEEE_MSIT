import AboutEventsComponent from "../components/EventsPageComponents/AboutEventsComponent";
import ContactUsComponent from "../components/EventsPageComponents/ContactUsComponent";
import DescriptionComponent from "../components/EventsPageComponents/DescriptionComponent";
import LocationComponent from "../components/EventsPageComponents/LocationComponent";
import MoreEventsComponent from "../components/EventsPageComponents/MoreEventsComponent";

const EventsPage = () => {
    return (
        <>
            <AboutEventsComponent />
            <div>
                <div className="description"><DescriptionComponent /></div>
                <div className="location"><LocationComponent /></div>
            </div>
            <ContactUsComponent />
            <MoreEventsComponent />
        </>
    );
};
export default EventsPage;