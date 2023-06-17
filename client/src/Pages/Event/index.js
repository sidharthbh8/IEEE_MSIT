import Head from "../../components/Event/Head";
import ContactUs from "../../components/Event/Contact";
import Description from "../../components/Event/Description";
import Location from "../../components/Event/Location";
import MoreEvents from "../../components/Event/MoreEvents";
import "./style.css"

const EventsPage = () => {
    return (
        <>
            <Head />
            <div className="container2">
                <div className="description"><Description /></div>
                <div className="location"><Location /></div>
            </div>
            <ContactUs />
            <MoreEvents />
        </>
    );
};
export default EventsPage;